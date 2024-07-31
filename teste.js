function solution(str){
    let lword = ''
    let reverse = ''
    for(let i = 1; str.length >= i; i++){
      lword = str.charAt(str.length - i)
      console.log(lword)
      reverse += lword
    }
    return console.log(reverse)
  }

solution('mateus')