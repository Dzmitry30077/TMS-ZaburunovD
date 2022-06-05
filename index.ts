interface IUsers {
    "id": number
    "email": string
    "first_name": string
    "last_name": string
    "avatar": string
    "age": number
}

const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];

// Получить строку с именами и фамилиями всех пользователей через запятую.
// const usersNames: string = users.map(user => `${user.first_name} ${user.last_name}`).join(', ');
//
// // 2. Создать массив из emails по алфавиту.
// const arrayOfEmails: string[] = users.map(user => `${user.email}`).sort((a: string, b: string) => a.localeCompare(b))
//
// 3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя(например username), которое должно содержать имя и фамилию.
// const editArrayOfUsers = (users: Array<IUsers>) => users.map((users) => {
//     return {
//         id: users.id,
//         fullName: `${users.first_name} ${users.last_name}`
//     }
// })
//
// 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
// const filteredUsers: Array<IUsers> = users.filter(user => user.age < 40).sort((a: IUsers, b:IUsers) => a.age - b.age);

// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
//
// const countOfFilterUsersAge = (age:number): number => users.reduce((acc: number, user: IUsers) => user.age > age ? ++acc : acc, 0)
//
// interface IGetEditedObj {
//     averageAge: number
//     over30: number
//     over40: number
//     over18: number
// }
//
// const getEditedObj = (users: Array<IUsers>): IGetEditedObj => {
//     const averageAge = users.reduce((acc: number, user: IUsers) => acc + user.age, 0) / users.length
//     return {
//         averageAge,
//         over30: countOfFilterUsersAge(30),
//         over40: countOfFilterUsersAge(40),
//         over18: countOfFilterUsersAge(18)
//     }
// }
//
// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте. Пример того, что надо получить, когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }

// const getObjOfKeys = (users: Array<IUsers>) => {
//     return users.reduce((acc: any, user: IUsers) => {
//         let firstChar = user.last_name.charAt(0);
//
//         !acc[firstChar] ?
//             acc[firstChar] = [user.last_name] :
//             acc[firstChar].push(user.last_name)
//         return acc
//     }, {})
// }