// Code your solution in this file!
const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (driversList) => {
    return driversList.slice(0,2)
}

const returnLastTwoDrivers = (driversList) => {
    return driversList.slice(2,4,)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers(0)
selectingDrivers(1)

 function createFareMultiplier(x) {
    return function(y) {
       return x * y;
    };
 } /* The createFareMultiplier function takes in a single argument, x, and returns a new function. 
 This returned function takes in a single argument, y, and returns the product of x and y.*/ 

 function fareDoubler(x) {
    return x * 2;
 }

 function fareTripler(x) {
    return x * 3;
 }

 function selectDifferentDrivers(driversList, functions) {
    return functions(driversList)
 }

 selectDifferentDrivers(driversList, returnFirstTwoDrivers)

















