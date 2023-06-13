// eslint-disable-next-line import/extensions
import accessImmutableObject from './2-nested.js';

const obj = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

// eslint-disable-next-line jest/require-hook
console.log(accessImmutableObject(obj, ['name', 'first']));
