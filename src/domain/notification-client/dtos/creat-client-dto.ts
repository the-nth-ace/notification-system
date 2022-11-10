import { IsString, IsEmail, IsEnum } from "class-validator";
import { ClientType } from "../interfaces/client.interface";

export class CreateClientDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(ClientType)
  type: ClientType;

  constructor(obj: any) {
    this.email = obj.email;
    this.password = obj.password;
    this.type = obj.type;
  }
}
