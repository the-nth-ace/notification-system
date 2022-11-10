import { GetManyClientsUseCase } from "./get-many-clients.use-case";
import { ClientTestRepository } from "../../domain/notification-client/client.test.repository";

describe("Get Many Clients use case", () => {
  const repo = new ClientTestRepository();
  const useCase = new GetManyClientsUseCase(repo);

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _clientRepo repo", () => {
    expect(useCase).toHaveProperty("_clientRepo");
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
