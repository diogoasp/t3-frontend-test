import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import { IRepository } from "../interfaces/IRepository";
import Produto from "../models/Produto";

export default class ProdutoController implements IController{

    constructor(private repo: IRepository<Produto>){}
    
    async todos(req: Request, res: Response): Promise<Response> {
        try {
          const data = await this.repo.getAll();
          return res.status(200).json({ produtos: data });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", error });  
        }
    }

    async porId(req: Request, res: Response): Promise<Response> {
        try {
            const data = await this.repo.getById(req.params.id);
            return res.status(200).json({ produto: data });
          } catch (error) {
            return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", error });  
          }
    }

    async inserir(req: Request, res: Response): Promise<Response> {
        try {
          const {nome, descricao, valor} = req.body;
          const prod = new Produto(nome, descricao, valor);
          this.repo.save(prod);
          return res.status(200).json({ status: "success", mensagem: "Produto inserido com sucesso" });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", error });
        }
    }

    async deletar(req: Request, res: Response): Promise<Response> {
        try {
          const data = await this.repo.delete(req.params.id);
          
          console.log(data);

          return res.status(200).json({ status: "success", mensagem: "Produto removido!"});
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad request", error })
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
          const {nome, descricao, valor} = req.body;
          const novoProduto = new Produto(nome, descricao, valor);
          const data = await this.repo.update(req.params.id, novoProduto);

          console.log(data);

          return res.status(200).json({ status: "success", mensagen: "Produto atualizado" });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad request", error })
        }
    }

}