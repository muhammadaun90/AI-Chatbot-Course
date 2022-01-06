var input1 = [
    [2,4,6],
    [1,3,5],
    [3,7,9]
];

console.log("input1[0] [0]: ", input1[0] [0]);
console.log("input1[0] [1]: ", input1[0] [1]);
console.log("input1[0] [2]: ", input1[0] [2]);

console.log("input1[0] [0]: ", input1[1] [0]);
console.log("input1[0] [1]: ", input1[1] [1]);
console.log("input1[0] [2]: ", input1[1] [2]);

console.log("input1[0] [0]: ", input1[2] [0]);
console.log("input1[0] [1]: ", input1[2] [1]);
console.log("input1[0] [2]: ", input1[2] [2]);

for (var i=0; i < input1.length; i++) {
    for (var j=0; j < input1.length; j++) {
    // console.log("i, j: ", i, j);
    document.write(input1[i] [j]);        
    }
    document.write("\n");
}