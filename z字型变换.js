let convert = function(s, numRows) {
  if(numRows === 1) {
    return s
  }
  let res = []
  let str = s.split('')
  let count = 0
  let ans = ''
  let row = 0
  while (count < str.length) {
    res[row] = new Array(numRows)
    if(row % (numRows - 1) === 0) {
      let j  = 0
      while(j < numRows) {
        res[row][j] = str[count]
        j++
        count++
      }
    } else {
      let shift = row % (numRows - 1)
      res[row][numRows - 1 - shift] = str[count]
      count++
    }
    row++
  }
  // return res
  for(let i = 0; i < numRows; i++) {
    for (let j = 0; j<row; j++) {
      if(res[j][i] !== undefined) {
        ans += res[j][i]
      }
    }
  }
  return ans
}

let s = "LEETCODEISHIRING"
console.log(convert(s, 4))