import express, { Request, Response } from 'express'
import cors from 'cors'
import { AnyRecord } from 'dns'

enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_ROLES,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_ROLES.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_ROLES.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_ROLES.ADMIN,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_ROLES.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_ROLES.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_ROLES.NORMAL,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Running server at http://localhost:3003')
})

// ex1.
// app.get("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400

//   try {
//     res.status(200).send(users)
//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })
//   }

// })

//ex2.
// app.get("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400
//   const newType: string = req.query.type as string
//   try {
//     //const user: User | undefined = users.find((user) => user.type === type)
//     if(newType !== "ADMIN" && newType !== "NORMAL") {
//       errorCode = 404
//       throw new Error('imput MUST be ADMIN or NORMAL')
//     }
//     if (newType === "ADMIN" || newType === "NORMAL") {
//       const newList: User[] | undefined = users.filter((user) => user.type === newType)
//       res.status(200).send(newList)
//     }
// } catch(error: any) {
//   res.status(errorCode).send({ message: error.message })
// }
// })

//ex3. 
// app.get("/users", (req: Request, res: Response) => {
//   try {
//     let type = req.query.type as string
//     let search = req.query.search as string
//     if(type) {
//       type = type.toUpperCase()
//       if (type in USER_ROLES) {
//         const result = users.filter(user => user.type === type)
//         return res.status(200).send(result)
//       }
//       throw new Error("Invalid type")
//     }
//     if (search) {
//       search = search.toLowerCase()
//       const result = users.filter(
//         user => user.name.toLowerCase().includes(search)
//       )
//       console.log(result, search)
//       if (result.length === 0) {
//         return res.status(204).send("User not found")
//       }
//       return res.status(200).send(result)
//     }
//     //res.status(200).send(users)
//   } catch(error: any) {
//     res.status(400).send(error.message)
//   }
// })
//ex4.
// b) segundo a convencao de api rest nos deveriamos utilizar o meotodo put para alterar dados e nao para
//  adicionar novas entidades no banco de dados.
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { id, name, email, type, age } = req.body
    if(!id || !name || !email || !type || !age) {
      throw new Error("Check your request")
    }
    const newUser: 
    User={
      id,
      name,
      email,
      type,
      age
    }
    if(type in USER_ROLES) {
      users.push(newUser)
      res.status(201).send("User added")
    }
  } catch(error: any) {
    throw new Error("erro")
  }
})