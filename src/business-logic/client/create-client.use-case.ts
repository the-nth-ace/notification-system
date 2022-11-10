import {
  IClientRepository,
  CreateClientDTO,
} from "@domain/notification-client";

export class CreateClientUseCase {
  constructor(
    private _clientRepo: IClientRepository,
    private dto: CreateClientDTO
  ) {}

  async execute(): Promise<boolean> {
    return await this._clientRepo.createClient(this.dto);
  }
}
