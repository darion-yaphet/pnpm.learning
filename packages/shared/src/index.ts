import { chunk } from 'lodash-es';

export function greet(name: string): string {
  return `你好, ${name}! 来自 @learn/shared 的问候`;
}

export function splitPages<T>(list: T[], pageSize = 2): T[][] {
  return chunk(list, pageSize);
}
