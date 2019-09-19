//QUESTION 1 : Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

function firstLast6(nums){
    if (nums[0] === 6){
      return true
    } else if(nums[nums.length -1] === 6){
      return true
    } else {
      return false
    }
  }


//QUESTION 2 : Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

function sameFirstLast(nums){
    if (nums.length >= 1 
        && nums[0] === nums[nums.length -1]){
      return true
    } else {
      return false
    }     
  }


//QUESTION 3 : Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

function makePi(){
    let piArray = [3,1,4]
    return piArray
  }


//QUESTION 4 :  Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

function commonEnd(a, b){
    if (a[0] === b[0] 
    || a[a.length - 1] === b[b.length - 1]){
      return true
    }
      return false
  }


//QUESTION 5 : Given an array of ints length 3, return the sum of all the elements.

function sum3(nums){
    let addy = 0
    for (let i = 0; i < nums.length; i++){
      addy = nums[i] + addy
    }
    return addy
  }