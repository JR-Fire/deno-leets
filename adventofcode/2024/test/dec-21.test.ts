import { expect } from "jsr:@std/expect";
import { ACCEPT, NUMPAD, pressCode, pressOnPad } from "../dec-21.ts";

const { test } = Deno;

test("NUMPAD keys to 029A", () => {
    expect(pressCode("029A").length).toEqual('<vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A'.split('').length);
});