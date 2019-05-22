var trap = function(height) {
  if(height.length <= 1) return 0
  let sum = 0
  // let maxH = Math.max(...height)
  // let maxI = height.indexOf(maxH)
  let maxH = height[0]
  let maxI = 0
  for(let i = 0; i < height.length; i++) {
    if(height[i] > maxH) {
      maxH = height[i]
      maxI = i
    }
  }
  let tmp = height[0]
  for(let i = 1; i < maxI; i++) {
    if(height[i] > tmp) {
      tmp = height[i]
    } else {
      sum += (tmp - height[i])
    }
  }
  tmp = height[height.length - 1]
  for(let j = height.length -1; j > maxI; j--) {
    if(height[j] > tmp) {
      tmp = height[j]
    } else {
      sum += (tmp - height[j])
    }
  }
  return sum
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))