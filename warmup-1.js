//QUESTION 1: Given two int values, return their sum. Unless the two values are the same, then return double their sum.

function sumDouble(a, b){
    if (a === b){
      return ((a + b) * 2)
    } else {
      return a + b
    }
  }


// QUESTION 2: Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

function diff21(n){
    if (n <= 21){
      return Math.abs(21 - n)
    } else if (n > 21){
        return Math.abs((21 - n) * 2)
      }
  }


//QUESTION 3: Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

function makes10(a, b){
    if (a === 10 || b === 10){
      return true
    } else if (a + b === 10){
      return true
    } else {
      return false
    }
  }


//QUESTION 4: 
