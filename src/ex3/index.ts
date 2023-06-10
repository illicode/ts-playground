export const getInfos = (person) => {
    let displayAge;
    if(!person.age) {
        displayAge = '?'
    } else {
        displayAge = person.age >= 18 ? person.age : `${person.age} - minor`
    }
    return `${person.firstName} ${person.lastName} (${displayAge})`
}
