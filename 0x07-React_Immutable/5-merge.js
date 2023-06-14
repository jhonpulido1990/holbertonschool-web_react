import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const conElement = List(page1).concat(List(page2));
  return (conElement);
}

export function mergeElements(page1, page2) {
  const mergeElement = Map(page1).merge(Map(page2));
  return (mergeElement);
}
