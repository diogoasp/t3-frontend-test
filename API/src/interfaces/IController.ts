import { Request, Response } from "express";

export interface IController {
    getAll(req: Request, res: Response): Promise<Response>
    getById(req: Request, res: Response): Promise<Response>
    save(req: Request, res: Response): Promise<Response>
    delete(req: Request, res: Response): Promise<Response>
    update(req: Request, res: Response): Promise<Response>
}