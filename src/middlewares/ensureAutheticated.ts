import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/AppError";
import { verify } from "jsonwebtoken";

//criei essa função para garantir que a requisição está autenticada
function ensureAutheticated(request: Request, response: Response, next: NextFunction) {

    //verificar se o token existe no header
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token não fornecido", 401);
    }

    //verificar se o token é válido, extraindo o token do header
    const [, token] = authHeader.split(" ");

    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    request.user = {
        id: String(user_id),
    };

    return next();

}

export { ensureAutheticated }
