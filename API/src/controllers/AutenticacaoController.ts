import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { IRepository } from "../interfaces/IRepository";
import Carrinho from "../models/Carrinho";
import ItemCarrinho from "../models/ItemCarrinho";
import Usuario from "../models/Usuario";

export default class AutenticacaoController {

    constructor(private repoUsuario: IRepository<Usuario>, private repoCarrinho: IRepository<Carrinho>){}

    async login(req: Request, res: Response): Promise<Response> {
        const {email, senha} = req.body;
        // const itens: ItemCarrinho[] = []; 
  
        const usuarioExiste = await this.repoUsuario.getByName(email);
  
        if(!usuarioExiste) return res.status(400).json({ mensagem: "Usuario ou senha inválido" });

        if(usuarioExiste.senha !== senha) return res.status(400).json({ mensagem: "Senha inválida" });
        
        const carrinhoExiste = await this.repoCarrinho.getByName(String(usuarioExiste._id));

        if(!carrinhoExiste) {
            let carrinho = new Carrinho(usuarioExiste, []);

            await this.repoCarrinho.save(carrinho);
            
            return res.status(200).json({ usuario: usuarioExiste, carrinho: carrinho});
        }

        return res.status(200).json({ usuario: usuarioExiste, carrinho:  carrinhoExiste});
      }
  
  
  
}