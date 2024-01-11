import { ReactNode } from "react";

export interface routesProps {
  path: string;
  element: ReactNode;
}

export interface DynamicRoutesProps {
  routes: routesProps[];
}