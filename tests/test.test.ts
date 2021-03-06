import { describe, it, Test } from "mocha";
import { lazy } from "../src/lazyval";
import { assert } from "chai";

class TestFunctions {
    constructor() { }
    @lazy hello(): string {
        return 'hello';
    }
    @lazy date(): Date {
        return new Date();
    }
    @lazy echo(s: string): string {
        return s;
    }
    @lazy add(a: number, b: number): number {
        return a + b;
    }

    @lazy join(...args: string[]): string {
        return args.join('.');
    }

}

describe('test lazy-val:', () => {
    const testFunctions = new TestFunctions();
    const date = testFunctions.date();
    it('引数なしの関数', () => {
        assert.equal(testFunctions.hello(), "hello");
    });
    it('引数1つの関数', () => {
        assert.equal(testFunctions.echo('hello'), "hello");
        assert.equal(testFunctions.echo('good-bye'), "hello");
    });
    it('引数2つの関数', () => {
        assert.equal(testFunctions.add(1, 2), 3);
        assert.equal(testFunctions.add(3, 3), 3);
    });
    it('レスト引数の関数', () => {
        assert.equal(testFunctions.join('1', '2', '3', '4', '5'), "1.2.3.4.5");
        assert.equal(testFunctions.join('1', '1', '1', '1'), "1.2.3.4.5");
    });
    it('返り値がランダムの関数', () => {
        assert.equal(testFunctions.date(), date);
    });
});