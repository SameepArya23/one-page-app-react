import CardsContainer from "./components/cards-container/cards-container.component";
import SideBar from "./components/side-bar/side-bar.component";
import "./app.css";
import { useContext } from "react";
import { DataContext } from "./context/data.context";

const App = () => {
  const { barOpen } = useContext(DataContext);
  return (
    <div className={`app ${barOpen ? "" : "add"}`}>
      <SideBar />
      <CardsContainer />
    </div>
  );
};

export default App;
