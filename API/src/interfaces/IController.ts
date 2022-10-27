import { Request, Response } from "express";

export interface IController {
    todosProdutos(req: Request, res: Response): Promise<Response>
    produtoPorId(req: Request, res: Response): Promise<Response>
    inserir(req: Request, res: Response): Promise<Response>
    deletar(req: Request, res: Response): Promise<Response>
    atualizar(req: Request, res: Response): Promise<Response>
}