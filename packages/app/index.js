import dayjs from 'dayjs';
import { greet, splitPages } from '@learn/shared';

console.log(greet('pnpm 学习者'));
console.log('现在时间:', dayjs().format('YYYY-MM-DD HH:mm:ss'));

const todos = ['学 store 机制', '学符号链接', '学 workspace', '学 --filter', '学 dlx'];
console.log('分页结果:', JSON.stringify(splitPages(todos, 2)));
