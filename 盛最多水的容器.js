let maxArea = (height) => {
  let l = 0, r = height.length - 1, sMax = 0
  while(l < r) {
    let tmpH = height[l] > height[r] ? height[r] : height[l]
    let tmpS = (r - l) * tmpH
    if(tmpS > sMax) {
      sMax = tmpS
    }
    if(height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return sMax
}

let height = [1,8,4,5,6,8,5,3]
console.log(maxArea(height))