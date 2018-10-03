//Back-end Logic
function ancientSieve(numberToCheck) {
  //Sieve of Eratosthenes. First establish numbers list as empty array. Set the upper limit to the square root of whatever
  //the number that you're checking is. Set the output(list of primes) to start with the first prime number (2).
  let numbersList = []
  let upperLimit = Math.sqrt(numberToCheck)
  let output = []

  //Make an array from  to the number you're checking and set its boolean value to TRUE
  for(let index = 0; index < numberToCheck; index++) {
    numbersList.push(true)
  }
  //Now we're going to loop through the prime numbers starting with 2
  for (let prime = 2; prime <= upperLimit; prime += 1) {
    //If the number is on the list of numbers we're(this if will return true every time until we reach the limit of the list) going to go into another loop
    if(numbersList[prime]) {
      //This loop checks all multiples of that number and sets all of their boolean values to FALSE (if the base number is a factor of another number, then that other number cannot be prime)
      for (let multiplierOfPrime = prime * prime; multiplierOfPrime < numberToCheck; multiplierOfPrime += prime) {
        numbersList[multiplierOfPrime] = false;
      }
    }
  }
  //Now we're going to check through every number that's in our list, and push all the ones with the
  //boolean value TRUE to the empty array output.
  for (let index = 2; index < numberToCheck; index+= 1) {
    if(numbersList[index]) {
      output.push(index);
    }
  }
  return output;
}
//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userNumber = $('#user_number').val();
    $('#prime_number_output').html(ancientSieve(userNumber).join(" "));
  });
});
