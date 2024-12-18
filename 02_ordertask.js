
// input array
const ordered = [
    {amount:1000, quantity:10},
    {amount:2000, quantity:5},
    {amount:1500, quantity:8},
    {amount:3000, quantity:3},
    {amount:2500, quantity:7}
]

const arrayWithTotal = []   // initiate new array

for(let i = 0; i < ordered.length; i++){
    const {amount, quantity} = ordered[i]          // get variable
    const total = amount * quantity
    arrayWithTotal.push({...ordered[i], total})  // assign to array with total
};

orderedSales = arrayWithTotal.sort((a,b)=> b.total - a.total); // sort descending by total

// console output
console.log(arrayWithTotal);
console.log(orderedSales);