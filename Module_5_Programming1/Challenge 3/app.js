//https://codepen.io/zipporah_n/pen/ZEWOxab
let names = [
    "Zipporah Najar",
    "Julisa Bryant",
    "Marcus Luther",
    "Abby Hills",
    "Becky Simmons",
    "Fanny Mae",
    "Jesus Christ"
  ];
  let firstName = [];
  let lastName = [];
  
  for (let i = 0; i < names.length; i++) {
    let currName = names[i].split(" ");
    firstName[i] = currName[0];
    lastName[i] = currName[1];
  }
  
  for (let i = 0; i < names.length; i++) {
    console.log(`${i+1}) First Name: ${firstName[i]}\t Last Name: ${lastName[i]} \n`);
  }