/**
 * Created by mothw on 6/22/2017.
 */

console.log('Constructors are given global scope to match example');

var ClozeCard = require('./ClozeCard.js').ClozeCard;
var BasicCard = require('./BasicCard.js').BasicCard;
var divider = '-------------------------------';

console.log(divider);
console.log('sedgewick = new ClozeCard(\'Sedgewick Appleton\',\'Banana\');');
console.log(divider);
var fakeSedgewick = new ClozeCard('Sedgewick Appleton','Banana');
console.log('');

console.log(divider);
console.log('sedgewick = new ClozeCard(\'Sedgewick Appleton\',\'Apple\');');
console.log(divider);
var sedgewick = new ClozeCard('Sedgewick Appleton','Apple');
console.log('');

console.log('console.log(\'sedgewick.partial\');')
console.log(sedgewick.partial);
console.log('');

console.log('console.log(\'sedgewick.fullText\');')
console.log(sedgewick.fullText);
console.log('');

console.log(divider);
console.log('appleton = new ClozeCard(\'Appleton\',\'Apple\'');
console.log(divider);
var appleton = ClozeCard('Appleton','Apple');
console.log('console.log(appleton.partial)');
console.log(appleton.partial);

console.log(divider);
console.log('console.log(var banana = ClozeCard(\'banana\',\'a\');');
console.log(divider);
var banana = ClozeCard('banana','a');
console.log('');

console.log('console.log(banana.partial);');
console.log(banana.partial);
console.log('');

var splitIsWeird = BasicCard('What does split do to the beginning and end of the main string?','split stores empty strings in the returned array if the search string starts or ends the string');
//console.log(splitIsWeird);
console.log('Basic front:',splitIsWeird.front);
console.log('Basic back:',splitIsWeird.back);
console.log('')

//console.log('console.log(var split = BasicCard(\'Compute \'\'.split(\'xhardcorex\')\''+)
