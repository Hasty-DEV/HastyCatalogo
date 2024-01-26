import useAuth from "../../../Data/Hooks/useAuth";
import { PrivateRouteProps } from "../../../Data/@types/PrivateRoute/PrivateRoute.type";

const PrivateRoute = ({ Item, RedirectTo }: PrivateRouteProps) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <RedirectTo />;
};

export default PrivateRoute;