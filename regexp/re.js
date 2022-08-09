// let str1 = "We will, we will rock you";

// alert( str1.match(/we/gi) ); // We,we (an array of 2 substrings that match)

// let str = "We will, we will rock you";

// let result = str.match(/we/i); // without flag g

// alert( result[0] );     // We (1st match)
// alert( result.length ); // 1

// // Details:
// alert( result.index );  // 0 (position of the match)
// alert( result.input );  // We will, we will rock you (source string)

// let matches = "JavaScript".match(/HTML/); // = null

// if (!matches.length) { // Error: Cannot read property 'length' of null
//   alert("Error in the line above");
// }

// let str = "I love JavaScript";
// let regexp = /LOVE/i;

// alert( regexp.test(str) ); // true


// let str = '+7(903)-123-45-67';

// let regexp = /\d/g;

// alert(str.match(regexp)); // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// // let's make the digits-only phone number of them:
// alert(str.match(regexp).join('')); // 79031234567

// let str = "Is there CSS4?";
// let regexp = /CSS\d/

// alert( str.match(regexp) ); // CSS4


// let regexp1 = /x\p{Hex_Digit}\p{Hex_Digit}/u;

// alert("number: xAF".match(regexp1)); // xAF

// alert('😄'.length); // 2
// alert('𝒳'.length); // 2

// let str = "A ბ ㄱ";

// alert( str.match(/\p{L}/gu) ); // A,ბ,ㄱ
// alert( str.match(/\p{L}/g) ); // null (no matches, \p doesn't work without the flag "u")

// let str = `1st place: Winnie
// 2nd place: Piglet
// 3rd place: Eeyore`;

// console.log( str.match(/^\d/g) ); // 1

// alert( '𝒳'.match(/[𝒳𝒴]/) ); // shows a strange character, like [?]
// // (the search was performed incorrectly, half-character returned)

// let str = '...<a href="link" class="doc">...';
// let regexp = /<a href=".*" class="doc">/g;

// // Works!
// alert( str.match(regexp) ); // <a href="link" class="doc">

// let str = '<h1>Hello, world!</h1>';

// let tag = str.match(/<(.*?)>/);

// alert( tag[0] ); // <h1>
// alert( tag[1] ); // h1

// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// // results - is not an array, but an iterable object
// alert(results); // [object RegExp String Iterator]

// alert(results[0]); // undefined (*)

// results = Array.from(results); // let's turn it into array

// alert(results[0]); // <h1>,h1 (1st tag)
// alert(results[1]); // <h2>,h2 (2nd tag)


// let result = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// for(let reaction of result) {
//   alert(reaction);
//   // first alert: <h1>,h1
//   // second: <h2>,h2
// }

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = "2019-10-30 2020-01-01";

let results = str.matchAll(dateRegexp);

for(let result of results) {
  let {year, month, day} = result.groups;

  alert(`${day}.${month}.${year}`);
  // first alert: 30.10.2019
  // second: 01.01.2020
}