import React from "react";
import MainPage from "../pages/MainPage";

export interface IRouter {
  path: string;
  component: React.ReactNode;
}

export enum RouteNames {
  VIEW = "/",
  CONTROL = "/control",
}

export const routes: IRouter[] = [
  { path: RouteNames.CONTROL, component: <MainPage /> },
  { path: RouteNames.VIEW,  component: <MainPage /> },
];
