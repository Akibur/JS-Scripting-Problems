
//Return the length of the longest word in the provided sentence.Your response should be a number.





function findLongestWordLength(str) {

  let arr = str.split(" ");
   let max = 0;
  console.log(arr);
  for(let i=0; i< arr.length ;i++){
      
      if(max < arr[i].length){
        max=arr[i].length;
      }

  }

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");