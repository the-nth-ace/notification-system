export enum ClientType {
  "SINGLE" = "Single",
  "BROADCAST" = "BroadCast",
}

export interface IClient {
  id: string;
  email: string;
  password: string;
  type: ClientType;
}
