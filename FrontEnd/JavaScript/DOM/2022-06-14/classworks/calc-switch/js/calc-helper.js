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

// function pow(num1, num2) {
//   return Math.pow(num1, num2);
// }

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// function calculateValue(num1, num2, action) {
//   if (Number(num1) != num1) {
//     throw new Error('Number one is not a number');
//   }

//   if (Number(num2) != num2) {
//     throw new Error('Number two is not a number');
//   }

//   const actions = [addition, subtraction, multiplication, division, pow];

//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  
//   const indexOfAction = actions.map(x => x.name).indexOf(action);  

//   if (indexOfAction === -1) {
//     throw new Error('Action not recognized');
//   }

//   return actions[indexOfAction](num1, num2);
// }