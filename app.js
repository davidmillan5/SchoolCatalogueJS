class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this.level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(
      `${name} educates ${numberOfStudents} students at the ${level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randInt];
  }
}
