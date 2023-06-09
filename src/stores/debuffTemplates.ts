import { DiceType, DynamissBuff, HelloWorldType } from './practiceStore';

interface DebuffTemplate {
  dynamis: DynamissBuff;
  dice: DiceType;
  helloWorld: HelloWorldType;
}

export const debuffTemplates: DebuffTemplate[][] = [
  [
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
  ],
  [
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
  ],
  [
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
  ],
  [
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
  ],
  [
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 2, helloWorld: 'far' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 1, helloWorld: 'far' },
    { dynamis: 2, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
  ],
  [
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 1, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 1, helloWorld: 'far' },
    { dynamis: 1, dice: 1, helloWorld: 'near' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 0, helloWorld: '' },
    { dynamis: 2, dice: 2, helloWorld: 'near' },
    { dynamis: 1, dice: 2, helloWorld: 'far' },
  ],
];
