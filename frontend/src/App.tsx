import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import GlobalStyles from "./ui/styles/global";
import MainLayout from "./ui/components/layout/MainLayout";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MainLayout />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
