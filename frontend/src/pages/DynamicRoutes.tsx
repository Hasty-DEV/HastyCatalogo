import { Route } from "react-router-dom";
import { DynamicRoutesProps } from "../data/@types/Routes/Routes.types";
import MainLayout from "../ui/layout/MainLayout";

const DynamicRoutes: React.FC<DynamicRoutesProps> = ({ routes }) => {
  return (
    <>
      {routes.map((_route, index) => (
        <Route key={index} path={_route.path} element={<MainLayout />}>
          <Route index element={_route.element} />
        </Route>
      ))}
    </>
  );
};

export default DynamicRoutes;
