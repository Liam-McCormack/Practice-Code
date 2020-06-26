
/* 
//A CLASS
class Dog {
    constructor(name) { //Constructer method creates an Object with the class name and a 'name' argument.
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
const halley = new Dog('Halley'); //Creating a new Object in the Dog class

console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console */


/*
//CREATING NEW INSTANCES (AN OBJECT) WITHIN THE CLASS
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics'); */


/* //CALLING THE METHODS ON AN INSTANCE OF THE CLASS (CALLING ON CURRY INSTANCE OF SURGEON CLASS)
class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
  surgeonCurry.takeVacationDays(5);
  console.log(surgeonCurry._remainingVacationDays); */



/* //OWN PRACTICE
class Pokemon {
    constructor(name, type) {
         this._name = name
         this._type = type
        this._level = 1
    }

    get name() { //Getters CANNOT have the same name as Object properties
        return this._name
     }

    get type() {
        return this._type
    }

    levelUp() {
        this._level++
     }

    get info() {
        return `This is ${this._name} and it is a ${this._type} Pokemon at Level ${this._level}.`
    }
};

const gengar = new Pokemon ('Gengar', 'Psychic'); //Creating a new Pokemon object or 'instance'
const pikachu = new Pokemon ('Pikachu', 'Electric');
const entei = new Pokemon ('Entei', 'Legendary');


console.log(gengar.name)
console.log(pikachu.type)
console.log(entei.info) //Entei level 1

entei.levelUp();
entei.levelUp();
entei.levelUp();

console.log(entei.info) //Entei level 4 */


/*
//CREATING A PARENT CLASS (SUPERRCLASS)

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    static generatePassword() { //STATIC METHOD, CAN ONLY BE CALLED ON THE 
        const randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber;
      }
  }

//NURSE SUBCLASS USING INHERITED PROPERTIES FROM ABOVE

class Nurse extends HospitalEmployee {
  constructor(name, certifications) { //certifications unique to Nurse so only called in the Nurse Class constructor
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification); //Takes an argument and adds it to the this._certifations array
  } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])
console.log(nurseOlynyk._certifications);
nurseOlynyk.takeVacationDays(5); //Callin inherited method from HospitalEmployee on new instance
console.log(nurseOlynyk.remainingVacationDays); //Prints 15

nurseOlynyk.addCertification('Genetics'); //Using the unique Nurse method and pushing argument to array
console.log(nurseOlynyk.certifications); //Updated this._certifications array


console.log(HospitalEmployee.generatePassword()); 

//NEW DOCTOR INSTANCE INHERITS FROM HOSPITAL EMPLOYEE CLASS

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }
}

const doctorWho = new Doctor('Who', true);
console.log(doctorWho);
doctorWho.takeVacationDays(12);
console.log(doctorWho.remainingVacationDays); */

