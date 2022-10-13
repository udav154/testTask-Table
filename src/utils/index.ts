import { rmSync } from "fs";
import { RowData, NewRowData } from "../interfaces";
import { EMPTY_FILE_DATA, EMPTY_FOLDER_DATA } from "../settings";

export const getSumPrice = (id: number, tableData: RowData[]): number => {
  const element = tableData.find((el) => el.id === id);
  if (element === undefined) return 0;

  if (element.type === "row")
    return Number((element.quantity * element.unitPrice).toFixed(2));

  const childrenElements = tableData.filter((el) => el.parent === id);
  return Number(
    childrenElements
      .reduce((a, b) => a + getSumPrice(b.id, tableData), 0)
      .toFixed(2)
  );
};

export const getMargin = (row: RowData, allRows: RowData[]): number => {
  let counter = 0;
  if (row.parent === null) return counter;
  let tepmParentId: number | null = row.parent;
  while (tepmParentId !== null) {
    const a = allRows.find((el) => el.id === tepmParentId);
    if (a) {
      counter += 1;
      tepmParentId = a.parent;
    }
  }
  return counter;
};

export const typeTreeForFile = (row: RowData, allRows: RowData[]): number => {
  const sistersFile = allRows.filter((el) => el.parent === row.parent);
  const indexRow = sistersFile.findIndex((el) => el.id === row.id);

  if (indexRow === -1) return 0;

  if (sistersFile[indexRow + 1]) return 1;

  return 0;
};

export const typeTreeForFolder = (row: RowData, allRows: RowData[]): number => {
  const children = allRows.filter((el) => el.parent === row.id);

  if (children.length) return 1;

  return 0;
};

export const getTypeTree = (row: RowData, allRows: RowData[]): number => {
  if (row.type === "level") return typeTreeForFolder(row, allRows);
  return typeTreeForFile(row, allRows);
};

export const addRowBuType = (
  idEventRow: number,
  typeNewRow: string,
  dataRows: RowData[]
): NewRowData | null => {
  const eventRow = dataRows.find((el) => el.id === idEventRow);
  if (!eventRow) return null;
  const returnRow = typeNewRow === "row" ? EMPTY_FILE_DATA : EMPTY_FOLDER_DATA;

  return {
    ...returnRow,
    parent: eventRow.id,
  };
};

export const sortFolderChildren = (children: RowData[]) => {
  const childrenFile: RowData[] = [];
  // @ts-ignore
  const childrenFolder: RowData[] = children.reduce((a, b) => {
    if (b.type === "row") {
      childrenFile.push(b);
      return a;
    } else return [...a, b];
  }, []);
  // @ts-ignore
  const filterFiles = childrenFile.sort(
    (a: RowData, b: RowData) => a.id - b.id
  );
  // @ts-ignore
  const filterFolders = childrenFolder.sort(
    (a: RowData, b: RowData) => a.id - b.id
  );
  return filterFiles.concat(filterFolders);
};

export const sortFolderFiles = (data: RowData[], root: RowData) => {
  const res = root.parent !== null ? [] : [root];
  const children = data.filter((el) => el.parent === root.id);
  const sortChildren = sortFolderChildren(children);
  for (let i = 0; i < sortChildren.length; i++) {
    res.push(sortChildren[i]);
    if (sortChildren[i].type === "row") continue;
    const folderChildrenSort = sortFolderFiles(data, sortChildren[i]);
    res.push(...folderChildrenSort);
  }
  return res;
};

export const getSecondLinkFolderTree = (
  id: number,
  data: RowData[],
  addedRow: NewRowData | null
) => {
  const folder = data.find((el) => el.id === id && el.type === "level");
  if (!folder) return 0;

  if (folder.parent === null) return 0;
  const sistersFolders = data.filter(
    (el) => el.parent === folder.parent && el.type === "level"
  );
  const indexFolder = sistersFolders.findIndex((el) => el.id === folder.id);
  if (indexFolder === -1 || indexFolder === 0) return 0;
  const indexFirstFolder = data.findIndex(
    (el) => el.id === sistersFolders[0].id
  );
  const indexCurrFolder = data.findIndex((el) => el.id === folder.id);
  const countRowsBetweenFolders = data.slice(indexFirstFolder, indexCurrFolder);

  if (addedRow) {
    const indexAddedRow = data.findIndex(el=> el.id === addedRow.parent) +1
    if (indexAddedRow > indexFirstFolder && indexAddedRow <= indexCurrFolder) return countRowsBetweenFolders.length+1
  }

  return countRowsBetweenFolders.length;
};

export const recalculation = (
  parentID: number | null,
  storage: RowData[]
): RowData[] => {
  const rows = [...storage];
  const changedRows: RowData[] = [];

  if (parentID == null) return changedRows;
  let currentParentIndex = rows.findIndex((v) => v.id === parentID);
  if (currentParentIndex === -1) return changedRows;
  let currentParent = rows[currentParentIndex];

  do {
    const children = rows.filter((v) => v.parent == currentParent.id);
    const newPrice = children.reduce((acc, v) => acc + v.price, 0);
    if (currentParent.price === newPrice) break;
    rows[currentParentIndex].price = newPrice;
    changedRows.push(rows[currentParentIndex]);
    currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent);
  } while (currentParentIndex !== -1);

  return changedRows;
};

export const editRow = (
  row: RowData,
  storage: RowData[]
): { current: RowData; changed: RowData[] } => {
  const storageCopy = [...storage];
  const index = storageCopy.findIndex((v) => v.id === row.id);
  storageCopy.splice(index, 1, row);
  return { current: row, changed: recalculation(row.parent, storageCopy) };
};

export const saveRow = (
  rowData: NewRowData,
  storage: RowData[]
): { current: RowData; changed: RowData[] } => {
  const storageCopy = [...storage];
  const index = Math.max(...storageCopy.map((v) => v.id), 0) + 1;
  const row: RowData = { id: index, ...rowData };
  storageCopy.push(row);
  return { current: row, changed: recalculation(row.parent, storageCopy) };
};
