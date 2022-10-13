import { getSumPrice, sortFolderFiles } from "../utils";
import { IUser, RowData } from "../interfaces";
import { persistState } from '@storeon/localstorage'
import { ASIDE_MENU, MOCK_TABLE_DATA , MOCK_TABLE_DATA_TEST} from "../settings";

export const currentUser = (store: any): void => {
  store.on("@init", () => ({
    currentUser: {},
  }));
  store.on("currentUser/set", (_: unknown, currentUser: IUser) => {
    return { currentUser };
  });
};

export const asideMenu = (store: any): void => {
  store.on("@init", () => ({
    asideMenu: ASIDE_MENU,
  }));
  store.on("asideMenu/set", (_: unknown, asideMenu: IUser) => {
    return { asideMenu };
  });
};

export const tableData = (store: any): void => {
  store.on("@init", () => {
    const root = MOCK_TABLE_DATA.find((el) => el.parent === null);
    if (!root) return {};
    const sortableData = sortFolderFiles(MOCK_TABLE_DATA, root);
    const dataWithPrice = sortableData.reduce(
      // @ts-ignore
      (a, b) => [...a, { ...b, price: getSumPrice(b.id, MOCK_TABLE_DATA) }],
      []
    );
    return {
      tableData: dataWithPrice,
    };
  });
  store.on("tableData/set", (_: unknown, tableData: RowData[]) => {
    const root = tableData.find((el) => el.parent === null);
    if (!root) return {};
    const sortableData = sortFolderFiles(tableData, root);
    const dataWithPrice = sortableData.reduce(
      // @ts-ignore
      (a, b) => [...a, { ...b, price: getSumPrice(b.id, tableData) }],
      []
    );
    return {
      tableData: dataWithPrice,
    };
  });
};

export const storeonParams = [currentUser, asideMenu, tableData, persistState(['tableData'])];
