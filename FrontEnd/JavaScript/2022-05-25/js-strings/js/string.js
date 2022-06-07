// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let strOne = 'Hello';
let strTwo = "World";
let strThree = `!`;

let helloWorld = `${strOne} ${strTwo} !`;

console.log(strOne, strTwo, strThree);
console.log(strOne + strTwo + strThree);
console.log(strOne + ' ' + strTwo + strThree);
console.log(`${strOne} ${strTwo} !`);
console.log(helloWorld, helloWorld.length, helloWorld[0], helloWorld[helloWorld.length - 1] );

let textWithNewLine = `Hello

    World
    
    
    !
`;

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList, guestList.length, );

console.log(textWithNewLine, textWithNewLine.length, );

console.log(1 + 1);
console.log('1' + '1');
console.log('a' + 'b');

console.log('\t\t\tLorem\nipsum\ndolor\n\t\tsit\namet,\nconsectetur\nadipiscing\nelit.');

console.log('Lorem "ipsum dolor" sit amet');
console.log('Lorem \'ipsum dolor\' sit amet');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
console.log('Labas rytas'.toUpperCase());
console.log('Labas rytas'.toLowerCase());