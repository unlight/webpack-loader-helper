import * as assert from 'assert';
import * as lib from './index';

it('smoke', () => {
    assert(lib);
});

it('name', () => {
    const result = lib.loader('css');
    assert(result.loader === 'css-loader');
});

it('name contains loader', () => {
    const result = lib.loader('ts-loader');
    assert(result.loader === 'ts-loader');
});

it('options', () => {
    const result = lib.loader('ts', { sourceMap: true });
    assert.deepEqual(result.options, { sourceMap: true });
});
