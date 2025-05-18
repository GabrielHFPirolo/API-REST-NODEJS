//Configuração Bibliotecas
import express from "express"
import connectDB from "./database/db.js"
import routes from "./routes.js"

const app = express()

app.use(express.json()) //interpretar JSON no body da requisição
app.use(routes)

//conexão mongoose e tratamento de erro
//inicialização de servidor caso banco de dados conecte normalmente
connectDB()
  .then(() => {
    app.listen(8080, () => console.log("Servidor Rodando e DB conectada"))
  } ) 
  .catch((error) => console.log(error))
