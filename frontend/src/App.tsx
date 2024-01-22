import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import GlobalStyles from "./ui/styles/GlobalStyles";
import MainLayout from "./ui/layout/MainLayout";

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
