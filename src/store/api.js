const people = [
  {name: 'Nader', age: 36},
  {name: 'Amanda', age: 24},
  {name: 'Jason', age: 44}
];

export function getPeople() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}

export function getOnePerson() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people[0])
    }, 3000)
  })
}