'use strict';

console.log('hello world');


let userName = prompt('hello! my name is Jacob Gregor, welcome to my site. What is your name?');

alert('Hi ' + userName + '.' + ' Before I tell you a little about me lets have some fun and see if you cant guess a little first!');

let q1Answer = prompt('Question 1: Do I have a puppy named Captain?');
let q1Test = q1Answer.toLowerCase();

if (q1Test === 'yes' || q1Test === 'y') {
  // console.log('correct');
  alert('I do! he is a mini golden-doodle.');
} else if (q1Test === 'no' || q1Test === 'n') {
  // console.log('No!');
  alert('whatchu talking about willis?!');
} else {
  // console.log('What?');
  alert('A simple Yes or No will do.');
}

let q2Answer = prompt('Question 2: Was I once a windsurfing guide?');
let q2Test = q2Answer.toLowerCase();

if (q2Test === 'yes' || q2Test === 'y') {
  // console.log('No!');
  alert('nope');
} else if (q2Test === 'no' || q2Test === 'n') {
  // console.log('correct');
  alert('Correct! Kayak > windsurfing');
} else {
  // console.log('What?');
  alert('Didnt we already go over this?');
}

let q3Answer = prompt('Question 3: Did I attend San Diego State University?');
let q3Test = q3Answer.toLowerCase();

if (q3Test === 'yes' || q3Test === 'y') {
  // console.log('No!');
  alert('not quite... Western Washington University! Go Viks!');
} else if (q3Test === 'no' || q3Test === 'n') {
  // console.log('correct');
  alert('Bingo! I went to Western Washington University. Go Viks!');
} else {
  // console.log('What?');
  alert('Im not sure you quite understand how this works...');
}

let q4Answer = prompt('Question 4: Was I born in Washington State?');
let q4Test = q4Answer.toLowerCase();

if (q4Test === 'yes' || q4Test === 'y') {
  // console.log('correct');
  alert('The beautiful evergreen state is where I was born. Great work!');
} else if (q4Test === 'no' || q4Test === 'n') {
  // console.log('No!');
  alert('Shoot. I was born in washington.');
} else {
  // console.log('What?');
  alert('!Correct');
}

let q5Answer = prompt('Question 5: Have I been hit by a car?');
let q5Test = q5Answer.toLowerCase();

if (q5Test === 'yes' || q5Test === 'y') {
  // console.log('correct');
  alert('I have. Sorry i dont remember if it hurt 😅 ');
} else if (q5Test === 'no' || q5Test === 'n') {
  // console.log('No!');
  alert('If only...');
} else {
  // console.log('What?');
  alert('Well if you are seeing this your probably 5/5 at this point so congratulations...? 😂 ');
}

alert('Thanks for playing along ' + userName + ' read on if you care to learn more! Cheers. ');

