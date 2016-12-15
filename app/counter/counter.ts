
export class Counter {
  _count = 0;

  increment() {
    this._count++;
  }

  decrement() {
    this._count--;
  }

  get value() {
    return this._count;
  }
}
