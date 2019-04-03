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

let s= "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
console.log(longestPalindrome(s))
