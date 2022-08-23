//get userNumber
let userNumber;
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

// streakStartElements
let counter = 0;
const pikaMovesetContainer = document.getElementById("pikaMoveset-container");
let body = document.querySelector('body');
let streakContainer = document.getElementById('streak-container');
let streak = document.getElementById('streak');
let cardFilter = document.getElementById("card");
let pikaBubble = document.getElementById('pikaBubble-container');
let pikachuUsed = document.getElementById("pikachuUsed");
let pikaMove;

// themes 
const purpleRain = document.getElementById('purpleRain-theme');
const cityScape = document.getElementById('cityScape-theme');


// pressStart
const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', theChoiceIsYours);

// TODO: FIX
// pikaRadio.addEventListener("keyup", (e) => {
//   if (e.keyCode === "Enter") {
//     enterBtn.click();
//   }
// });
  
// pikaNumberGAME
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
    let response = document.getElementById("response");
    response.textContent = `pika-YAY! I was thinking of ${pikaNumber}`;
    // TODO: slice NOPE & YUP string to change color and size

    pikaMovesetContainer.classList.add("aCriticalHit");
    // A critical hit!
    setTimeout(function () {
      pikaMovesetContainer.classList.remove("aCriticalHit");
    }, 770);

    let rain = document.getElementById("rain");
    rain.classList.add("ing");

    // purpleRain.classList.add('activated');

    counter = ++counter;
    streak.innerHTML = `STREAK: ${counter}`;

    // showStreakContainer
    streakContainer.classList.add("oneUp");

    if (counter > 0 && counter < 3) {

      purpleRain.classList.add("activated");
      
      document.documentElement.style.setProperty("--radio-box-shadow", "inset 0 0 13px #7DF9FF, 0 0 3px 5px #7DF9FF");
      cardFilter.style.setProperty("filter", "drop-shadow(0 0 11px #7DF9FF)");
      pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px #7DF9FF)");

      pikaMove = "wildCharge";

    } else if (counter >= 3) {

      purpleRain.classList.remove("activated");
      cityScape.classList.add("activated");

      document.documentElement.style.setProperty(
        "--rain",
        "url(../img/rainThreeMore.gif) center / cover no-repeat"
      );
      document.documentElement.style.setProperty(
        "--background",
        "url('../img/cityScape.gif') center / cover no-repeat"
      );

      pikaMove = "thunderShock";

      // pikachuUsedThunderShock - radio box shadow swap
      document.documentElement.style.setProperty(
        "--radio-box-shadow",
        "inset 0 0 13px red, 0 0 3px 5px red"
      );

      // pikachuUsedThunderShock - card filter swap
      cardFilter.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");

      // pikachuUsedThunderShock - pikaBubble filter swap
      pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");

      // pikachuUsedThunderShock - img swap
      document.documentElement.style.setProperty(
        "--pikaSwap",
        "url('../img/pikaStreakThreePlus.gif') center / contain no-repeat"
      );

      // enlarge Pikachu
      document.documentElement.style.setProperty(
        "--streak-scale",
        "scale(0.38)"
      );

      // pikachuUsedThunderShock - bolt hue swap
      pikaMovesetContainer.classList.add("itsSuperEffective");
      //itsSuperEffective
      setTimeout(function () {
        // to be removed if timer is introduced
        pikaMovesetContainer.classList.remove("itsSuperEffective");
      }, 1330);
    };

    // pikaMove - text Swap
    pikachuUsed.textContent = `// Pikachu used ${pikaMove}!`;

    // 3x multiplier
    if (counter % 3 === 0) {
      streak.style.setProperty("animation", "levelUp 333ms ease-in infinite alternate");
    }
    setTimeout(function () {
      streak.style.setProperty("animation", "none");
    }, 333);

  } else if (userNumber === undefined) {
    response.textContent = 'pika-pika… pika-pik-a-Number!';
  } else {
    response.textContent = `pika-NOPE! I was thinking of ${pikaNumber}.`;
    
    // resets
    counter = 0;
    purpleRain.classList.remove('activated');
    cityScape.classList.remove('activated');
    document.documentElement.style.setProperty("--background", "url('../img/background.webp')");
    document.documentElement.style.setProperty("--bg-opacity", "0");
    rain.classList.remove("ing");
    // body.style.setProperty("background", "black");
    document.documentElement.style.setProperty(
      "--radio-box-shadow",
      "inset 0 0 13px yellow, 0 0 3px 5px yellow"
    );
    document.documentElement.style.setProperty(
      "--rain",
      "url(../img/rainThreeLess.gif) center / cover no-repeat"
    );
    streakContainer.classList.remove("oneUp");
    cardFilter.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");
    pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");
    pikaMovesetContainer.classList.remove("itsSuperEffective");
    // reset to pikaStreakStart.gif
    document.documentElement.style.setProperty(
      "--pikaSwap",
      "url('../img/pikaStreakStart.gif') center / contain no-repeat"
    );
    // reset pikachu size
    document.documentElement.style.setProperty(
      "--streak-scale",
      "scale(0.25)"
    );
  }

  // resetRadioBtn
  let radioName = document.getElementsByName('selectNumber');
  for (let i = 0; i < radioName.length; i++) radioName[i].checked = false;

  // resetUserNumber
  userNumber = undefined;

  console.log(response.innerHTML);
};