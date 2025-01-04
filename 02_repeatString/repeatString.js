const repeatString = function(string,num) {
    let stringSpace = '';
    let numStart;
    
    if(num<0) return "ERROR";
    for(numStart = 0; numStart < num; numStart++){
        stringSpace += string;
    }
    return stringSpace;
};

// Do not edit below this line
module.exports = repeatString;
