import $ from 'jquery';

$(document).ready(function () {


    class Student {
        fullName: string;
        constructor(public firstName: string, public middleInitial: string, public lastName: string) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    interface Person {
        firstName: string;
        lastName: string;
    }
    function greeter(person: Person) {
        console.log("Hello, " + person.firstName + " " + person.lastName);
    }
    let user = new Student("Jane", "M.", "User");
    greeter(user)



















})