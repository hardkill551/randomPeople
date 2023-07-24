import express, { Request, Response } from "express"
import cors from "cors"
import router from "./routers/index.routes"

const app = express()
app.use(cors())
app.use(express.json())
app.get("/health", (req:Request, res:Response)=>{
    res.send("I'm Ok")
})
app.use(router)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})