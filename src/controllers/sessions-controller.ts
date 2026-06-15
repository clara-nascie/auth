import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import jwt from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

//criei essa classe para que nela seja possível fazer o login.
class SessionsController {
  //criei esse método para criação de sessão e geração de token
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

//usuário teste, em produção, seria acessado por um banco de dados
    const fakeUser = {
      id: "1",
      username: "Ana Clara",
      password: "123456",
      role: "customer",
    };

    //comparação de usuario e senha
    if (fakeUser.username !== username || fakeUser.password !== password) {
      throw new AppError("Usuário ou senha inválidos", 401);
    }

    //Geração de Token JWT, aqui eu também coloco o que o usuário pode fazer 
    //dentro da aplicação (role), quais são suas autorizações, ou seja, suas permissões.
    //sub é o assunto, ou seja, o id do usuário. No payload coloco o id, por isso no arquivo
    //ensureAuthenticated, ele consegue acessar o id do usuário.
    const {secret, expiresIn} = authConfig.jwt;
    const token = jwt.sign({ role:fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return response.json({ token });
  }
}

export { SessionsController };
