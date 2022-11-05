let screen = document.querySelector("#screen");
let btn = document.querySelector("#btn");
let outerColor = document.querySelector("#outerColor");
let redCol = document.querySelector("#redCol");
let greenCol = document.querySelector("#greenCol");
let blueCol = document.querySelector("#blueCol");
let redIncr = document.querySelector("#redIncr");
let greenIncr = document.querySelector("#greenIncr");
let blueIncr = document.querySelector("#blueIncr");
let redVal;
let greenVal;
let blueVal;
let timerId;

let fnCheck16 = function (symb) {
  if (
    symb == "0" ||
    symb == "1" ||
    symb == "2" ||
    symb == "3" ||
    symb == "4" ||
    symb == "5" ||
    symb == "6" ||
    symb == "7" ||
    symb == "8" ||
    symb == "9" ||
    symb == "a" ||
    symb == "b" ||
    symb == "c" ||
    symb == "d" ||
    symb == "e" ||
    symb == "f"
  ) {
    return true;
  }
  return false;
};

let fnOuterColor = function (e) {
  console.log(typeof outerColor.value);
  redCol.value = outerColor.value.slice(1, 3);
  greenCol.value = outerColor.value.slice(3, 5);
  blueCol.value = outerColor.value.slice(5);
  
   
};

let fnColorFill = function (e) {
    if ((outerColor.value[0] == "#" && fnCheck16(outerColor.value[1])&&
    fnCheck16(outerColor.value[2])&&fnCheck16(outerColor.value[3])&&
    fnCheck16(outerColor.value[4])&& fnCheck16(outerColor.value[5])&&
    fnCheck16(outerColor.value[6]))||
    (fnCheck16(redCol.value[0])&&
    fnCheck16(redCol.value[1])&&fnCheck16(greenCol.value[0])&&
    fnCheck16(greenCol.value[1])&& fnCheck16(blueCol.value[0])&&
    fnCheck16(blueCol.value[1]))
    ) {
      screen.style.backgroundColor = outerColor.value;
      screen.textContent = '';
    } else {
      screen.textContent = 'ERROR! IT`S NOT a hexadecimal digits!'
      screen.style.backgroundColor = 'white';
      outerColor.value = '';
      return
    }
  redVal = redCol.value;
  greenVal = greenCol.value;
  blueVal = blueCol.value;
  let fnScreenFill = function () {
    screen.style.backgroundColor = `#${redVal}${greenVal}${blueVal}`;
    outerColor.value = `#${redVal}${greenVal}${blueVal}`;
    redCol.value = outerColor.value.slice(1, 3);
    greenCol.value = outerColor.value.slice(3, 5);
    blueCol.value = outerColor.value.slice(5);

    redVal = (+`0x${redVal}` + +redIncr.value).toString(16);
    if (redVal.length == 1) redVal = "0" + redVal;
    if (redVal.length == 3) redVal = "00";
    greenVal = (+`0x${greenVal}` + +greenIncr.value).toString(16);
    if (greenVal.length == 1) greenVal = "0" + greenVal;
    if (greenVal.length == 3) greenVal = "00";
    blueVal = (+`0x${blueVal}` + +blueIncr.value).toString(16);
    if (blueVal.length == 1) blueVal = "0" + blueVal;
    if (blueVal.length == 3) blueVal = "00";

  };
  if (btn.value == "Start") {
   
    btn.value = "Stop";
    timerId = setInterval(fnScreenFill, 250);
  } else {
    btn.value = "Start";
    clearInterval(timerId);
  }
};

outerColor.addEventListener("input", fnOuterColor);
btn.addEventListener("click", fnColorFill);
