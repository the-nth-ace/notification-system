import { CreateClientUseCase } from "./create-client.use-case";
import { CreateClientRequest } from "./requests/create-client.request";
import { ClientTestRepository, ClientType } from "@domain/notification-client/";

describe("Create Client use case", () => {
  const repo = new ClientTestRepository();
  const dto: CreateClientRequest = {
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    type: ClientType.SINGLE,
  };
  const useCase = new CreateClientUseCase(repo, dto);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _clientRepo", () => {
    expect(useCase).toHaveProperty("_clientRepo");
  });

  it("should have a dto property", () => {
    expect(useCase).toHaveProperty("dto");
  });

  it("should have have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  //   it("should call call _ on execute", () => {
  //     useCase.execute();

  //     expect().toHaveBeenCalled();
  //   });

  //   it("should return response", () => {
  //     expect(useCase.execute()).toBeInstanceOf();
  //   });
});
