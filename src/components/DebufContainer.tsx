import {
  DiceType,
  DynamissBuff,
  HelloWorldType,
} from '../stores/practiceStore';
import { FixedDebuff } from './FixedDebuff';

interface Props {
  dynamis: DynamissBuff;
  dice: DiceType;
  helloWorld: HelloWorldType;
}

function getDiceAndHelloWorldSrc(dice: DiceType, helloWorld: HelloWorldType) {
  let diceSrc = '';
  let helloWorldSrc = '';

  switch (dice) {
    case 1:
      //dice1のアセットURL
      diceSrc = 'https://xivapi.com/i/015000/015401_hr1.png';
      break;
    case 2:
      //dice3のアセットURL
      diceSrc = 'https://xivapi.com/i/015000/015402_hr1.png';
      break;
    default:
      break;
  }

  switch (helloWorld) {
    case 'near':
      //nearデバフアイコン
      helloWorldSrc = 'https://xivapi.com/i/015000/015141_hr1.png';
      break;
    case 'far':
      helloWorldSrc = 'https://xivapi.com/i/015000/015142_hr1.png';
      break;
    default:
      break;
  }

  return [diceSrc, helloWorldSrc];
}

export function DebufContainer({ dynamis, dice, helloWorld }: Props) {
  const dynamissIconSrc = 'https://xivapi.com/i/015000/015145_hr1.png';
  const [diceSrc, helloWorldSrc] = getDiceAndHelloWorldSrc(dice, helloWorld);

  return (
    <div className="ml-1 flex w-72">
      <div className="relative h-10">
        <img src={dynamissIconSrc} className="h-full max-w-full scale-75" />
        <span className="absolute -top-1 left-5 text-white">{dynamis}</span>
      </div>
      <div className="h-10">
        <img src={diceSrc} className="h-full max-w-full scale-75" />
      </div>
      <div className="h-10">
        <img src={helloWorldSrc} className="h-full max-w-full scale-75" />
      </div>
      <FixedDebuff />
    </div>
  );
}
