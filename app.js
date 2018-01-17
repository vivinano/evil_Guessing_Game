const readline = require('readline');

var rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});

var numarray =[];
var i = 2;
for(i=1;i <= 100;i++){
  numarray.push(i);
}
console.log('Guess a Number');

rl.on('line', (number) =>{
  if(number > 0){
  number = parseInt(number,10);

  if(numarray.length < 3){
     var correct = numarray[Math.round(Math.random())];
  }

/* */

  var numremove = numarray.indexOf(number);
  var lessthan = numarray.slice(0,numremove).length;
  var greaterthan = numarray.slice(numremove,numarray.length).length;
   if(number == correct){
     rl.close();
     console.log('Correct');
   }
   else if(lessthan > greaterthan){
     numarray = numarray.slice(0,(numremove));
     console.log('Guess Lower')
   }
   else if(lessthan < greaterthan){
     numarray = numarray.slice((numremove + 1),numarray.length);
     console.log('Guess Higher');
   }
   else if(lessthan == greaterthan){
     var randomint = Math.round(Math.random());
       if(randomint == 1){
         numarray = numarray.slice((numremove + 1),numarray.length);
         console.log('Guess Higer?');
       }
       else if(randomint == 0){
         numarray = numarray.slice(0,(numremove));
         console.log('Guess Lower?');
       }
   }
  //numarray.splice(numremove,1);


}
})
