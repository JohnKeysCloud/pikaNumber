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

    // pikachuUsedThunderBolt
    const thunderBolt = document.getElementById('thunderBolt-container');
    thunderBolt.classList.add('superEffective');
    setTimeout(function () {
      thunderBolt.classList.remove('superEffective');
    }, 770);

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

  console.log(response.innerHTML + ' CLICK RESET TO TRY AGAIN!');
};