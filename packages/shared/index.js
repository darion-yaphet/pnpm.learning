import { chunk } from 'lodash-es';

export function greet(name) {
  return `Hello 你好, ${name}! 来自 @learn/shared 的问候`;
}

export function splitPages(list, pageSize = 2) {
  return chunk(list, pageSize);
}
