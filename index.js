
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];



function superbowlWin(record){
    for (let items of record){
        if(items.result==='W'){
            return(items.year)
        }
}
}

let findItem = record.find(superbowlWin);


//   for (items of record){
//     for(keys in items){
//     if (keys.result === "W"){
//       return keys['year'];
//     }
//   else{
//     return undefined;
//   }
//   }
//   }
// }


// console.log (findItem);
