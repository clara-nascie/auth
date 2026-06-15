import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAutheticated } from "@/middlewares/ensureAutheticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

//quando quero aplicar em todas as rotas abaixo eu escrevo assim:
//productsRoutes.use(ensureAutheticated)
//productsRoutes.use(verifyUserAuthorization(["sale", "admin"]))

productsRoutes.get("/", productsController.index)
productsRoutes.post("/",
    ensureAutheticated,
    verifyUserAuthorization(["sale", "admin"]),
    productsController.create)

export { productsRoutes }
