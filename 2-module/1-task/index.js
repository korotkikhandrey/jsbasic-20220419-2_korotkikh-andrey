function sumSalary(salaries) {
  let result = 0;

  result += getSalaryForPerson('John', salaries);
  result += getSalaryForPerson('Ann', salaries);
  result += getSalaryForPerson('Pete', salaries);
  
  return result;
}

function getSalaryForPerson(person, salaries) {

  if (salaries[person] === undefined) {
    return 0;
  } 

  if (typeof salaries[person] === 'number' 
        && isFinite(salaries[person])) {
    return salaries[person];
  }

}
