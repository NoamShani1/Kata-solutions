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
    var x;
    var y;
    var r = [];
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
