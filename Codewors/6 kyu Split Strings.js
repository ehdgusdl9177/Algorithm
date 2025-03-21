// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let answer = [];
    let strS = str.split("");
    
    for(let i = 0; i < strS.length; i += 2) {
      if(strS[i+1]) answer.push(strS[i]+strS[i+1])
      else answer.push(strS[i]+"_")
    }
    return answer;
  }