const findTheOldest = function (array) {
    return array.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    });
};

//   {
// name: "Carly",
//     yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },

// Do not edit below this line
module.exports = findTheOldest;
