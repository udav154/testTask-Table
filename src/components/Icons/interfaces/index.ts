export type TtypesIcon = "menu" | "arrowBottom" | "customArray" | "listElement" | undefined;


export interface IconProp {
  variantIcon: string;
  variantClass?: string;
}

export interface IvariantsIcons {
  [key: string]: React.ReactNode;
}

