import { Express, Request, Response } from "express";
import { carrinhoController } from "../controllers/MainController";

export default function CarrinhoRotas(app: Express){
    app.get("/carrinhos", (req: Request, res: Response) => {
        return carrinhoController.todos(req, res);
    });

    app.get("/carrinho/:id", (req: Request, res: Response) => {
        return carrinhoController.porId(req, res);
    });

    app.post("/carrinho", (req: Request, res: Response) => {
        return carrinhoController.inserir(req, res);
    });

    app.patch("/carrinho/:id", (req: Request, res: Response) => {
        return carrinhoController.atualizar(req, res);
    });

    app.delete("/carrinho/:id", (req: Request, res: Response) => {
        return carrinhoController.deletar(req, res);
    });
}