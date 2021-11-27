import { getPatternArr } from '../utils/getPatternArr';
import { MahJongTile } from './MahJongTile';
import { YakuGroupSpacing } from './YakuGroupSpacing';

interface Props {
  yaku: {
    name: string;
    description: string;
    pattern: string;
    hanValue: string;
    closedOnly?: boolean;
    openReduceHan?: boolean;
    dealerOnly?: boolean;
    nonDealerOnly?: boolean;
  };
}
export default function Yaku(props: Props) {
  const { yaku } = props;
  const {
    name,
    description,
    pattern,
    hanValue,
    closedOnly,
    openReduceHan,
    dealerOnly,
    nonDealerOnly,
  } = yaku;

  const patternCodes = getPatternArr(pattern);
  return (
    <div
      key={`${name}`}
      className={[
        'w-full flex flex-col',
        'mb-1',
        'p-4',
        'border-2 border-indigo-900',
      ].join(' ')}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-yellow-300">
          {name} ({hanValue})
        </h2>
        {closedOnly && <p className="text-green-500">门前清限定</p>}
        {openReduceHan && <p className="text-green-500">副露减1番</p>}
        {dealerOnly && <p className="text-green-500">庄家限定</p>}
        {nonDealerOnly && <p className="text-green-500">子家限定</p>}
      </div>
      <p className="text-gray-400">{description}</p>
      <div className="w-full flex flex-row">
        {patternCodes.map((patternCode, patternCodeIndex: number) =>
          patternCode ? (
            <MahJongTile
              key={`${name}${patternCodeIndex}`}
              code={patternCode}
            />
          ) : (
            <YakuGroupSpacing key={`${name}${patternCodeIndex}`} />
          )
        )}
      </div>
    </div>
  );
}
