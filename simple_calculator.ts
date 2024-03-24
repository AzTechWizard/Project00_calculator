import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number:",
        type:"number",
        name:"FNum"
    },
    {
        message: "Enter second number:",
        type:"number",
        name:"SNum"
    },
    {
        message: "Select the operator:",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
])

if(answer.operator==="Addition"){
    console.log("The result is:",answer.FNum + answer.SNum);
}
else if (answer.operator==="Subtraction") {
    console.log("The result is:",answer.FNum - answer.SNum);
}
else if (answer.operator==="Multiplication") {
    console.log("The result is:",answer.FNum * answer.SNum);
}
else if (answer.operator==="Division") {
    console.log("The result is:",answer.FNum / answer.SNum);
}
