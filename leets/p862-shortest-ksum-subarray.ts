function shortestSubarrayO(nums: number[], k: number): number {
  let ixS = 0
  let ixE = nums.length;
  let sum = nums[ixS];
  let l = -1;

  while (ixS < ixE) {
    while (sum >= k) {
      l = ixE - ixS;
      sum -= nums[ixS];
      ixS++;
    }

    
    if (ixE > ixS)
      sum+=nums[ixE];

      ixE--;
  }

  return l;
}

function shortestSubarrayN2(nums: number[], k: number): number {
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

      if (r > 2) {
        r = Math.min(r, Math.min(m, minix + 1));
      }
      else if (r < 2) {
        r = Math.min(m, minix + 1);
      }
      else
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
        if (r > 2) {
          r = Math.min(r, Math.min(m, p));
        }
        else if (r < 2) {
          r = Math.min(m, p);
        }
        else
          return r;
      }
    }
  }

  return r;
}

export function shortestSubarray(nums: number[], k: number): number {
  //return shortestSubarrayN2(nums, k);
  return shortestSubarrayO(nums, k);
}
