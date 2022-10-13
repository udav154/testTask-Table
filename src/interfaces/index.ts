export interface IUser {
  name: string;
  image: string;
}

export interface IPage {
  id: number;
  title: string;
  to: string;
}

export interface IAsideMenuElement {
  id: number;
  title: string;
}

export interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость
  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: "level" | "row";
}

export interface RowData extends NewRowData {
  id: number;
}

export interface ITableHeaders {
  id: number
  title: string
  type: string
}