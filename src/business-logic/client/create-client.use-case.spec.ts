import { CreateClientUseCase } from "./create-client.use-case";

describe("Create Client use case", () => {
  const useCase = new CreateClientUseCase();

  it("should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("should have a _ repo", () => {
    expect(useCase).toHaveProperty("_");
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
