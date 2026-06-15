export const authConfig = {
    //Token JWT 
    jwt: {
        //SecretJWT serve para assinar e verificar a autenticidade do token JWT
        secret: process.env.AUTH_SECRET || "defalut",
        //ExpiresIn serve para definir o tempo de expiração do token JWT
        expiresIn: "1d"
    }
}