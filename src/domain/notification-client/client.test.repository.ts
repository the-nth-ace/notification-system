import { CreateClientDTO } from "./dtos";
import { IClient } from "./interfaces";
import { IClientRepository } from "./interfaces/client.repository.interface";

export class ClientTestRepository implements IClientRepository {
  createClient(dto: CreateClientDTO): boolean {
    throw new Error("Method not implemented.");
  }
  getClientById(id: string): IClient {
    throw new Error("Method not implemented.");
  }
  getMany(q?: string | undefined): IClient[] {
    throw new Error("Method not implemented.");
  }
  updateClientById(id: string, dto: Partial<IClient>): boolean {
    throw new Error("Method not implemented.");
  }
  deleteClient(id: string): null {
    throw new Error("Method not implemented.");
  }
}
