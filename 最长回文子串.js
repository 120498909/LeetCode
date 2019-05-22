//O(n3) 的暴力解法
var longestPalindrome = function(s) {
  let max = 0
  let tmpMax = 0
  let maxStr = ''
  let tmpStr = ''
  let sub = ''
  let str = s.split('')
  for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
      sub += str[j]
      let reverse = sub.split('').reverse().join('')
      if(sub == reverse){
        tmpMax = sub.length
        tmpStr = sub
      } else{
          if(tmpMax > max){
            maxStr = tmpStr
            max =tmpMax
          }
          tmpMax = 0
          tmpStr = ''
      }
    }
    if(tmpMax > max){
      maxStr = tmpStr
      max =tmpMax
    }
    sub = ''
  }
  return maxStr
};

//动态规划
let longestPalindrome = (s) => {
  if (s === '' || s.length < 1) return ''
  let str = s.split('')
  let res = new Array(str.length)
  let max = 0
  let maxi = 0
  let maxj = 0
  for (let i = 0; i < str.length; i++) {     //初始化
    res[i] = new Array(str.length)
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        res[i][j] = true
      } else {
        res[i][j] = false
      }
    }
  }
  for (let j = 0; j < str.length; j++) {
      for (let i = 0; i < j; i++) {
      if(i + 1 === j && str[i] === str[j]){
        res[i][j] = true
        if(max < j - i + 1 ) {
          max = j - i + 1
          maxi = i
          maxj = j
        }
      }
      if(res[i + 1][j - 1] === true && str[i] === str[j]){
        res[i][j] = true
        if(max < j - i + 1 ) {
          max = j - i + 1
          maxi = i
          maxj = j
        }
      }
    }
  }
  let sub = str.slice(maxi, maxj + 1).join('')
  console.log(maxi, maxj)
}
// let s= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// // console.log(longestPalindrome(s))
longestPalindrome(s)