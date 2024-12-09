import { expect } from "jsr:@std/expect/expect";
// deno-lint-ignore no-explicit-any
export function expectArray(r: any[], e: any[]) {
    expect(r.length).toBe(e.length);
    expect(r).toEqual(e);
    expect(e).toEqual(r);
}