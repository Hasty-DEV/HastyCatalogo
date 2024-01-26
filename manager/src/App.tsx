import RoutesApp from "./Pages";
import { AuthProvider } from "./Data/Contexts/Auth";
import GlobalStyle from "./Ui/Styles/Global";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
