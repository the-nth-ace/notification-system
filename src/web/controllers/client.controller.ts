import { Request, Response } from "express";

export class ClientController {
  async create(req: Request, res: Response) {
    const payload = req.body;
    return res.status(201).json(payload);
  }

  async index(req: Request, res: Response) {
    // Call service
    // const data: Array<IClient> =
    return res.json([]);
  }
  async get(req: Request, res: Response) {}
}

export default new ClientController();
