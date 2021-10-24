// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  learn() {
    console.log(this.name + ' is learning something new');
  }

  question(teacher: Teacher) {
    teacher.answer();
  }
}

class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  teach(student: Student) {
    student.learn();
  }

  answer() {
    console.log(this.name + ' is answering the question');
  }
}

let krisztian = new Student('Krisztián');

let dalma = new Teacher('Dalma');

krisztian.question(dalma);

dalma.teach(krisztian);

//prints: Dalma is answering the question, Krisztián is learning something new
