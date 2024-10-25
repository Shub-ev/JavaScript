// here we are calling a function and if we import this module in another module this function will execute

const callFunction = () => {
    console.log("In side file" + __filename);
}

module.exports = {
    callFunction,
}

callFunction();