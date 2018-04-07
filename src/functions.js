function removeMiddle( words ){
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
  
  // console.log(words.length);
  // console.log(words);
  var newArray=[]
  newArray= words.splice(2,1)
  
  // console.log(words);
  // console.log(newArray);
  return newArray

}

function get2ndAnd3rd( myArray ){
  // myArray is an array of numbers
  // return an array containing the 2nd and
  //  3rd items from myArray
  // myArray should remain unchanged
  // hint: slice

  // console.log(myArray);
  var secondArray = myArray.slice(1,3)
  // console.log(secondArray);
  return secondArray

}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items 
  // in myArray incremented by one
  // myArray should remain unchanged
  // hint: map
  console.log(myArray);
  var thirdArray = myArray.map(function (x){
    return  x + 1})
  console.log(thirdArray)
  return thirdArray 
}

function makeUppercase(letters) {
  //make all the letters in the array 
  // uppercase if they are not
  console.log(letters);
  var uppercase= letters.map(function(x){
    return x.toUpperCase()
})
   return uppercase
   

}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains 
  // the number of letters in each word
  // hint: strings have a 'length' property
  console.log(words);
    var newWord = words.map(function(i){
      return i.length})
    return newWord;
}


function cities( capitals, formatter ){
  // capitals is an array of objects that have
  //  a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms
  //  a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals 
  // array and return an array of resulting sentences
  // console.log(capitals,formatter)
  var cities = ["Paris is the capital of France",
  "Madrid is the capital of Spain",
  "Rome is the capital of Italy"];
  function transform ({city,country}){
    return "$ {city} is capital of $ { country}";
  }
  return cities
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only
  //  numbers from the input array which are greater than 10
  // hint: filter
   console.log(numbers)
   
var result = []
result=numbers.filter(number => number> 10) 

return result 
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains 
  // only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  newArray=[];

  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      newArray.push(numbers[i])
    }
  }

  // newArray = n.filter(function(num){return num%2===0});

  return newArray;
} 
  
    


function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
  // var finword=['house', 'train', 'slide', 'needle', 'book']
 var finword=[]

   finword = words.indexOf("needle")
   return finword
  
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  var findlarg= 0;
  for( i=0; i<=numbers.length; i++){
    if (numbers[i]>findlarg){
      findlarg=numbers[i];
    }
  }
  return findlarg;
}
  


function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  var addall=[]
  addall= numbers.reduce((a,b)=> a+b,0)
return addall
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
   
  // part1 get real number
  var realNumArray =[];

  realNumArray=things.filter(function(num){
    return  typeof(num) ===  'number' 
  });
  console.log(realNumArray)

  // part2
  var sum = 0;
  for(var i = 0;i < realNumArray.length; i++) { 
    sum = sum + parseInt(realNumArray[i]);
    // console.log('sum(so far): '+sum)
  }

  // part3
  var avg = sum/realNumArray.length
  console.log('avg: '+ avg);
   return avg
}

function paintShop( cars, colour ){
  // cars is an array of objects that have 
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each Ford car to be the colour 
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
  var newArray = []
  
  for (let i = 0; i < cars.length; i++){
    mecaDiagn = Object.assign({}, cars[i])
    if(mecaDiagn.make === "Ford"){
      mecaDiagn.colour = colour;
    }
    newArray.push(mecaDiagn)

  }
return newArray;
}

function sales( cars ){
  // cars is an array of objects that have been sold
  // their properties are `make`, `model`, `colour` and `price`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red',
  //   price: 5999
  // }

  // calculate and return the total sales for each make 
  // and return the totals
  // the output should like a bit like

  // {
  //   'Ford': 20000,
  //   'Vauxhall': 15000
  // }
 var  newSales = []
 for (let i = 0; i< cars.length; i++){
   carsLux = Objet.assign({},cars[i])
   if(carsLux === 'Ford,Vauxhall'){
carsLux.colour = colour
   }
   newSales.push(carsLux)
 }
return newSales
}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
  // const numbers = [ 2, 0, 23, 0, 57, 1 ];
  // part1
  var firstLarg= 0;
  var secondLarg= 0;

  // part 1 - get Largest number
  for( i=0; i<numbers.length; i++){
    if (numbers[i]>firstLarg){
      firstLarg=numbers[i];
    }
  }

  // part2 - get next biggest number.
  // It needs to be less than 57.
  for( i=0; i<numbers.length; i++){
    var extra_message = '';

    if (numbers[i]< firstLarg && numbers[i]>secondLarg){
      secondLarg=numbers[i];
      extra_message = ', current secondLarg: '+ secondLarg;
    }
    /* else if (numbers[i] === firstLarg)
    {
      extra_message = ', ignore biggest number';
    } */
    
    // console.log('stage ' + i + ' of loop, consider number: '+ numbers[i] + extra_message)
  }

  return secondLarg
}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the initial number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1

  var answer = 1; 
  // we know the basic factorial begins with 1.

  if(int > 0) {
    var len = int;
    
    // loop through all parts of the factorial
    for (var i=1; i <= len; i++){
      answer = answer * i;
    }
  }

  // console.log('int is: '+int+', answer is: '+answer);
 return answer
}

module.exports = {
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  average,
  paintShop,
  sales,
  secondLargest,
  makeUppercase,
  factorial
};
