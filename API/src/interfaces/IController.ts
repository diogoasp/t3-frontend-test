import { Request, Response } from "express";

export interface IController {
    todos(req: Request, res: Response): Promise<Response>
    porId(req: Request, res: Response): Promise<Response>
    inserir(req: Request, res: Response): Promise<Response>
    deletar(req: Request, res: Response): Promise<Response>
    atualizar(req: Request, res: Response): Promise<Response>
}