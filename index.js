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


  