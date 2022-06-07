// Testuosime šį masyvą
const numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

console.log(numbers);

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
function arrDoubled(numbers) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return numbers.map(function(value) {
    return value * 2;
  });
}

console.log('arrDoubled', arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

// function arrMultiplied(numbers, num) {
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//   return numbers.map(function(value) {
//     return value * num;
//   });
// }

const arrMultiplied = (numbers, num) => numbers.map(value => value * num);

console.log('arrMultiplied', arrMultiplied(numbers, 2));
console.log('arrMultiplied', arrMultiplied(numbers, 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

function arrCountNum(numbers, numberToCompare) {
  let counter = 0;

  for (let number of numbers) {
    if (number == numberToCompare) {
      counter++;
    }
  }

  return counter;
}

console.log('arrCountNum', arrCountNum(numbers, 2));
console.log('arrCountNum', arrCountNum(numbers, 5));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfFirst = function(numbers, num) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  return numbers.indexOf(num);
}

console.log('arrIndexOfFirst 5', arrIndexOfFirst(numbers, 5));
console.log('arrIndexOfFirst 2', arrIndexOfFirst(numbers, 2));
console.log('arrIndexOfFirst -9', arrIndexOfFirst(numbers, -9));
console.log('arrIndexOfFirst b', arrIndexOfFirst(numbers, 'b'));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfLast = function(numbers, num) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
  return numbers.lastIndexOf(num);
}

console.log('arrIndexOfLast 5', arrIndexOfLast(numbers, 5));
console.log('arrIndexOfLast 2', arrIndexOfLast(numbers, 2));
console.log('arrIndexOfLast -9', arrIndexOfLast(numbers, -9));
console.log('arrIndexOfLast b', arrIndexOfLast(numbers, 'b'));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
const reverseSomething = value => String(value).split('').reverse().join('');
const reverseNumbers = number => Number(reverseSomething(number));

// const reverseSomething = number => [...String(number)].reverse().join('');

console.log('reverseNumbers', reverseNumbers(32243));
console.log('reverseNumbers', reverseNumbers('123'));
console.log('reverseSomething', reverseSomething('abc'));
console.log('reverseNumbers', reverseNumbers('abc'));

console.assert(reverseNumbers(32243) === 34223);

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function getMaxMin(numbers) {
  let maxNumber = numbers[0]; // 5
  let minNumber = numbers[0]; // 5

  for (let i = 0; i < numbers.length; i++) {
    let currentValue = numbers[i];

    if (currentValue > maxNumber) {
      maxNumber = currentValue;
    }

    if (currentValue < minNumber) {
      minNumber = currentValue;
    }

    // console.log({currentValue, maxNumber, minNumber});
  }

  return [maxNumber, minNumber];
}

function getMaxMinSorted(numbers) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });

  return [numbers[numbers.length - 1], numbers[0]];
}

const numbersForMaxMin = [
  [0, 1, 5, 7],
  [-1, -5, -7],
  [0, 1, 5, 7, -1, -5, -7],
  numbers
];

for (let arr of numbersForMaxMin) {
  console.log('getMaxMin', getMaxMin(arr));
  console.log('getMaxMinSorted', getMaxMinSorted(arr));
}

const maxMinResult = getMaxMin(numbers);

console.log(`Mažiausas: ${maxMinResult[1]}, Didžiausas: ${maxMinResult[0]}`);

// 8. Parašykite funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
const checkForLetters = function(str, char, caseInsensitive = false) {
  let counter = 0;

  if (caseInsensitive) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    char = char.toLowerCase();
    str = str.toLowerCase();
  }

  // console.log({caseInsensitive, str, char});

  String(str).split('').forEach(element => {
    if (element == char) {
      counter++;
    }
  });

  return counter;
}

let chars = ['L', 'T', 'U', 'a'];
let str = 'Lorem ipsum, dolor, sit amet consectetur adipisicing elit.';

for (let c of chars) {
  let count = checkForLetters(str, c);

  console.log(`Case sensitive => Raidė “${c}” sakinyje rasta ${count} kartus`);
}

console.log('===========');

for (let c of chars) {
  let count = checkForLetters(str, c, true);

  console.log(`Case insensitive => Raidė “${c}” sakinyje rasta ${count} kartus`);
}

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
const arr2 = [8, 'Hello', 'click', 'u', 7, '5', 4, 'a', 'a', 3, 6, "chair", , 10, -1, '3'];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

function getNumbers(inputArr) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // https://stackoverflow.com/a/1063027
  return inputArr.filter(function(x) {
    // return Number(x);
    // return !isNaN(Number(x));
    return Number(x) == x;
  }).map(function(x) {
    return Number(x);
  }).sort(function(a, b) {
    return a - b;
  });
}

console.log('getNumbers', getNumbers(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, 
// kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

const arr1 = [2, 7, 6, 9, 5];

function checkIfAllSmaller(arr, max) {
  for (let x of arr) {
    if (x < max) {
      return false;
    }
  }

  return true;
}

console.log('checkIfAllSmaller', checkIfAllSmaller(arr1, 5));
console.log('checkIfAllSmaller', checkIfAllSmaller(arr1, 1));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
const citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
const filteredByLetter = (arr, char, caseInsensitive = false) => {
  if (caseInsensitive) {
    char = char.toLowerCase();
    // arr = arr.map(x => x.toLowerCase());
  }

  // return arr.filter(function(arrayElemet) {
  //   if (caseInsensitive) {
  //     arrayElemet = arrayElemet.toLowerCase();
  //   }

  //   return arrayElemet.includes(char);
  // });

  return arr.filter(arrayElemet => {
    if (caseInsensitive) {
      arrayElemet = arrayElemet.toLowerCase();
    }

    return arrayElemet.includes(char);
  });
};

console.log('filteredByLetter case-sensitive', filteredByLetter(citiesOfLithuania, 'v'));
console.log('filteredByLetter case-insensitive', filteredByLetter(citiesOfLithuania, 'v', true));


// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()
// 
function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;

}

function division(num1, num2) {
  return num1 / num2;
}

function pow(num1, num2) {
  return Math.pow(num1, num2);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function calculateValue(num1, num2, action) {
  if (Number(num1) != num1) {
    throw new Error('Number one is not a number');
  }

  if (Number(num2) != num2) {
    throw new Error('Number two is not a number');
  }

  const actions = [addition, subtraction, multiplication, division, pow];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  
  const indexOfAction = actions.map(x => x.name).indexOf(action);  

  if (indexOfAction === -1) {
    throw new Error('Action not recognized');
  }

  return actions[indexOfAction](num1, num2);
}


console.log('calculateValue: 1, 5, addition', calculateValue(1, 5, 'addition'));
console.log('calculateValue: 1, 5, subtraction', calculateValue(1, 5, 'subtraction'));
console.log('calculateValue: 1, 5, multiplication', calculateValue(1, 5, 'multiplication'));
console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'division'));

console.log('calculateValue: 1, 5, division', calculateValue(1, 'a', 'division'));
console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'divisionnn'));

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
