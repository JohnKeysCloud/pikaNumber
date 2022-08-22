let userNumber;

//get userNumber
const pikaRadio = document.getElementsByClassName('numberOption');
for (const radio of pikaRadio) {
  radio.onclick = (e) => {
    userNumber = +e.target.value;

    console.log(
      `userNumber = ${userNumber}. It has a type of` +
      ' ' +
      typeof userNumber +
      '.'
    );
  };
}

// pressStart
const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', theChoiceIsYours);

// level
function theChoiceIsYours() {

  // get pikaNumber
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(-1);
    max = Math.floor(1);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let pikaNumber = getRandomIntInclusive();
  console.log(
    `pikaNumber = ${pikaNumber}. It has a type of` + ' ' + typeof pikaNumber + '.'
  );

  // showResponse
  if (pikaNumber === userNumber) {
    
    let response = document.getElementById('response');
    response.textContent = `pika-YAY! I was thinking of ${pikaNumber}`;

    // pikachuUsedWildCharge
    const pikaMovesetContainer = document.getElementById('pikaMoveset-container');
    pikaMovesetContainer.classList.add('aCriticalHit');

    // A critical hit!
    setTimeout(function () {
      pikaMovesetContainer.classList.remove('aCriticalHit');
    }, 770);

    
    // TODO: project01: ADD COUNTER FOR STREAKS & MULTIPLIERS
    // pikachuUsedThunderShock (TODO: 3x || 5x Multiplier)
    
    // TODO: pressStart
      // pikaMovesetContainer.classList.add("itsSuperEffective");
      // setTimeout(function () {
      //   pikaMovesetContainer.classList.remove("itsSuperEffective");
      // }, 770);
    
    // It's super effective!
      // addCodeHere
    // TODO: gameOver
  
  } else if (userNumber === undefined) {
    response.textContent = 'pika-pika… pika-pik-a-Number!';
  } else {
    response.textContent = `pika-NOPE! I was thinking of ${pikaNumber}.`;
  } 

  // resetRadioBtn
  let radioName = document.getElementsByName('selectNumber');
  for (let i = 0; i < radioName.length; i++) radioName[i].checked = false;

  // resetUserNumber
  userNumber = undefined;

  console.log(response.innerHTML);
};

// TODO: slice NOPE & YUP string to change color and size
