import { Express, Request, Response } from "express";
import { usuarioController, autenticacaoController } from "../controllers/MainController";

export default function UsuarioRotas(app: Express){
    app.post("/login", (req: Request, res: Response) => {
        return autenticacaoController.login(req, res);
    });
    
    app.post("/cadastrar", (req: Request, res: Response) => {
        return usuarioController.inserir(req, res);
    });

    app.get("/usuarios", (req: Request, res: Response) => {
        return usuarioController.todos(req, res);
    });

    app.get("/usuario/:id", (req: Request, res: Response) => {
        return usuarioController.porId(req, res);
    });

    app.patch("/usuario/:id", (req: Request, res: Response) => {
        return usuarioController.atualizar(req, res);
    });

    app.delete("/usuario/:id", (req: Request, res: Response) => {
        return usuarioController.deletar(req, res);
    });
}