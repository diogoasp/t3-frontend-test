import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import { IRepository } from "../interfaces/IRepository";
import Usuario from "../models/Usuario";

export default class UsuarioController implements IController{

    constructor(private repo: IRepository<Usuario>){}
    
    async todos(req: Request, res: Response): Promise<Response> {
        try {
          const data = await this.repo.getAll();
          return res.status(200).json({ usuarios: data });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", erro: error });  
        }
    }

    async porId(req: Request, res: Response): Promise<Response> {
        try {
            const data = await this.repo.getById(req.params.id);
            return res.status(200).json({ usuario: data });
          } catch (error) {
            return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", erro: error });  
          }
    }

    async inserir(req: Request, res: Response): Promise<Response> {
        try {
          const {nome, email, senha} = req.body;

          const usuarioExiste = await this.repo.getByName(email);

          if(usuarioExiste) return res.status(400).json({ mensagem: "Usuario já existe" });
          
          const usuario = new Usuario(nome, email, senha);
          this.repo.save(usuario);

          return res.status(201).json({ status: "success", usuario:  usuario});
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", erro: error });
        }
    }

    async deletar(req: Request, res: Response): Promise<Response> {
        try {
          const data = await this.repo.delete(req.params.id);
          
          console.log(data);

          return res.status(200).json({ status: "success", mensagem: "Usuario removido!"});
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", erro: error });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
          const {nome, descricao, valor} = req.body;
          const novoUsuario = new Usuario(nome, descricao, valor);
          const data = await this.repo.update(req.params.id, novoUsuario);

          console.log(data);

          return res.status(200).json({ status: "success", mensagen: "Usuario atualizado" });
        } catch (error) {
          return res.status(400).json({ mensagem: "Erro inesperado. Bad resquest", erro: error });
        }
    }
}