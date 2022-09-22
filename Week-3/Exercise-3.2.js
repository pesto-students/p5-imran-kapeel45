const person = {
    firstName: 'Kapil',
    lastName: 'Shinde',
    printName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
};

const person1 = {
    firstName : 'Rahul',
    lastName: 'Shinde',
}

function greeting(){
    console.log(`Hi, my firstname is ${this.firstName} and my last name is ${this.lastName}. Happy to meet you.`)
}

person.printName();
const printFullName = person.printName;

printFullName.call(person);


//borrowing function from other object
const bindPrint = person.printName.bind(person1);

bindPrint();

const greetingPerson = greeting.bind(person);

greetingPerson();

const greetingPerson1 = greeting.bind(person1);

greetingPerson1();

//bind also accept arguments

function greetingLang(lang){
    console.log(`${lang}: I am ${this.firstName}`);
}

const greetingLangPerson = greetingLang.bind(person, "en"); 
greetingLangPerson();

const greetingLangPerson1 = greetingLang.bind(person1, "hn"); 

greetingLangPerson1();


//call refer to this and calls the function immediately do not create copy of function 
greeting.call(person);

greeting.call(person1);

//call can also accept arguments
greetingLang.call(person,"en");
greetingLang.call(person1,"es");


//Apply() takes arguments in array

function greet(greeting, lang){
    console.log(`${greeting}, I am ${this.firstName} and i know ${lang}`);
}

greet.apply(person,['Hi','en']);
greet.apply(person1,['Hi','es']);
