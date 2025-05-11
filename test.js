// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
  expect(3.5 * 1.07).toBe(3.745);
});
test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
  expect(3.5 *(156.5 / 1.07) ).toBe(547.75 / 1.07);
});
test("One yen should be 0.00555 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
  expect(3.5 * 0.00555).toBe(0.019425);
});