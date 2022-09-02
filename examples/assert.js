import { strict as assert } from 'assert';

assert.equal([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5], '不相等');