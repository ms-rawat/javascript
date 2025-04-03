// 1.reverse a string


// using inbuilt funcitons
function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStringBuiltIn("hello")); // Output: "olleh"

// using for loop
function reverseStringCustom(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseStringCustom("hello")); // Output: "olleh"



// using recursion
function reverseStringRecursive(str) {
    if (str === "") return "";
    return reverseStringRecursive(str.slice(1)) + str[0];
}

console.log(reverseStringRecursive("hello")); // Output: "olleh"

// 2. check pelindrom string

