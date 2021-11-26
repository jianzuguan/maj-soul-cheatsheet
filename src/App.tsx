import logo from "./logo.svg";
import "./App.css";
import yakuList from "./data/yaku.json";
import { Yaku } from "./Components/Yaku";

function App() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <img src={logo} className="App-logo" alt="logo" />

      {yakuList.map((yaku, index) => (
        <Yaku yaku={yaku} key={index} />
      ))}
    </div>
  );
}

export default App;
