const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below

const filteredGrades = grades.filter((schoolGrades) => {
  return schoolGrades < 3;
});

const grades3 = grades.filter((schoolGrades) => {
  return schoolGrades >= 3;
});

console.log(filteredGrades);
console.log(grades3);
