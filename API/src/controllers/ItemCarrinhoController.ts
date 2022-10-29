import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import { IRepository } from "../interfaces/IRepository";
import ItemCarrinho from "../models/ItemCarrinho";
import Produto from "../models/Produto";

export default class ItemCarrinhoController implements IController{

    constructor(private repo: IRepository<ItemCarrinho>){}
    
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
        const {produto, quantidade} = req.body;

        const item = new ItemCarrinho(produto, quantidade);
        
        this.repo.save(item);

        return res.status(201).json({ status: "success", mensagem: "ItemCarrinho inserido com sucesso", item: item });
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
          const {produto, quantidade} = req.body;

          const novoItem = new ItemCarrinho(produto, quantidade);

          const itemAtualizado = await this.repo.update(req.params.id, novoItem);

          return res.status(200).json({ status: "success", mensagen: "Item atualizado", item: itemAtualizado });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad request", error })
        }
    }

}