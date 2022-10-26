import { Express, Request, Response } from "express";

export default function UsuarioRotas(app: Express){
    app.get("/usuarios", (req: Request, res: Response) => {
        return ;
    });

    app.get("/usuario/:id", (req: Request, res: Response) => {
        return ;
    });

    app.post("/usuario", (req: Request, res: Response) => {
        return ;
    });

    app.patch("/usuario/:id", (req: Request, res: Response) => {
        return ;
    });

    app.delete("/usuario/:id", (req: Request, res: Response) => {
        return ;
    });
}