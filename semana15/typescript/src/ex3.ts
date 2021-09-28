console.log("Exercicio 3 da aula 42")

// a)

type postBase = {
    autor: string,
    texto: string
}

const posts:postBase[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// b)

function buscarPostsPorAutor(posts:postBase[], autorInformado:string): postBase[] {
    return posts.filter(
      (post:postBase) => {
        return post.autor === autorInformado
      }
    )
  }
