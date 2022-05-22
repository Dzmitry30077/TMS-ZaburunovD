//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

function solutions(data) {
  const dataValues = Object.values(data);

  const subjectsNameString = Object.keys(data).join(', ');                                            //1
  const countStudentsTeachers = dataValues.reduce((acc, e) => acc + (e.teachers + e.students), 0);    //2
  const averageOfStudents = dataValues.reduce((acc, e) => acc + e.students, 0) / dataValues.length;   //3
  const arrayOfSubjects = Object.entries(data);                                                       //4
  let sortedArray = [...arrayOfSubjects];
  sortedArray.sort((a, b) => a[1].teachers + b[1].teachers);                                          //5

  return sortedArray
}

console.log(solutions(subjects));