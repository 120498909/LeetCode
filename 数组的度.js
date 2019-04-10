let findShortestSubArray = (nums) => {
  let deg = {}
  let d = 0
  let len = 50000
  for(let i = 0; i < nums.length; i++) {
    if(deg[nums[i]] === undefined) {
      deg[nums[i]] = 1
      d = d > deg[nums[i]] ? d : deg[nums[i]]
    } else {
      deg[nums[i]]++
      d = d > deg[nums[i]] ? d : deg[nums[i]]
    }
  }
  for(let key in deg) {
    if(deg[key] === d) {
      let tmp = nums.lastIndexOf(parseInt(key)) - nums.indexOf(parseInt(key)) + 1
      len = len < tmp ? len : tmp
    }
  }
    console.log(len)
}

let nums = [1, 2, 2, 4, 5, 1]
findShortestSubArray(nums)