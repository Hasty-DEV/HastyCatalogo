import { BrowserRouter, Routes } from "react-router-dom";
import GlobalStyles from "./ui/styles/GlobalStyles";
import DynamicRoutes from "./pages/DynamicRoutes";
import { routesProps } from "./data/@types/Routes/Routes.types";

const routes: routesProps[] = [
  {
    path: "/home",
    element: <>Homeeeee</>
  },
];

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <DynamicRoutes routes={routes} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
