// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects.forEach(element => {console.log(element)});
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student) {
        return `${this.name} debugs ${student.name}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const josh = new Instructor({
    name: 'Josh',
    location: 'Houston',
    age: 32,
    gender: 'male',
    favLanguage: 'C',
    specialty: 'Front-end',
    catchPhrase: `Get em good`
  });

  const cam = new Instructor({
    name: 'Cameron',
    location: 'Long Island',
    age: 35,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Derp`
  });

  const roenz = new Student({
    name: 'Roenz',
    location: 'San Francisco',
    age: 24,
    gender: 'male',
    className: `FSWPT4`,
    favSubjects: [`Biology`, `Python`, `Machine Learning`],
  });

  const rod = new Student({
    name: 'Rylan',
    location: 'American Canyon',
    age: 10,
    gender: 'male',
    className: `FSWPT4`,
    favSubjects: [`iPAD`, `Machine Learning`],
  });

  const roenz = new Student({
    name: 'Rufino',
    location: 'Manila',
    age: 21,
    gender: 'male',
    className: `FSWPT4`,
    favSubjects: [`Marketing`, `Watches`],
  });

  const joe = new ProjectManager({
    name: 'Joe',
    location: 'DBZ Poster',
    age: 30,
    gender: 'male',
    gradClassName: `CS8`,
    favInstructor: `Josh`
  });

  const chance = new ProjectManager({
    name: 'Chance',
    location: 'East Coast',
    age: 27,
    gender: 'male',
    gradClassName: `CS8`,
    favInstructor: `Cam`
  });
  
  const chance = new ProjectManager({
    name: 'Austen',
    location: 'Salt Lake City',
    age: 34,
    gender: 'male',
    gradClassName: `CS1`,
    favInstructor: `Diandra`
  });

  console.log(roenz.listsSubjects())



