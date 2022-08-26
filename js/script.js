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
let body = document.querySelector('body');
const pikaMovesetContainer = document.getElementById("pikaMoveset-container");
let streakContainer = document.getElementById('streak-container');
let streak = document.getElementById('streak');
let card = document.getElementById("card");
let responseGameBegun = document.getElementById('gameBegun');
let responseInstruction = document.getElementById("instruction");
let yayOrNay = document.getElementById('yayOrNay');
let pikaNumberContainer = document.getElementById('pikaNumber-container');
let pikaBubble = document.getElementById('pikaBubble-container');
let rain = document.getElementById("rain");
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

  pikaNumberContainer.textContent = pikaNumber;
  responseInstruction.style.setProperty("display", "none");
  responseGameBegun.style.setProperty("display", "inline-block");

  // showResponse
  if (pikaNumber === userNumber) {

    counter = ++counter;
    streak.innerHTML = counter;

    streak.style.setProperty("animation", "streakOneUp 333ms ease-in-out forwards alternate");
    
    yayOrNay.textContent = 'Yay!';
    yayOrNay.style.setProperty("color", "chartreuse");
    pikaNumberContainer.style.setProperty("color", "chartreuse");

    document.documentElement.style.setProperty("--bg-opacity", "0.38");

    pikaMovesetContainer.classList.add("aCriticalHit");
    // A critical hit!
    setTimeout(function () {
      pikaMovesetContainer.classList.remove("aCriticalHit");
    }, 770);

    // makeItRain
    rain.classList.add("ing");
    
    // showStreakContainer
    streakContainer.classList.add("oneUp");

    if (counter > 0 && counter < 3) {

      purpleRain.classList.add("activated");
      
      document.documentElement.style.setProperty("--radio-box-shadow", "inset 0 0 13px #7DF9FF, 0 0 3px 5px #7DF9FF");
      card.style.setProperty("filter", "drop-shadow(0 0 11px #7DF9FF)");
      pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px #7DF9FF)");

      pikaMove = "wildCharge";

    } else if (counter >= 5 && counter < 10) {

      purpleRain.classList.remove("activated");
      cityScape.classList.add("activated");
      streak.style.setProperty("color", "red");

      pikaMove = "thunderShock";

      // pikachuUsedThunderShock - radio box shadow swap
      document.documentElement.style.setProperty(
        "--radio-box-shadow",
        "inset 0 0 13px red, 0 0 3px 5px red"
      )

      // pikachuUsedThunderShock - card filter swap
      card.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");

      // pikachuUsedThunderShock - pikaBubble filter swap
      pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");

      // pikachuUsedThunderShock - img swap
      document.documentElement.style.setProperty(
        "--pikaSwap",
        "url('../assets/img/pikachu/pikaStreakThreePlus.gif') center / contain no-repeat"
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
    } else if (counter > 9) {
      streak.style.setProperty("color", "yellow");
      pikaMovesetContainer.classList.add("itsSuperEffective");
      clearTimeout(pikaMovesetContainer);
    };

    // pikaMove - text Swap
    pikachuUsed.textContent = `// Pikachu used ${pikaMove}!`;

    // 3x multiplier streak animation
    if (counter % 5 === 0) {
      streak.style.setProperty(
        "animation",
        "streakFiveMultiplier 333ms ease-in-out forwards alternate"
      );
    }
    setTimeout(function () {
      streak.style.setProperty("animation", "none");
    }, 333);

  } else if (userNumber === undefined) {
    responseInstruction.style.setProperty("display", "inline-block");
    responseGameBegun.style.setProperty("display", "none");
    instruction.textContent = "pika-pika… pika-pik-a-Number!";

    // incorrect - visual feedback
    card.classList.add("incorrect");
      setTimeout(function () {
        card.classList.remove("incorrect");
      }, 555);

  } else {
    yayOrNay.textContent = "Nope!";
    yayOrNay.style.setProperty("color", "red");
    pikaNumberContainer.style.setProperty("color", "red");
    streak.style.setProperty("color", "#e55fe5");

    // incorrect - visual feedback
    card.classList.add("incorrect");
    setTimeout(function () {
      card.classList.remove("incorrect");
    }, 555);

    // resets
    counter = 0;

    purpleRain.classList.remove("activated");
    cityScape.classList.remove("activated");
    rain.classList.remove("ing");
    document.documentElement.style.setProperty("--bg-opacity", "0");
    document.documentElement.style.setProperty(
      "--radio-box-shadow",
      "inset 0 0 13px yellow, 0 0 3px 5px yellow"
    );
    streakContainer.classList.remove("oneUp");
    card.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");
    pikaBubble.style.setProperty("filter", "drop-shadow(0 0 11px yellow)");
    pikaMovesetContainer.classList.remove("itsSuperEffective");
    // reset to pikaStreakStart.gif
    document.documentElement.style.setProperty(
      "--pikaSwap",
      "url('../assets/img/pikachu/pikaStreakStart.gif') center / contain no-repeat"
    );
    // reset pikachu size
    document.documentElement.style.setProperty("--streak-scale", "scale(0.25)");
  };

  // resetRadioBtn
  let radioName = document.getElementsByName('selectNumber');
  for (let i = 0; i < radioName.length; i++) radioName[i].checked = false;

  // resetUserNumber
  userNumber = undefined;

  console.log(gameBegun.innerText);
};