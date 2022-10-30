import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import { IRepository } from "../interfaces/IRepository";
import Carrinho from "../models/Carrinho";
import Produto from "../models/Produto";

export default class CarrinhoController implements IController{

    constructor(private repo: IRepository<Carrinho>){}
    
    async todos(req: Request, res: Response): Promise<Response> {
      return res.status(405).json({ mensagem: "Erro inesperado. Não implementado"}); 
    }

    async porId(req: Request, res: Response): Promise<Response> {
      try {
          const data = await this.repo.getById(req.params.id);
          return res.status(200).json({ item: data });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", error });  
        }
    }

    async inserir(req: Request, res: Response): Promise<Response> {
      try {
        const {usuario, itens} = req.body;

        const carrinho = new Carrinho(usuario, itens);
        
        await this.repo.save(carrinho);

        return res.status(201).json({ status: "success", mensagem: "Carrinho criado com sucesso", item: carrinho });
      } catch (error) {
        return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", error });
      }
    }

    async deletar(req: Request, res: Response): Promise<Response> {
        try {
          await this.repo.delete(req.params.id);

          return res.status(200).json({ status: "success", mensagem: "item removido do carrinho!"});
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad request", error })
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
          const {usuario, itens} = req.body;

          const novoCarrinho = new Carrinho(usuario, itens);

          const carrinhoAtualizado = await this.repo.update(req.params.id, novoCarrinho);

          return res.status(200).json({ status: "success", mensagen: "Carrinho atualizado", carrinho: carrinhoAtualizado });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad request", error })
        }
    }

}