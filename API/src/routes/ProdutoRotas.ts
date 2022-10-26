import { Express, Request, Response } from "express";
import { produtoController } from "../controllers/MainController";

export default function ProdutoRotas(app: Express){
    app.get("/produtos", (req: Request, res: Response) => {
        return produtoController.getAll(req, res);
    });

    app.get("/produto/:id", (req: Request, res: Response) => {
        return produtoController.getById(req, res);
    });

    app.post("/produto", (req: Request, res: Response) => {
        return ;
    });

    app.patch("/produto/:id", (req: Request, res: Response) => {
        return ;
    });

    app.delete("/produto/:id", (req: Request, res: Response) => {
        return ;
    });
}