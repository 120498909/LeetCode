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

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

// rl.on('line', function(line){ // javascript每行数据的回调接口
//   if(line === '') {  //边界条件
//     console.log(0)
//     return
//   }
//   if(line.length === 1) {  //边界条件
//     console.log(1)
//     return
//   }
//   let str = line.split('')
//   let sub = ''
//   let max = 0
//   for(let i = 0; i < line.length; i++) {  //该重循环控制当前子串的第一个字符
//     for(let j = i; j < line.length; j++) {  //该重循环为第一个字符确定后，子串的长度
//       if(sub.indexOf(str[j]) === -1) {  //如果str[j]不在sub中，即不重复，就将其放入sub中
//         sub += str[j]
//       } else {  //否则，计算当前无重复子串长度，与max比较，较大者来更新max
//         max = max > sub.length ? max : sub.length
//         break
//       }
//     }
//     sub = ''  //每重循环结束，sub清零
//   }
//   console.log(max)
// });
