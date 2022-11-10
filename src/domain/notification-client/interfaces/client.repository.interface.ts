import { IClient } from "./client.interface";
import { CreateClientDTO } from "../dtos/creat-client-dto";

export interface IClientRepository {
  createClient(dto: CreateClientDTO): boolean;
  getClientById(id: string): IClient;
  getMany(q?: string): Array<IClient>;
  updateClientById(id: string, dto: Partial<IClient>): boolean;
  deleteClient(id: string): null;
}
