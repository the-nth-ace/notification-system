import { CreateClientRequest } from "./requests/create-client.request";
import { IClientRepository } from "@domain/notification-client";

export class CreateClientUseCase {
  constructor(
    private _clientRepo: IClientRepository,
    private dto: CreateClientRequest
  ) {}

  async execute(): Promise<boolean> {
    const { email, name, password, type } = this.dto;

    const payload = {
      email,
      name,
      password,
      type,
    };
    const data = await this._clientRepo.createClient(payload);
    return true;
  }
}
