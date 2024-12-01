export function shortestSubarray(nums: number[], k: number): number {
  if (nums.filter(n => n >= k).length > 0)
    return 1;

  let start = 0;
  let end = nums.length - 1;

  while (nums[start] <= 0 && start < end) {
    start++;
  }
  while (nums[end] <= 0 && end > start) {
    end--;
  }

  let r = -1;
  let sm = 0;
  let m = 0;
  for (let i = start; i <= end; i++) {
    sm += nums[i];
    m++;
    if (sm >= k) {
      let minstart = start;
      let minsum = sm - nums[minstart];
      let minix = m - 1;
      while (minsum >= k) {
        minstart++;
        minsum -= nums[minstart];
        minix--;
      }
      if (r < 2) {
        r = Math.min(m, minix + 1);
      }
      else {
        let t = Math.min(m, minix + 1);
        r = Math.min(r, t);
      }

      if (r == 2)
        return r;
    }

    let s0 = start;
    let sp = sm - nums[s0];
    let p = m - 1;
    while (s0 < i) {
      s0++;
      sp -= nums[s0];
      p--;

      if (sp >= k) {
        if (r < 2) {
          r = Math.min(m, p);
        }
        else {
          let t = Math.min(m, p);
          r = Math.min(r, t);
        }

        if (r == 2)
          return r;
      }
    }
  }

  return r;
}
