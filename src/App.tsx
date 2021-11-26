import React from "react";
import "./App.css";
import yakuList from "./data/yaku.json";
import { Yaku } from "./Components/Yaku";
import { Switch } from "@headlessui/react";

function App() {
  const [showClosedOnly, setShowClosedOnly] = React.useState(true);
  const [showBasedOnSpecial, setShowBasedOnSpecial] = React.useState(true);
  const [showBasedOnSequence, setShowBasedOnSequence] = React.useState(true);
  const [showBasedOnTriplet, setShowBasedOnTriplet] = React.useState(true);
  const [showBasedOnQuad, setShowBasedOnQuad] = React.useState(true);
  // Terminal == 老头牌 == 1，9
  // Honor == 字牌 == 东南西北白发中
  // 19 == 幺九 == 老头牌+字牌
  const [showBasedOn19, setShowBasedOn19] = React.useState(true);
  const [showBasedOnHonor, setShowBasedOnHonor] = React.useState(true);
  const [showBasedOnSuit, setShowBasedOnSuit] = React.useState(true);
  const [showBasedOnLuck, setShowBasedOnLuck] = React.useState(true);
  const [showBasedOnDraw, setShowBasedOnDraw] = React.useState(true);

  const selectAll = () => {
    setShowBasedOnSpecial(true);
    setShowBasedOnSequence(true);
    setShowBasedOnTriplet(true);
    setShowBasedOnQuad(true);
    setShowBasedOn19(true);
    setShowBasedOnHonor(true);
    setShowBasedOnSuit(true);
    setShowBasedOnLuck(true);
    setShowBasedOnDraw(true);
  };

  const diselectAll = () => {
    setShowBasedOnSpecial(false);
    setShowBasedOnSequence(false);
    setShowBasedOnTriplet(false);
    setShowBasedOnQuad(false);
    setShowBasedOn19(false);
    setShowBasedOnHonor(false);
    setShowBasedOnSuit(false);
    setShowBasedOnLuck(false);
    setShowBasedOnDraw(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <div
        className={[
          "container my-2",
          "flex flex-col justify-center items-start",
        ].join(" ")}
      >
        <div className="my-1">
          <button
            className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={selectAll}
          >
            全选
          </button>
          <button
            className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={diselectAll}
          >
            清空
          </button>
        </div>
        <div className="w-full my-1 flex flex-row justify-between">
          {" "}
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">特殊</Switch.Label>
              <Switch
                checked={showBasedOnSpecial}
                onChange={setShowBasedOnSpecial}
                className={`${
                  showBasedOnSpecial ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">特殊</span>
                <span
                  className={`${
                    showBasedOnSpecial ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">顺子</Switch.Label>
              <Switch
                checked={showBasedOnSequence}
                onChange={setShowBasedOnSequence}
                className={`${
                  showBasedOnSequence ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">顺子</span>
                <span
                  className={`${
                    showBasedOnSequence ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">刻子</Switch.Label>
              <Switch
                checked={showBasedOnTriplet}
                onChange={setShowBasedOnTriplet}
                className={`${
                  showBasedOnTriplet ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">刻子</span>
                <span
                  className={`${
                    showBasedOnTriplet ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">杠</Switch.Label>
              <Switch
                checked={showBasedOnQuad}
                onChange={setShowBasedOnQuad}
                className={`${
                  showBasedOnQuad ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">杠</span>
                <span
                  className={`${
                    showBasedOnQuad ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">幺九</Switch.Label>
              <Switch
                checked={showBasedOn19}
                onChange={setShowBasedOn19}
                className={`${
                  showBasedOn19 ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">幺九</span>
                <span
                  className={`${
                    showBasedOn19 ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">字牌</Switch.Label>
              <Switch
                checked={showBasedOnHonor}
                onChange={setShowBasedOnHonor}
                className={`${
                  showBasedOnHonor ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">字牌</span>
                <span
                  className={`${
                    showBasedOnHonor ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">同种类</Switch.Label>
              <Switch
                checked={showBasedOnSuit}
                onChange={setShowBasedOnSuit}
                className={`${
                  showBasedOnSuit ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">同种类</span>
                <span
                  className={`${
                    showBasedOnSuit ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">运气</Switch.Label>
              <Switch
                checked={showBasedOnLuck}
                onChange={setShowBasedOnLuck}
                className={`${
                  showBasedOnLuck ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">运气</span>
                <span
                  className={`${
                    showBasedOnLuck ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4 text-gray-400">流局</Switch.Label>
              <Switch
                checked={showBasedOnDraw}
                onChange={setShowBasedOnDraw}
                className={`${
                  showBasedOnDraw ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">流局</span>
                <span
                  className={`${
                    showBasedOnDraw ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
        <div className="my-1">
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
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="container">
          {yakuList.map((yaku, index) => {
            if (yaku.closedOnly && !showClosedOnly) {
              return null;
            }
            if (
              (yaku.isSpecial && showBasedOnSpecial) ||
              (yaku.isSequence && showBasedOnSequence) ||
              (yaku.isTriplet && showBasedOnTriplet) ||
              (yaku.isQuad && showBasedOnQuad) ||
              (yaku.is19 && showBasedOn19) ||
              (yaku.isSuit && showBasedOnSuit) ||
              (yaku.isHonor && showBasedOnHonor) ||
              (yaku.isLuck && showBasedOnLuck) ||
              (yaku.isDraw && showBasedOnDraw)
            )
              return <Yaku yaku={yaku} key={index} />;

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
