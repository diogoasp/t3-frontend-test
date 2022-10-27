import { Express, Request, Response } from "express";
import { produtoController } from "../controllers/MainController";

export default function ProdutoRotas(app: Express){
    app.get("/produtos", (req: Request, res: Response) => {
        return produtoController.todosProdutos(req, res);
    });

    app.get("/produto/:id", (req: Request, res: Response) => {
        return produtoController.produtoPorId(req, res);
    });

    app.post("/produto", (req: Request, res: Response) => {
        return produtoController.inserir(req, res);
    });

    app.patch("/produto/:id", (req: Request, res: Response) => {
        return produtoController.atualizar(req, res);
    });

    app.delete("/produto/:id", (req: Request, res: Response) => {
        return produtoController.deletar(req, res);
    });
}