import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import jwt from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const fakeUser = {
      id: "1",
      username: "Ana Clara",
      password: "123456",
    };

    if (fakeUser.username !== username || fakeUser.password !== password) {
      throw new AppError("Usuário ou senha inválidos", 401);
    }

    const {secret, expiresIn} = authConfig.jwt;
    const token = jwt.sign({ id: fakeUser.id }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return response.json({ token });
  }
}

export { SessionsController };
