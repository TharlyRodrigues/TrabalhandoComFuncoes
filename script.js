'use strict';
/*
const bookings = [];

const createBooking = function (
  flighNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flighNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);


const flight = 'LH123';
const jonas = {
  name: 'jonas Scream',
  passport: 1254636656,
};

const checkIn = function (flighNum, passenger) {
  flighNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1254636656) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flighNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🏋️‍♂️');
};

document.body.addEventListener('click', high5);
['jonas', 'tharly', 'maria'].forEach(high5);
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('tharly');
greeterHey('tamires');
greet('hello')('tharly');

const greeArr = greeting => name => console.log(`${greeting} ${name}`);

greeArr('hi')('tharly');
