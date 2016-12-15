
import { Counter } from './counter';

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it('should increase value of counter when incremented', () => {
    expect(counter.value).toEqual(0);
    counter.increment();
    expect(counter.value).toEqual(1);
  });

  it('should decrease value of counter when deccremented', () => {
    expect(counter.value).toEqual(0);
    counter.decrement();
    expect(counter.value).toEqual(-1);
  });
});
