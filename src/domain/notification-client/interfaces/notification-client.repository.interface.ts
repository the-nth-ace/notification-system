import { IClient } from "./client.interface";

export interface INotificationClient {
  createClient(): boolean;
  getClientById(id: string): IClient;
  getMany(q?: string): Array<IClient>;
  updateClientById(id: string): boolean;
  deleteClient(id: string): null;
}
