import User from "../models/User.js"

//Busca todos usuários do banco de dados
async function getUser(req, res){
  const users = await User.find() //retornando todos

  return res.status(200).json(users)
}

//Cria um novo usuário utilizando body da requisição
async function createUser(req, res){
  const user = req.body

  const newUser = await User.create(user)

  return res.status(201).json(newUser)
}

//Atualiza um usuário pelo ID e o retorna já atualizado
async function updateUser(req, res){
  let id = req.params.id
  let data = req.body //dados a serem atualizados
  try {
    const update = await User.findByIdAndUpdate(id, data, {
      new: true, //retornar documento atualizado
      runValidators: true //rodar validações do esquema 
    })
    if (!update){
      return res.status(404).json({error: "Usuário não encontrado"})
    }

    return res.status(200).json(update)
  }
  catch (err){
    return res.status(400).json({ error: 'ID inválido ou dados de update incorretos.', details: err.message })
  }

}

//Deleta um usuário pelo ID 
async function deleteUser(req, res){
  let id = req.params.id
  
  const deleted = await User.findByIdAndDelete(id)

  if (!deleted) {
    return res.status(404).json({ error: 'Usuário não encontrado.' })
  }

  return res.status(200).json({ message: 'Usuário deletado com sucesso.' })
}


export {getUser, createUser, deleteUser, updateUser}