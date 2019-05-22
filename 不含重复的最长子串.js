let lengthOfLongestSubstring = (s) => {
  let sub = []
  let max = 0
  let sArray = s.split('')
  let j = 0
  for(let i = 0; i < sArray.length; i++) {
    for (let k = i; k < sArray.length; k++) {
      if (sub.indexOf(sArray[k]) === -1) {
        sub[j] = sArray[k]
        j++
      } else {
        max = max > sub.length ? max : sub.length
        sub = []
        j = 0
        break
      }
    }
  }
  max = max > sub.length ? max : sub.length
  return max
}

let s = '1'
console.log(lengthOfLongestSubstring(s))