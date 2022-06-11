const startDate = new Date().getFullYear();
const endDate = startDate + 5;
const totalYears = [];
const salary = 20000;

// adding libiliteis manualy

const carLoans = 1200000;
const homeLoans = 500000;
const otherLoans = 100000;



if (startDate < endDate) {
    for(let i = startDate; i < endDate; i++) {
        totalYears.push(i);
        // console.log(i);
    }
}

// console.log(endDate);
console.log(totalYears.length);

const totalMonths =  totalYears.length * 12;

const totalNetworth = totalMonths * salary - carLoans - homeLoans - otherLoans;
console.log("Your total networth is : " + totalNetworth);