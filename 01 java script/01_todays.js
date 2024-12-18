Date.prototype.daysTo = function(second_day){

    const msforDay = 24* 60 * 60 * 1000;  // milliseconds for one day
    const date_diff = second_day - this;

    if (date_diff < 0) 
        return -1;         // if the second_day is earlier than the current day, return -1

    return Math.floor(date_diff / msforDay);  // used floor to get lower integer value
};

// inputs

const d1 = new Date('2024-12-15');
const d2 = new Date('2024-12-10');

console.log(d1.daysTo(d2)); 
