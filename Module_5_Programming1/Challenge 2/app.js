//https://codepen.io/zipporah_n/pen/gOrMeGj?editors=0010
let grade = prompt("What's your grade?:")
if(grade > 95) {
    console.log("A+");
}
if((grade > 88 ) && (grade <= 90)) {
    console.log("A");
}
if((grade > 84) && (grade <= 88)) {
    console.log("B+");
} 
if ((grade > 76) && (grade <= 84)) {
    console.log("C+");
}
if ((grade > 70) && (grade <= 76)) {
    console.log("C");
}
if ((grade > 67) && (grade <= 70)) {
    console.log("D+");
}
if ((grade > 64) && (grade <= 67)) {
    console.log("D");
}
if (grade <=64) {
    console.log("F")
}