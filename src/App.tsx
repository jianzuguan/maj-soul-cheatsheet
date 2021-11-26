import React from "react";
import logo from "./logo.svg";
import "./App.css";
import yakuList from "./data/yaku.json";
import { Yaku } from "./Components/Yaku";
import { Switch } from "@headlessui/react";

function App() {
  const [showClosedOnly, setShowClosedOnly] = React.useState(true);

  return (
    <div className="container flex flex-col justify-center items-center">
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        {" "}
        <Switch.Group>
          <div className="flex items-center">
            <Switch.Label className="mr-4 text-gray-400">门前清</Switch.Label>
            <Switch
              checked={showClosedOnly}
              onChange={setShowClosedOnly}
              className={`${
                showClosedOnly ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">门前清</span>
              <span
                className={`${
                  showClosedOnly ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
        </Switch.Group>
      </div>

      {yakuList.map((yaku, index) => {
        if (yaku.closedOnly && !showClosedOnly) {
          return null;
        }
        return <Yaku yaku={yaku} key={index} />;
      })}
    </div>
  );
}

export default App;
