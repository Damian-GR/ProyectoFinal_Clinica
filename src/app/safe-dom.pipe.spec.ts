import { SafeDOMPipe } from './safe-dom.pipe';

describe('SafeDOMPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeDOMPipe();
    expect(pipe).toBeTruthy();
  });
});
