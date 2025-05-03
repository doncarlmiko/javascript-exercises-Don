//A function that finds the oldest person in an array of people objects and create an age property for each person object.
const getAge = (people) => {
    return people.map((person) => {
        let calculatedAge;

        if (person.yearOfDeath === undefined) {
            calculatedAge = new Date().getFullYear() - person.yearOfBirth;
        }
        else{
            calculatedAge = person.yearOfDeath - 
            person.yearOfBirth;        
        }
        return {...person, age: calculatedAge};
    });
}

const findTheOldest = (peopleInfo)=>{
    const age = getAge(peopleInfo);
    // Sort the array of people by age in descending order

    return age.sort((a, b) => b.age - a.age)[0]; 
};

// Do not edit below this line
module.exports = findTheOldest;
