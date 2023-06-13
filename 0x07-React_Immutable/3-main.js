// eslint-disable-next-line import/extensions
import { getListObject, addElementToList } from './3-list.js';

const obj = ['pablo', 'enrique'];

// eslint-disable-next-line jest/require-hook
console.log(getListObject(obj));
// eslint-disable-next-line jest/require-hook
console.log(addElementToList(obj, 'pablo'));
