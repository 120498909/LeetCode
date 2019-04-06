let reverse = function(x) {
  let num = parseInt(x)
  let str = Math.abs(num).toString()
  let ans = ''
  if (num < -Math.pow(2, 31) || num > (Math.pow(2, 31) - 1) || num === 0) return 0
  ans = str.split('').reverse().join('')
  if (ans < -Math.pow(2, 31) || ans > (Math.pow(2, 31) - 1)) return 0  //注意反转后也不能超出范围
  if (num > 0) {
    return parseInt(ans)
  } else {
    return -parseInt(ans)
  }
}

let x = 123456
reverse(x)
