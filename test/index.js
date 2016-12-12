import 'babel-register';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../src/';

describe('babel-plugin-auto-constant', () => {
  it('should assign upper case constants with no = value as stringified name', () => {
    const result = transformFileSync('./test/fixtures/input.js', {
      presets: ['es2015'],
      plugins: [
        [plugin]
      ]
    });
    const actual = result.code.trim();
    const expected = fs.readFileSync('./test/fixtures/expected.js', { encoding: 'utf8' }).trim();
    assert.equal(actual, expected, 'proxyquired namespaced paths mismatched');
  });
});
