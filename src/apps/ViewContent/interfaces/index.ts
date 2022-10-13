import { IAsideMenuElement, ITableHeaders, RowData, NewRowData } from "../../../interfaces";

export interface IContetnHead {
  currentCategory: IAsideMenuElement;
}

export interface IAside {
  currentCategory: IAsideMenuElement;
  menu: IAsideMenuElement[];
  handleChangeCategory: (id: number) => void;
}
export interface IAsideElement {
  category: IAsideMenuElement;
  isCurrent: boolean;
  onClick: (id: number) => void;
}

export interface ITable {
  data: RowData[];
  editingRow: null | RowData;
  addedRow: null | NewRowData;
  isErrorFied: { [key: string]: boolean } 
  checkChildren: (parentID: number) => boolean 
  setEditMode: (id: number) => void;
  handleEditingRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditAddedRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handeleAddRow: ({ id, type }: { id: number; type: string }) => void;
}

export interface ITableHeader {
  headers: ITableHeaders[];
}

export interface ITableBody {
  data: RowData[];
  headers: ITableHeaders[];
  handleEditingRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editingRow: null | RowData;
  addedRow: null | NewRowData;
}

export interface IRenderRow {
  rowData: RowData;
  headers: ITableHeaders[];
  renderFieldRow: any;
  isEditing: boolean;
  value: string | number;
  id: number;
  setEditMode: (id: number) => void;
}

export interface IRenderLevel {
  rowData: RowData;
  headers: ITableHeaders[];
  renderFieldLevel: any;
  isEditing: boolean;
  value: string | number;
  id: number;
  addedRow?: NewRowData | null
  checkChildren: (parentID: number)=> boolean
  handleEditAddedRow?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditMode: (id: number) => void;
}

export interface IRenderRow {
  rowData: RowData;
  headers: ITableHeaders[];
  renderFieldRow: any;
}

export interface IRenderField {
  rowData: RowData;
  margin: number;
  typeTree: number;
  isEditing?: boolean;
}

export interface ITableInput {
  id?: number;
  value: number | string;
  ariaLabel?: string;
  isEditing?: boolean;
  type?: string
  step?: string
  isErrorFied?:{ [key: string]: boolean } 
  setEditMode?: (id: number) => void;
  handleEditingRow?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITreeFolderField {
  type?: "row" | "level";
  margin?: number;
  typeTree?: number;
  id?: number;
  isEditing?: boolean;
}

export interface ILevelButton {
  margin?: number;
  typeTree?: number;
  id?: number;
  type?: "row" | "level";
  isEditing?: boolean;
  secondLinkFolderTree?: number
  handeleAddRow?: ({ id, type }: { id: number; type: string }) => void;
  setEditMode?: (id: number) => void;
}

export interface IEmptyAdedRow {
  isErrorFied?:{ [key: string]: boolean } 
  headers: ITableHeaders[];
  addedRow: null | NewRowData;
  isDrawTree: boolean
  handleEditAddedRow:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
