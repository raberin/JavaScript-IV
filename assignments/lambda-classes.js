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
        //Creating a random number
        let randomNum = Math.floor(Math.random() * 10)
        randomNum > 5 ? randomNum *= 1 : randomNum *= -1;
        if(randomNum > 1){
            console.log(`${student.name} receives an additional ${randomNum} points to his grade on ${subject} `)
        } else {
            console.log(`${student.name} receives a deduction of ${randomNum} points to his grade on ${subject} `)
        }
        randomNum += student.grade
        console.log(`${student.name}'s grade is now ${student.grade} `)
    }
    
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.floor(Math.random() * 100)
    }
    listsSubjects() {
        return this.favSubjects.forEach(element => {console.log(element)});
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade > 70){
            return `${this.name} has a score over 70% he has graduated from Lambda School!`
        } else {
            return `${this.name} has a score less than 70% he must go to async!`
        }
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
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
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

  const rylan = new Student({
    name: 'Rylan',
    location: 'American Canyon',
    age: 10,
    gender: 'male',
    className: `FSWPT4`,
    favSubjects: [`iPad`, `Machine Learning`],
  });

  const rufino = new Student({
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
  
  const austen = new ProjectManager({
    name: 'Austen',
    location: 'Salt Lake City',
    age: 34,
    gender: 'male',
    gradClassName: `CS1`,
    favInstructor: `Diandra`
  });

console.log(josh.demo(`Python`));
console.log(cam.grade(roenz,`Javascript`));
console.log(roenz.PRAssignment(`Javascript`));
console.log(rylan.sprintChallenge(`iPad`));
console.log(austen.standUp(`FSWPT4`));
console.log(chance.debugsCode(roenz, `classes`))
console.log(roenz.graduate())
console.log(roenz.grade)