// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let results = []; //a variable to store the results array
    for(let i = 0; i < arr.length; i++){ //outer loop to iterate thru the outer array
        let largestNumber = arr[i][0]; //variable to hold the second number
        for(let j = 1; j < arr[i].length; j++){ //inner loop to work with sub arrays
            if(arr[i][j] > largestNumber){ //check if the element of sub array is larger than currently stored largest number
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    };
    return results; 
};


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));