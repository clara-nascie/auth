import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAutheticated } from "@/middlewares/ensureAutheticated"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/" , ensureAutheticated, productsController.create)

export { productsRoutes }
