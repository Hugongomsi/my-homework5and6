// 1er answer about the odd double number in my home work
const myNumbers= numbers.filter(function (number) {
  return (number % 2 !== 0);
}).map(function (number) {
  return number * 2;
});
console.log('The doubled numbers are:', myNumbers);
//  example for the map;
const newNumber = (x) => (x + 2);
console.log('i add two inside my array:',numbers.map(newNumber));
//  example about the filter;
const NewNumber = (q) => (q%2);
console.log('the odd number in my array is:',numbers.filter(NewNumber));
// 
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];
const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
// 2.1)
const tasks = monday.concat(tuesday);
console.log(tasks);
// 2.2)     
 tasks.forEach((_,index) => {
  console.log(tasks[index].duration / 60)
});
// 2.3)
const myTime=tasks.filter(function(_,index){ 
return(tasks[index].duration/60 >= 2);
});
console.log(myTime);
// 2.4 

    const theMultiply=myTime.map(function(_,index){
         return(myTime[index].duration/60*15)
    });
    console.log(theMultiply);
// 2.5) i format the amount in Euro  
const mySummer = (fm,sm) => fm + sm;
console.log(theMultiply.reduce(mySummer));

