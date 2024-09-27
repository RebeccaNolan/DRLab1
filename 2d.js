//Function to multiply each num under 70 by 2
const ages = [25, 31, 42, 77];

let d = ages.map((item) => {
    //if to check if item is under 70
    if (item < 70)
        return item * 2;
    else
        return item;
})
console.log(ages);
console.log(d);