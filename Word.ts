#! /usr/bin/env node
import inquirer from "inquirer"

const answer = await inquirer.prompt([{
name: "Scentence", type: "input" , message: "Please input your Paragahp to count:"},
{name: "Operation", type: "list" , message: "Operation to choose",
choices: ["Count Total Words", "Count Total Characters", "Count Characters with spaces", "All"] 
}])

if (answer.Operation == "Count Total Words"){
let words = answer.Scentence.trim().split(" ")
console.log(words);
console.log("Total words in the given Paragaph is: ", words.length)}

else if (answer.Operation == "Count Characters with spaces"){
let words2 = answer.Scentence.split("")
console.log("Total Characters with spaces in the given Paragaph is: ", words2.length)}

    else if (answer.Operation == "Count Total Characters"){
    let words3 = answer.Scentence.trim().split(" ").join("")
    console.log("Total Characters in the given Paragaph is: ", words3.length)}

 else if (answer.Operation == "All")
 {
    let words = answer.Scentence.trim().split(" ")
    let words2 = answer.Scentence.split("")
    let words3 = answer.Scentence.trim().split(" ").join("")
    console.log("Total words in the given Paragaph is: ", words.length)
    console.log("Total Characters in the given Paragaph is: ", words3.length)
    console.log("Total Characters with spaces in the given Paragaph is: ", words2.length)
    
}