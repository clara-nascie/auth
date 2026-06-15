import { Request, Response } from "express"

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({ message: "Lista de Produtos" });
  }

  async create(request: Request, response: Response) {
    return response.json({ message: "Produto criado" });
  }
}

export { ProductsController }
