
// // Import the validator library
 const validator = require('validator');
 const readline = require('readline');

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Write something....anything: ', (userInput) => {
  console.log(`You entered: ${userInput}`);

//Common validator functions


  if (validator.isAlphnumeric, (userInput)) {
  }else{
    console.log(`Your input in NOT Alphanumberic`)};

  if (validator.isLength(userInput,8)){
    console.log(`your input is more than 8 characters`);
  }else{
    console.log(`your input is less than 8 characters`);
  }
  //Nested if Statement for divisible by 3
  if (validator.isInt(userInput)){
    if (validator.isDivisibleBy(userInput, 3)){
      console.log(`${userInput} is divisible by 3 `)
}else{
  console.log(`${userInput}is not divisible by 3`)
  }
  }else{
    console.log(`Your entry hath no standalone integer`)
  }

 //Close the input stream
  rl.close();
});

//Sample Code that includes Buffer, URL, Event and Validator (comment out code above to avoid errors)

/*
const readline = require('readline');
const EventEmitter = require('events');
const url = require('url');
const validator = require('validator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const eventEmitter = new EventEmitter();

// Register a listener for the 'urlParsed' event
eventEmitter.on('urlParsed', (urlBuffer) => {
  console.log('URL components parsed and converted to a buffer:');
  console.log(urlBuffer.toString());
  rl.close();
});

// Prompt the user to enter a URL
rl.question('Enter a URL: ', (inputUrl) => {
  if (validator.isURL(inputUrl)) {
    // Parse the URL
    const parsedUrl = url.parse(inputUrl);

    // Convert the URL components to a buffer
    const urlBuffer = Buffer.from(JSON.stringify(parsedUrl));

    // Emit the 'urlParsed' event with the buffer
    eventEmitter.emit('urlParsed', urlBuffer);
  } else {
    console.log('Invalid URL. Please enter a valid URL.');
    rl.close();
  }
});*/
