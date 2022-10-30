import { Express, Request, Response } from "express";
import { itemCarrinhoController } from "../controllers/MainController";

export default function ItemCarrinhoRotas(app: Express){
    app.get("/itemCarrinhos", (req: Request, res: Response) => {
        return itemCarrinhoController.todos(req, res);
    });

    app.get("/itemCarrinho/:id", (req: Request, res: Response) => {
        return itemCarrinhoController.porId(req, res);
    });

    app.post("/itemCarrinho", (req: Request, res: Response) => {
        return itemCarrinhoController.inserir(req, res);
    });

    app.patch("/itemCarrinho/:id", (req: Request, res: Response) => {
        return itemCarrinhoController.atualizar(req, res);
    });

    app.delete("/itemCarrinho/:id", (req: Request, res: Response) => {
        return itemCarrinhoController.deletar(req, res);
    });
}