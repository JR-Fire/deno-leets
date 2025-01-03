import { expect } from "jsr:@std/expect/expect";
// deno-lint-ignore no-explicit-any
export function expectArray(r: any[], e: any[]) {
  expect(r.length).toBe(e.length);
  expect(r).toEqual(e);
  expect(e).toEqual(r);
}

// deno-lint-ignore no-explicit-any
export function print(m: any[][], t: string, animate: boolean = true) {
  console.clear();
  console.log(t);
  console.log(m.map(r => r.join('')).join('\n'));

  if (animate)
    //poor man's delay
    for (let sleep = 0; sleep < 1000000000; sleep++);

  // let tmr: number;
  // const p = new Promise((r) => { tmr = setTimeout(r, 5000); });

  // p.then().finally(() => {
  //     if (tmr)
  //         clearTimeout(tmr)
  // });

  // const handle = setTimeout(callback, timeout)
  // clearTimeout(handle)

  // let handle
  // await Promise.race([
  //     http.get(‘pocketgems.com / careers /’),
  //     new Promise((resolve, reject) => {
  //         handle = setTimeout(() => {
  //             handle = undefined
  //             resolve()
  //         }, timeout)
  //     })
  // ])
  // if (handle) {
  //     clearTimeout(handle)
  // }
}