const findTheOldest = function(people) {
    return people.reduce((prevPerson, person) => {
        const newAge = getAge(person);
        const prevAge = getAge(prevPerson);
        return newAge > prevAge ? person : prevPerson;
    });
};

const getAge = function(person) {
    if (!person.hasOwnProperty("yearOfDeath")) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return age = person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
