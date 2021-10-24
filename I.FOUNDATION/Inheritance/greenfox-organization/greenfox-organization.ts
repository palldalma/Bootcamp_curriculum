export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female"
  ) {
    this.name = name;
    this.age = Math.floor(age);
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal() {
    console.log(`My goal is to live for the moment.`);
  }
}

let person1 = new Person("Jane Doe", 30, "female");

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(
    name: string,
    age: number,
    gender: string,
    previousOrganization: string = "The School of Life"
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  introduce() {
    console.log(
      `My name is ${this.name}. I am a ${this.age}-year-old ${this.gender} from ${this.previousOrganization} who has already skipped ${this.skippedDays} days of the course. `
    );
  }

  getGoal() {
    console.log(`My goal is to become a junior software developer`);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

export class Mentor extends Person {
  level: string;

  constructor(name, age, gender, level = "intermediate") {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log(`My goal is to educate brilliant junior software developers.`);
  }

  introduce() {
    console.log(
      `My name is ${this.name}. I am a ${this.age}-year-old ${this.gender}, ${this.level} mentor.`
    );
  }
}

export class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  constructor(name, age, gender, company = "Google") {
    super(name, age, gender);
    this.company = company;
  }

  introduce() {
    console.log(
      `My name is ${this.name}. I am a ${this.age}-year-old ${this.gender}, who represents ${this.company} and hired ${this.hiredStudents} student(s) so far.`
    );
  }

  getGoal() {
    console.log("My goal is to hire brilliant junior software developers.");
  }

  hire() {
    this.hiredStudents++;
  }
}

export class Cohort {
  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name) {
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
    );
  }
}
