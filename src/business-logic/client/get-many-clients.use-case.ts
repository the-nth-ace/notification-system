import { IClient, IClientRepository } from "@domain/notification-client/";

export class GetManyClientsUseCase {
  constructor(private _clientRepo: IClientRepository, private query?: string) {}
  async execute(): Promise<IClient[]> {
    return await this._clientRepo.getMany(this.query);
  }
}
