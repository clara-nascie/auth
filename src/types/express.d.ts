//faço as tipagens para tipar o req.user e outros que eu precisar nas rotas de produtos

declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}