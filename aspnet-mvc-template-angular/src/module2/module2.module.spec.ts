import { Module2Module } from './module2.module';

describe('Module2Module', () => {
  let module2Module: Module2Module;

  beforeEach(() => {
    module2Module = new Module2Module();
  });

  it('should create an instance', () => {
    expect(module2Module).toBeTruthy();
  });
});
