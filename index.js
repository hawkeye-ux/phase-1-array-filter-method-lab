// Code your solution here
function findMatching(arrayOfDriversNames, string) {
    return arrayOfDriversNames.filter((el) => el.toLowerCase().includes(string.toLowerCase()));
}

function fuzzyMatch(arrayOfDriversNames, string) {
    return arrayOfDriversNames.filter((el) => el.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(arrayOfDriversObjects, string) {
    return arrayOfDriversObjects.filter((driver) => driver.name.toLowerCase() == string.toLowerCase());
}
