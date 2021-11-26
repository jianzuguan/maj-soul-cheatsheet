import React from "react";
import logo from "./logo.svg";
import "./App.css";
import yakuList from "./data/yaku.json";
import { MahJongTile } from "./Components/MahJongTile";
import { YakuGroupSpacing } from "./Components/YakuGroupSpacing";
import { getPatternArr } from "./utils/getPatternArr";

function App() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <img src={logo} className="App-logo" alt="logo" />

      {yakuList.map((yaku, index) => {
        const patternCodes = getPatternArr(yaku.pattern);
        return (
          <div
            key={`${yaku.name}`}
            className={[
              "w-full flex flex-col",
              "mb-1",
              "p-4",
              "border-2 border-indigo-900",
            ].join(" ")}
          >
            <div className="flex flex-row justify-between">
              <h2 className="text-yellow-300">{yaku.name}</h2>
              {yaku.closedOnly && <p className="text-green-500">门前清限定</p>}
              {yaku.openReduceHan && (
                <p className="text-green-500">副露减1番</p>
              )}
            </div>
            <p className="text-gray-400">{yaku.description}</p>
            <div className="w-full flex flex-row">
              {patternCodes.map((patternCode, patternCodeIndex: number) =>
                patternCode ? (
                  <MahJongTile
                    key={`${yaku.name}${patternCodeIndex}`}
                    code={patternCode}
                  />
                ) : (
                  <YakuGroupSpacing key={`${yaku.name}${patternCodeIndex}`} />
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
