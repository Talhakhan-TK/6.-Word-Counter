#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 0.0036, PKR: 1, INR: 0.3, Dirham: 0.013, SAR: 0.013, Euro: 0.0034, CA$: 0.005
};
let answer = await inquirer.prompt([{
        message: "Enter From Currency", type: "list", name: "From", choices: ["USD", "PKR", "INR", "Dirham", "SAR", "Euro", "CA$"]
    },
    {
        message: "Enter to Currency", type: "list", name: "To", choices: ["USD", "PKR", "INR", "Dirham", "SAR", "Euro", "CA$"]
    },
    {
        message: "Amount to be Converted (From Currency)", type: "number", name: "Amount"
    }
]);
let fromamount = currency[answer.From];
let toamount = currency[answer.To];
let baseamount = toamount / fromamount;
let Amount = baseamount * answer.Amount;
console.log("To Currency Amount will be:  ", Amount.toFixed(4), answer.To);
