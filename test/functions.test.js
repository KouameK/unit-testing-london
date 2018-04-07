const functions = require('../src/functions');

test('Check', () => {
  expect(true).toEqual(true);
});

// test 1
test('Remove middle', () => {
  const words = [ 'mouse', 'giraffe', 'queen', 'window', 'bottle'];

  const expectedWords = [ 'mouse', 'giraffe', 'window', 'bottle'];
  const expectedOutput = [ 'queen' ];

  const output = functions.removeMiddle( words );

  expect(output).toEqual(expectedOutput);
  expect(words).toEqual(expectedWords);
});

// test 2
test('Get second and third', () => {
  const numbers = [ 90, 5, 11, 5, 6 ];

  const expectedOutput = [ 5, 11];
  const expectedNumbers = [ 90, 5, 11, 5, 6 ];

  const output = functions.get2ndAnd3rd( numbers );

  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
});

// test 3
 test('Add 1 to each item in myArray', () => {
  const myArray = [ 31, 57, 12, 5];

  const unchanged = [ 31, 57, 12, 5];
  const expected = [ 32, 58, 13, 6];
  const output = functions.mapper( myArray );


  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
}); 

test('Make all the letters in the array uppercase', ()=>{
  const letters = ['e', 'R', 'w', 't', 'Y', 'o'];

  const capitalLetters = ['E', 'R', 'W', 'T', 'Y', 'O'];

  const output = functions.makeUppercase(letters)

  expect(output).toEqual(capitalLetters)
})

//  test 4
 test('Get word lengths', () => {
  const words = [ 'sun', 'potato', 'roundabout', 'pizza' ];
  const expected = [ 3, 6, 10, 5 ];

  const output = functions.wordLengths( words );
  expect(output).toEqual( expected );
}); 

// test 5
test('Cities', () => {
  const capitals = [
    { city: 'Paris', country: 'France' },
    { city: 'Madrid', country: 'Spain' },
    { city: 'Rome', country: 'Italy' },
  ];

  function transform({city, country}){
    return `${city} is the capital of ${country}`;
  }

  const expected = [
    'Paris is the capital of France',
    'Madrid is the capital of Spain',
    'Rome is the capital of Italy'
  ];

  const result = functions.cities(capitals, transform);

  expect(result).toEqual(expected);
});


// test 6
test('Get numbers greater than 10', () => {
  const numbers = [ 4, 10, 32, 9, 21];
  const expected = [ 32, 21 ];

  const output = functions.largerThanTen( numbers );
  expect(output).toEqual( expected );
});


// test 7
test('Get even numbers', () => {
  const numbers = [ 22, 13, 73, 82, 4];
  const expected = [ 22, 82, 4 ];

  const output = functions.even( numbers );
  expect(output).toEqual( expected );
});


// test 8
test('Find the needle', () => {
  const words = [ 'house', 'train', 'slide', 'needle', 'book' ];
  const expected = 3;

  const output = functions.findTheNeedle( words );
  expect(output).toEqual( expected );
});


// test 9
test('Find largest number', () => {
  const numbers = [ 3, 21, 88, 4, 36];
  const expected = 88;

  const output = functions.findLargest( numbers );
  expect(output).toEqual( expected );
});


// test 10
test('Add all numbers', () => {
  const numbers = [ 9, 23, 10, 3, 8 ];
  const expected = 53;

  const output = functions.addAllnumbers( numbers );

  expect( output ).toEqual( expected );
});


// test 11
test('Average', () => {
  const numbers = [ 4, '-', 8, 11, 'hello', '57', 0, 2 ];
  const expected = 5;

  const output = functions.average( numbers );

  expect( output ).toEqual( expected );
});


// test 12
test('Paint shop', () => {
  const cars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
  ];

  const unpaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
  ];

  const repaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Pink' },
    { make: 'Land Rover', model: 'Defender', colour: 'Pink' },
    { make: 'Toyota', model: 'Prius', colour: 'Pink' },
    { make: 'Honda', model: 'Civic', colour: 'Pink' }
  ];

  const output = functions.paintShop( cars, 'Pink' );

  expect( output ).toEqual( repaintedCars );
  expect( cars ).toEqual( unpaintedCars );
});


// test 13
test('Car sales', () => {
  const carsSold = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 5999 },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy', price: 12000 },
    { make: 'Toyota', model: 'Prius', colour: 'Silver', price: 6500 },
    { make: 'Honda', model: 'Civic', colour: 'Yellow', price: 8000 },
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 15000 },
    { make: 'Land Rover', model: 'Discovery', colour: 'Blue', price: 9000 },
    { make: 'Ford', model: 'Fiesta', colour: 'Green', price: 2000 }
  ];

  const totals = {
    'Ford': 22999,
    'Honda': 8000,
    'Land Rover': 21000,
    'Toyota': 6500
  };
  
  const output = functions.sales( carsSold );

  expect( output ).toEqual( totals );
});


// test 14
test('Second largest', () => {
  // const numbers = [ 2, 0, 23, 0, 57, 1 ];
  const numbers = [ 1, 2, 5, 10, 20, 9, 99,6,23]
  const expected = 23;
  
  const output = functions.secondLargest( numbers );

  expect( output ).toEqual( expected );
});


//test15
test('Factorial', () => {
  const int1 = 5;
  const exp1 = 120;

  const int2 = 9;
  const exp2 = 362880;

  const int3 = 1;
  const exp3 = 1;

  const int4 = 0;
  const exp4 = 1;

  const int5 = 3;
  const exp5 = 6;

  const out1 = functions.factorial( int1 );
  const out2 = functions.factorial( int2 );
  const out3 = functions.factorial( int3 );
  const out4 = functions.factorial( int4 );
  const out5 = functions.factorial( int5 );

  expect( out1 ).toEqual( exp1 );
  expect( out2 ).toEqual( exp2 );
  expect( out3 ).toEqual( exp3 );
  expect( out4 ).toEqual( exp4 );
  expect( out5 ).toEqual( exp5 );
});

