export enum ClientType {
  "SINGLE" = "Single",
  "BROADCAST" = "Broadcast",
}

export interface IClient {
  id: string;
  email: string;
  name: string;
  password: string;
  type: ClientType;
}
