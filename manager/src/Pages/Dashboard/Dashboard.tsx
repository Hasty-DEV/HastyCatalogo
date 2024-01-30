import { Routes, Route } from "react-router-dom";
import * as D from "../../Ui/Styles/Dashboard/Dashboard.styles";
import Sidebar from "../../Ui/Partials/Sidebar/Sidebar"; 

const Dashboard: React.FC = () => {
 
  return (
    <D.Container>
      <Sidebar />
      <D.Content>
        <D.Title>Home</D.Title>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outra-rota" element={<OutraRota />} />
        </Routes>
      </D.Content>
    </D.Container>
  );
};

const Home: React.FC = () => {
  return <div>Conteúdo da Home</div>;
};


const OutraRota: React.FC = () => {
  return <div>Conteúdo de outra rota</div>;
};

export default Dashboard;
