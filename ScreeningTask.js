//Answer No 1:
function descendingSort(arr) {
    const n = arr.length;
    let swapped;
    for (let i = 0; i < n-1; i++) {
        swapped = false;
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] < arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
    return arr;
}

const inputArray1 = [3, 2, 7, 4, 6, 9];
const sortedList = descendingSort(inputArray1);
console.log(sortedList);

//Answer No 2:
function isPalindrome(str) {
    const len = str.length;
    const halfLen = Math.floor(len / 2);
    for (let i = 0; i < halfLen; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const str1 = "madam";
const str2 = "doctor";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

//Answer No 3:
function sumOfTwoLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return largest + secondLargest;
}

const inputArray2 = [3, 7, 1, 5, 11, 19];
const SumReseult = sumOfTwoLargest(inputArray2);
console.log(SumReseult); 

//Answer No 4:
function findMissingNumbers(arr) {
    const max = Math.max(...arr);
    const missingNumbers = [];

    for (let i = 0; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

const inputArray3 = [3, 4, 9, 1, 7, 3, 2, 6];
const missingNumbers = findMissingNumbers(inputArray3);
console.log(missingNumbers);

//Answer No 5:
function findMostRepeated(arr) {
    let maxCount = 0;
    let mostRepeated = null;
    let count = {};

    for (let num of arr) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }

        if (count[num] > maxCount) {
            maxCount = count[num];
            mostRepeated = num;
        }
    }

    return `${mostRepeated} is repeated ${maxCount} times.`;
}

const inputArray4 = [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5];
const result = findMostRepeated(inputArray4);
console.log(result);

//Answer No 6:
function rotateRightOnce(arr) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

const inputArray5 = [3, 8, 9, 7, 6];
const rotatedArray = rotateRightOnce(inputArray5);
console.log(rotatedArray);