// var sirname =  "Mundada"
// function x() {
//     let name = "Pavan"
//     function yz(num) {
//         console.log("I am called", name, num, sirname);
//     }
//     return yz;
// }

// x()(5);

function sum(a) {
    return function (b) {
        return function (c) {

            return a + b + c
        }

    }

}

console.log(sum(2)(6)(1));

const obj = {
    a:"one",
    b:"two",
    a:"three",
}

console.log("obj",obj); //replace a with last value modified at 1st "a's" index

const strObj = JSON.stringify(obj); //convert obj to string
localStorage.setItem("test", strObj)

console.log("JSON Parse", JSON.parse(localStorage.getItem("test"))); //again convert string to obj to access property of obj

let arr = [
    [1,2],
    [3,4],
    [5,6,[7,8]],
    [10,11,12]
];

let flattened = [].concat(...arr);

console.log("flattened",flattened);

console.log('Javascript inbult method for flattened',arr.flat(2))

// if(true){
//     console.log('aaaaaa', a);
//     const a =2;
// }
