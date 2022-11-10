import { ClientType } from "@domain/notification-client/";

export class CreateClientRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  type: ClientType.SINGLE;
}
