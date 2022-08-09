// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// // results - is not an array, but an iterable object
// alert(results); // [object RegExp String Iterator]

// alert(results[0]); // undefined (*)

// results = Array.from(results); // let's turn it into array

// alert(results[0]); // <h1>,h1 (1st tag)
// alert(results[1]); // <h2>,h2 (2nd tag)

// let result = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// for(let react of result) {
//   alert(react);
//   // first alert: <h1>,h1
//   // second: <h2>,h2
// }

// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
// let str = "2019-04-30";

// let groups = str.match(dateRegexp).groups;

// alert(groups.year); // 2019
// alert(groups.month); // 04
// alert(groups.day); // 30


// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

// let str = "2019-10-30 2020-01-01";

// let results = str.matchAll(dateRegexp);

// for(let result of results) {
//   let {year, month, day} = result.groups;

//   alert(`${day}.${month}.${year}`);
//   // first alert: 30.10.2019
//   // second: 01.01.2020
// }

let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = "2019-10-30, 2020-01-01";

alert( str.replace(regexp, '$<day>.$<month>.$<year>') );
// 30.10.2019, 01.01.2020
