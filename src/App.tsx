import React from 'react';
import yakuList from './data/yaku.json';
import Yaku from './Components/Yaku';
import Toggle from './Components/Toggle';

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
          'container my-2',
          'flex flex-col justify-center items-start',
        ].join(' ')}
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
        <div className="w-full my-1 flex flex-row flex-wrap">
          <Toggle state={showBasedOnSpecial} setState={setShowBasedOnSpecial}>
            特殊
          </Toggle>
          <Toggle state={showBasedOnSequence} setState={setShowBasedOnSequence}>
            顺子
          </Toggle>
          <Toggle state={showBasedOnTriplet} setState={setShowBasedOnTriplet}>
            刻子
          </Toggle>
          <Toggle state={showBasedOnQuad} setState={setShowBasedOnQuad}>
            杠
          </Toggle>
          <Toggle state={showBasedOn19} setState={setShowBasedOn19}>
            幺九
          </Toggle>
          <Toggle state={showBasedOnHonor} setState={setShowBasedOnHonor}>
            字牌
          </Toggle>
          <Toggle state={showBasedOnSuit} setState={setShowBasedOnSuit}>
            花色
          </Toggle>
          <Toggle state={showBasedOnLuck} setState={setShowBasedOnLuck}>
            幸运
          </Toggle>
          <Toggle state={showBasedOnDraw} setState={setShowBasedOnDraw}>
            抽牌
          </Toggle>
        </div>
        <div className="my-1">
          <Toggle state={showClosedOnly} setState={setShowClosedOnly}>
            门前清
          </Toggle>
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
