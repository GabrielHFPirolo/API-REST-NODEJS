import { Router } from "express"
import { getUser , createUser, deleteUser, updateUser } from "./controllers/userController.js"

const routes = Router()

routes.get("/Users", getUser)

routes.post("/Users", createUser)

routes.patch("/Users/:id", updateUser)

routes.delete("/Users/:id", deleteUser)

export default routes