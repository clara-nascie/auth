import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/AppError";
import { verify } from "jsonwebtoken";

//eu precido definir a interface para tipar o que o token vai retornar
//para o node conseguir entender o que ele está recebendo
interface TokenPayload{
    sub: string;
    role: string;
}

//criei essa função para garantir que a requisição está autenticada
function ensureAutheticated(request: Request, response: Response, next: NextFunction) {

    //verificar se o token existe no header
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token não fornecido", 401);
    }

    //verificar se o token é válido, extraindo o token do header
    const [, token] = authHeader.split(" ");

    const { sub: user_id, role } = verify(token, authConfig.jwt.secret) as TokenPayload;
   
    request.user = {
        id: String(user_id),
        role: String(role),
    };

    return next();

}

export { ensureAutheticated }
