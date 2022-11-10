import { IClient, IClientRepository } from "@domain/notification-client";

export class GetOneClientUseCase {
  constructor(private _clientRepo: IClientRepository, private id: string) {}

  async execute(): Promise<IClient> {
    return this._clientRepo.getClientById(this.id);
  }
}
