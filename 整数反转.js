// let reverse = function(x) {
//   let num = parseInt(x)
//   let str = Math.abs(num).toString()
//   let ans = ''
//   if (num < -Math.pow(2, 31) || num > (Math.pow(2, 31) - 1) || num === 0) return 0
//   ans = str.split('').reverse().join('')
//   if (ans < -Math.pow(2, 31) || ans > (Math.pow(2, 31) - 1)) return 0  //注意反转后也不能超出范围
//   if (num > 0) {
//     return parseInt(ans)
//   } else {
//     return -parseInt(ans)
//   }
// }

//数学方法
let reverse = (x) => {
  if (x < -Math.pow(2, 31) || x > (Math.pow(2, 31) - 1) || x === 0) return 0
  let negative = false
  if(x < 0) {
    negative = true
  }
  x = Math.abs(x)
  let res = 0
  while (x !== 0) {
    let pop = x % 10
    x = parseInt(x / 10)
    res = res * 10 + pop
  }
  if(negative) {
    res = 0 - res
  }
  if (res < -Math.pow(2, 31) || res > (Math.pow(2, 31) - 1)) return 0
  return res
}

let x = 123456
reverse(x)
