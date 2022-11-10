import { body, param } from "express-validator";
import { ClientType } from "src/domain/notification-client";

export const CreateClientValidator = [
  body("email", "email should be an email").isEmail(),
  body("name", "name should be at least 4 characters long").isLength({
    min: 4,
  }),
  body("password", "Pasword should be at least 8 characters long").isLength({
    min: 8,
    max: 100,
  }),
  body("confirm_password").isLength({
    min: 8,
    max: 100,
  }),
  body("type", "type should be either 'Broadcast' or 'Single'").isIn([
    ClientType.BROADCAST,
    ClientType.SINGLE,
  ]),
];
