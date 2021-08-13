'use strict';

let userName = prompt('hello! my name is Jacob Gregor, welcome to my site. What is your name?');

let score = 0;

function scoreTracker(){
  score++;
}
function question1(){
  let q1Answer = prompt('Question 1: Do I have a puppy named Captain?');
  let q1Test = q1Answer.toLowerCase();
  if (q1Test === 'yes' || q1Test === 'y') {
    // console.log('correct');
    alert('I do! he is a mini golden-doodle.');
    scoreTracker();
  } else if (q1Test === 'no' || q1Test === 'n') {
    // console.log('No!');
    alert('whatchu talking about willis?!');
  } else {
    // console.log('What?');
    alert('A simple Yes or No will do.');
  }
}
function question2(){
  let q2Answer = prompt('Question 2: Was I once a windsurfing guide?');
  let q2Test = q2Answer.toLowerCase();
  if (q2Test === 'yes' || q2Test === 'y') {
    // console.log('No!');
    alert('nope');
  } else if (q2Test === 'no' || q2Test === 'n') {
    // console.log('correct');
    alert('Correct! Kayak > windsurfing');
    scoreTracker();
  } else {
    // console.log('What?');
    alert('Didnt we already go over this?');
  }
}
function question3(){
  let q3Answer = prompt('Question 3: Did I attend San Diego State University?');
  let q3Test = q3Answer.toLowerCase();
  if (q3Test === 'yes' || q3Test === 'y') {
    // console.log('No!');
    alert('not quite... Western Washington University! Go Viks!');
  } else if (q3Test === 'no' || q3Test === 'n') {
    // console.log('correct');
    alert('Bingo! I went to Western Washington University. Go Viks!');
    scoreTracker();
  } else {
    // console.log('What?');
    alert('Im not sure you quite understand how this works...');
  }
}
function question4(){
  let q4Answer = prompt('Question 4: Was I born in Washington State?');
  let q4Test = q4Answer.toLowerCase();
  if (q4Test === 'yes' || q4Test === 'y') {
    // console.log('correct');
    alert('The beautiful evergreen state is where I was born. Great work!');
    scoreTracker();
  } else if (q4Test === 'no' || q4Test === 'n') {
    // console.log('No!');
    alert('Shoot. I was born in washington.');
  } else {
    // console.log('What?');
    alert('!Correct');
  }
}
function question5(){
  let q5Answer = prompt('Question 5: Have I been hit by a car?');
  let q5Test = q5Answer.toLowerCase();
  if (q5Test === 'yes' || q5Test === 'y') {
    // console.log('correct');
    alert('I have. Sorry i dont remember if it hurt 😅 ');
    scoreTracker();
  } else if (q5Test === 'no' || q5Test === 'n') {
    // console.log('No!');
    alert('If only...');
  } else {
    // console.log('What?');
    alert('Well if you are seeing this your probably 5/5 at this point so congratulations...? 😂 ');
  }
}
function question6(){
  let secretNumber = 52;
  let attempt = 0;
  let numGuess = null;
  while (attempt <= 4 && numGuess !== 52) {
    let numGuess = parseInt(prompt('Im thinking of a number between 1 - 100, what is my number?'));
    if (attempt === 4) {
      alert('you are out of guesses');
      break;
    }
    if (numGuess === 52) {
      alert('Most people are so ungrateful to be alive, but not you, not anymore....');
      scoreTracker();
      break;
    }
    if (numGuess < secretNumber) {
      alert('Too Low!');
    }
    if (numGuess > secretNumber) {
      alert('Too High!');
    }
    attempt++;
  }
}
function question7(){
  let q7Attempts = 0;
  let hobbies = ['fishing', 'video games', 'backpacking'];
  let win = false;
  while (q7Attempts < 6 && win === false) {
    let q7 = prompt('What is one of my favorite hobbies?');
    let q7Guess = q7.toLowerCase();
    for (let i = 0; i < hobbies.length; i++) {
      let currentHobbie = hobbies[i];
      if (q7Guess === currentHobbie) {
        alert('That is one of my favorite hobbies!');
        win = true;
        scoreTracker();
      }
    }
    q7Attempts++;
    if (win === false) {
      alert('sorry, try again');
    }
    if (q7Attempts === 6) {
      alert('better luck next time 🤕');
    }
  }
  return hobbies;
}
function scoreRetrieve() {
  alert('lets see how you did!');
  switch (score) {
  case 0:
    alert('welp... 🤷🏼‍♂️');
    break;
  case 1:
    alert('atleast you didnt get 0...');
    break;
  case 2:
    alert('2/7 aint so bad... 👀');
    break;
  case 3:
    alert(score + '/7..');
    break;
  case 4:
    alert(score + '/7. Thats over half! right on.');
    break;
  case 5:
    alert(score + '/7. wow. im impressed.');
    break;
  case 6:
    alert(score + '/7. No way you got the number correct.');
    break;
  case 7:
    alert(score + '/7. Mom is that you?');
    break;
  default:
    alert('how the hell?');
    break;
  }
}
alert('Hi ' + userName + '.' + ' Before I tell you a little about me lets have some fun and see if you cant guess a little first!');

question1();
question2();
question3();
question4();
question5();

alert('I want to play a game...');

question6();
let hobbiesR = question7();

alert('My hobbies are '+ hobbiesR[0]+' '+hobbiesR[1]+' and '+hobbiesR[2]+'.');
scoreRetrieve();
alert('Thanks for playing along ' + userName + ' read on if you care to learn more! Cheers. ');





