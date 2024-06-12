function planesToTravel(fuel) {
    let n = fuel.length;
    if (n === 0) 
    {
        return -1;
    }

    let currentRange = 0;
    let nextRange = 0;
    let noOfPlanes = 0;
    let i = 0;

    while (i <= currentRange) {
        nextRange = Math.max(nextRange, i + fuel[i]);

        if (nextRange >= n - 1) {
            return noOfPlanes + 1;
        }

        if (i === currentRange) {
            noOfPlanes += 1;
            currentRange = nextRange;
        }

        i += 1;
    }

    return -1;
}

console.log(planesToTravel([]));
console.log(planesToTravel([2, 1, 2, 3, 1])); 
console.log(planesToTravel([1, 6, 3, 4, 5, 0, 0, 0, 6]));  
