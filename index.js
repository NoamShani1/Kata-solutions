// Double Every Other - 7 kyu
function doubleEveryOther(a) {
  

    for (var i = 1; i < a.length; i+=2) {
        a[i] *= 2;
    }
    return a;

  
}

// Square(n) Sum

function squareSum(numbers){

    let result = 0 
    
      for (let i = 0; i< numbers.length; i++){
      
      result += numbers[i] **2
  
    }
  
    return result
    
  }

  // Student's Final Grade

  const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) return 100
    if (exam > 75 && projects >= 5) return 90
    if (exam > 50 && projects >= 2) return 75
  
    return 0
  }


  // 6 kyu - The Supermarket Queue

  function queueTime(customers, n) {

    //TODO
    let result = []
    
    for(let i = 0; i< n; i++){
      result.push(0)
    }
  for (let customer of customers){
    result[0] += customer
      // always add to the first tile so that the lowest number is always first 
    result.sort((a,b) => a-b)
    console.log(result)
  }
  // resturn the last index 
    return result[result.length-1]
  }


  // Decode the Morse code

  decodeMorse = function(morseCode){

  //your code here
const MORSE_CODE = { 
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': '\'',
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_',
    '...---...': 'SOS'
  }
  
  return morseCode
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => MORSE_CODE[b]
          ).join('')
      ).join(' ').trim();
  }
    

  //7 kyu Two Oldest Ages
  // return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  
    let sortedA= ages.sort(function (a, b) {  return a - b;  }); 
    
      return sortedA.slice(-2)
  
  }


  // 6 kyuCount characters in your string


  function count (string) {  

    const count = {};
          
    string.split('').forEach(char => {
      
      count[char] = count [char] ? (count[char] +1) :1;
      
      
    })
    return count
  }

  //  7 kyu Unscrambled eggs
  function unscrambleEggs(word){

    let newWord = word.replace(/egg/g, '')
    
    return newWord
    
      
    }

   // 6 kyu Count characters in your string

   function count (string) {  

    const count = {};
          
    string.split('').forEach(char => {
      
      count[char] = count [char] ? (count[char] +1) :1;
      
      
    })
    return count
  }
  


    

  // 6 kyu Which are in?
  function inArray(array1,array2){
    let x;
    let y;
    let r = [];
    for (x = 0; x < array1.length; x++) { 
      for (y = 0; y < array2.length; y++) {
        if(array2[y].includes(array1[x]) === true){
            r.push(array1[x]);
        }else{
  
        }
      }
    }
    r = [...new Set(r)];
    return r.sort();
    }


    //7 kyu The Office II - Boredom Score

    const SCORES = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      'pissing about': 25
    };
    
    function boredom(staff){
      let val = Object.keys(staff).reduce((acc, cur) => acc + SCORES[staff[cur]], 0);
        
      if (val <= 80) return 'kill me now';
      if (val > 100) return 'party time!!';
      return 'i can handle this';
    }

    
    // 7 kyu Pandemia ???????

    function infected(s) {
  

 if(s.split('X').join('') === '') return 0
     let infected = 0;
    let total = 0;

    if(!s.includes('1') || !s.includes('0')){
        return 0;
    }

    s.split('X').forEach(continent => {
        if(continent.includes('1')){          
            continent = continent.replace(/0/i, '1');
            infected += continent.length;
        }
        total += continent.length
    });

    return 100*infected/total;
};



// return masked string
function maskify(cc) {


  String.prototype.replaceAt=function(index, char) {
      let a = this.split('');
      a[index] = char;
      return a.join('');
  }
  let str = cc
  for(let i = 0; i<cc.length -4; i++){
    
    str = str.replaceAt(i, '#');
  
  } 
  
    
    return str
  
  }
  
  
  // 7 kyu - most digits 
  function findLongest(array){
    console.log(array)
   
   
   let mostDigits = 0;
   
   for (let i = 0; i < array.length; i++) {
     if (array[i].toString().length > mostDigits.toString().length) {
       mostDigits = array[i]
       
     }
   }
   return mostDigits;
 }

 // Ordered Count of Characters - 7kyu

 var orderedCount = function (text) {
  let  letters = text.split("")
  let uniqe = letters.filter((letter, index) => letters.indexOf(letter) == index)
   
   return uniqe.map((letter) => [letter, text.split(letter).length - 1])
 } 

 // unlucky days - 7kyu 

 function unluckyDays(year){

  let  date = new Date();
  let counter = 0;
  let month;

  for(month=0;month<12;month++)
  {
   date.setFullYear(year, month,13);
      if (date.getDay() == 5)
      {
        counter++;
      }
  }

  return counter;                            
}


function nextId(ids){
 
  for (let i = 0;  i < ids.length +1; i++) {
    // check if number is in array of ID
    
    if (!ids.includes(i)){
      return i
       }  
    }
  }
  
  
  // looop over array, start with zero - check if number exists, if not return that number 

  function abbrevName(name){

    return name[0].toUpperCase() + '.' + name[name.indexOf(' ') + 1].toUpperCase()
    
  }


  // 7 kyu
  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    
   const result = birds.filter(function(bird){
                // if the bird is not contained in the geese array the return true 
      if (geese.indexOf(bird) === -1){
     
          return true 
        } 
        return false
    
     });
     return result
   }
  
  
  
  
  
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
  
  
  // case Swapping 
  function swap(str){

    let newStr = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        }else {
            newStr += str[i].toLowerCase();
        }
    }
    console.log(newStr);
    return newStr;
}


function accum(s) {
  const result = []
  const lowerStr = s.toLowerCase()

  for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    result.push(str)
  }

  return result.join("-")
}


function longest(words) {
  
  let longest = words.sort(
  function (a, b) {
      return b.length - a.length;
  }
)[0];

return longest.length; //code here
}


// multiples of 3 and 5
function solution(number){
  let arr = [];
  let multiple = [];
  
  // push all num between 0 and the number to arr
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  
  // if number in arr is a multiple or 3 or 5 push it to multiple
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }
  
  // sum the total of the multiple array
  const sumTotal = multiple.reduce((sum, num) => sum + num, 0);
  
  return sumTotal;
}

// alrernative sol
function solution(number){
  
 
  // create variable to hold sum
  let sum = 0
  
  // use for loop to iterate trhough the numbers leading up 
  
  for (let i = 0; i < number.length; i++){
      // check if they are multiple of 3 or 5
    if (i % 3 == 0){
      
      sum+=i
      
      continue
      
    } else if (i % 5 == 0){
      
      sum+=i

      continue
      
    } else {
      
      continue
      
    }
    
  }

  // add number if yes
  // return sum 
  return sum 
}
console.log( solution(10, 23 ))


// Matrices : Making an Alternating Sum.js 

function scoreMatrix(matrix) {
  let score=0;
  matrix.map((e,j)=>{
  if (j%2===0){
    return e.map((v,i)=>i%2===0?score+=v:score-=v)
  } else {
     return e.map((v,i)=>i%2!==0?score+=v:score-=v)
  }}) 
  return score; 


  function solution(str, ending){
    return str.endsWith(ending);
  }