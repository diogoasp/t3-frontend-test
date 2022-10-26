import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import { IRepository } from "../interfaces/IRepository";

export default class ProdutoController implements IController{

    constructor(private repo: IRepository){}
    
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
          const data = await this.repo.getAll();
          return res.status(200).json({ produtos: data });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest" })  
        }
    }
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const data = await this.repo.getById(req.params.id);
            return res.status(200).json({ produto: data });
          } catch (error) {
            return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest" })  
          }
    }
    save(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

}