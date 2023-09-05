// Sync-tasks -  they will wait for first task then 2nd and then third. e.g PHP
console.log("Start Here!!")

console.log("Middle Here!!")

console.log("End Here!!")

//Async-task -  they don't wait for anyone. e.g Node, Javascript
console.log("1st Task")

setTimeout(() => {
   console.log("I am 2nd task")
}, 2000);


console.log("3rd task")
