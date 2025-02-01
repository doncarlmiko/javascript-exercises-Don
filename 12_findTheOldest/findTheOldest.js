const findTheOldest = function(people) {
    return people.reduce(()=> {
        const birth = people.yearOfBirth;
        return birth;
});
    

};

// Do not edit below this line
module.exports = findTheOldest;
