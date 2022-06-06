class MyClass {
  lover;
  constructor(lover) {
    if (MyClass._instance) {
      return MyClass._instance;
    }
    MyClass._instance = this;
    this.lover = lover;
  }
}

i1 = new MyClass("newLover");
i2 = new MyClass("newLover2");

console.log(i1);
console.log(i2);
