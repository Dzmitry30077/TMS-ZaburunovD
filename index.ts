// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

interface IUsers {
  name: string
  phone: string
  email: string
  hasChildren: boolean
  hasEducation: boolean
  animals?: string[]
  cars?: string[]
}


const users: IUsers[] = [
  {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
  },
  {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
  },
  {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
  }
]
// 1
const strOfNames: string = users.map((elem: IUsers): string => elem.name).join(', ');

// 2
const counterCarsOfUsers = (usersData: IUsers[]) => {
<<<<<<< HEAD
  const res = usersData.reduce((acc: number, user) => {
=======
  const res = usersData.reduce((acc, user) => {
>>>>>>> 31d5ab9ce4e3aae7bbbbc9bc6b365df567c800b7
    return user.cars != undefined ? acc + user.cars.length : acc
  }, 0)

  return res
}

//3
const educationFilter = (usersData: IUsers[]) => {
    const res = usersData.filter(user => user.hasEducation)
    return res
}

//4
const hasAnimalsOfUsers = (usersData: IUsers[]) => {
  const res = usersData.filter(user => user.animals)
  return res
}

//5

const carsOfUsers = (usersData: IUsers[]) => {
  const res = usersData.reduce((newArray, user) => {
    if (user.cars) {
      newArray.push(user.cars);
    }
    return newArray.flat();
  }, [])

  return res.join(', ')
}
