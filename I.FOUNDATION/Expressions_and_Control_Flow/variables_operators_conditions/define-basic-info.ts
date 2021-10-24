// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean
export {};

class Person {
  name: string = "Dalma Pall";
  age: number = 25;
  height: string = "173 cm";
  married: boolean = false;

  getInfo() {
    console.log(
      `name: ${this.name}\nage:${this.age}\nheight:${this.height}\nmarried:${this.married}`
    );
  }
}

let dalma = new Person();
dalma.getInfo();
