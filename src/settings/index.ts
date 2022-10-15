import { avatartImage } from "../assets/icons/images";
import { IUser, IPage, NewRowData, RowData } from "../interfaces";

export const KEY_CODE = {
  ENTER: "Enter",
  ESCAPE: "Escape",
};

export const NAVBAR_MENU: IPage[] = [
  { id: 0, title: "Просмотр", to: "/" },
  { id: 2, title: " Управление", to: "/control" },
];

export const CURRENT_PAGE: IPage = {
  id: 0,
  title: "Просмотр",
  to: "/",
};

export const CURRENT_USER: IUser = {
  name: "Антон Петров",
  image: avatartImage,
};

export const ASIDE_MENU = [
  { id: 0, title: "По проекту" },
  { id: 1, title: "Объекты" },
  { id: 2, title: "РД" },
  { id: 3, title: "МТО" },
  { id: 4, title: "СМР" },
  { id: 5, title: "График" },
  { id: 6, title: "МиМ" },
  { id: 7, title: "Рабочие" },
  { id: 8, title: "Капвложения" },
  { id: 9, title: "Бюджет" },
  { id: 10, title: "Финансирование" },
  { id: 11, title: "Панорамы" },
  { id: 12, title: "Камеры" },
  { id: 13, title: "Поручения" },
  { id: 14, title: "Контракты" },
];

export const TABLE_HEADERS: { id: number; title: string; type: string }[] = [
  { id: 0, title: "Уровень", type: "type" },
  { id: 1, title: "Наименование работ", type: "title" },
  { id: 2, title: "Ед.изм.", type: "unit" },
  { id: 3, title: "Колличество", type: "quantity" },
  { id: 4, title: "Цена за ед.", type: "unitPrice" },
  { id: 5, title: "Стоимость", type: "price" },
];
export const TABLE_COLUMS_WIDTH: { [key: string]: string } = {
  type: "inherit",
  title: "50%",
  unit: "200px",
  quantity: "200px",
  unitPrice: "200px",
  price: "200px",
};

export const EMPTY_FOLDER_DATA: NewRowData = {
  title: "",
  unit: "",
  quantity: 0,
  unitPrice: 0,
  price: 0,
  parent: 0,
  type: "level",
};

export const EMPTY_FILE_DATA: NewRowData = {
  title: "",
  unit: "",
  quantity: 0,
  unitPrice: 0,
  price: 0,
  parent: 0,
  type: "row",
};

export const STRING_FIELD = ["title", "unit"];

export const MOCK_TABLE_DATA: RowData[] = [
  {
    id: 0,
    title: "Южная строительная площадка",
    unit: "",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: null,
    type: "level",
  },
  {
    id: 1,
    title: "Фундаментальные работы",
    unit: "",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 0,
    type: "level",
  },
  {
    id: 2,
    title: "Статья работы № 1",
    unit: "м3",
    quantity: 1750,
    unitPrice: 108.7,
    price: 0,
    parent: 1,
    type: "row",
  },
  {
    id: 3,
    title: "Статья работы № 2",
    unit: "м3",
    quantity: 1200,
    unitPrice: 850,
    price: 0,
    parent: 1,
    type: "row",
  },
];

export const MOCK_TABLE_DATA_TEST: RowData[] = [
  {
    id: 0,
    title: "1",
    unit: "",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: null,
    type: "level",
  },
  {
    id: 3,
    title: "1.3",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 0,
    type: "level",
  },
  {
    id: 2,
    title: "1.2",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 0,
    type: "row",
  },
  {
    id: 7,
    title: "1.3.3",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 3,
    type: "level",
  },
  {
    id: 4,
    title: "1.4",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 0,
    type: "level",
  },
  {
    id: 1,
    title: "1.1",
    unit: "",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 0,
    type: "row",
  },

  {
    id: 5,
    title: "1.3.1",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 3,
    type: "row",
  },
  {
    id: 6,
    title: "1.3.2",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 3,
    type: "level",
  },
  {
    id: 8,
    title: "1.3.2.1",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 6,
    type: "row",
  },
  {
    id: 12,
    title: "1.4.2.1.1",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 11,
    type: "row",
  },

  {
    id: 10,
    title: "1.4.2",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 4,
    type: "level",
  },
  {
    id: 9,
    title: "1.4.1",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 4,
    type: "row",
  },
  {
    id: 11,
    title: "1.4.2.1",
    unit: "м3",
    quantity: 0,
    unitPrice: 0,
    price: 0,
    parent: 10,
    type: "level",
  },
];
