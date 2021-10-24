class Domino implements Printable {
  side1: number;
  side2: number;

  constructor(sideA: number, sideB: number) {
    this.side1 = sideA;
    this.side2 = sideB;
  }

  printAllFields() {
    console.log(`sideA: ${this.side1}, sideB: ${this.side2}`);
  }
}

class Todo implements Printable {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, done: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = done;
  }

  private isCompleted() {
    if (this.isDone === true) {
      return "yes";
    } else return "no";
  }

  printAllFields(): void {
    console.log(
      `The task is to ${this.task}. This is ${
        this.priority
      } priority. Has it been completed? ${this.isCompleted()}`
    );
  }
}

interface Printable {
  printAllFields();
}

let domino1 = new Domino(3, 2);
let todo1 = new Todo("Buy milk", "high", true);

let dominoes: Domino[] = [domino1];
let todos: Todo[] = [todo1];

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
