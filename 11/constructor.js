function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function Company() {
    this.stuff = [];
}

Company.prototype.add = function (emp) {
    this.stuff.push(emp);
}

Company.prototype.remove = function (emp) {
    this.stuff.splice(this.stuff.findIndex(function (el) {
        return el === emp;
    }), 1)
}

Company.prototype.getSalarySum = function() {
    return this.stuff.reduce(function(acc, next) {
        return acc + next.salary;
    }, 0);
}

Company.prototype.getAccountInfo = function() {
    return this.stuff.map(function (developer) {
        return new AccountInfo(developer);
    })
}

Company.prototype.getResumeInfo = function () {
    return new ResumeInfo(employee);
}

function Employee(id, name, surname, salary, technology, startDate) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.technology = technology;
    this.startDate = startDate;
    this.isOccupied = false;
}

Employee.tech = ['JS', 'PHP', '.Net', 'Java', 'Scala', 'C++', 'C', 'Swift']
month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']

function AccountInfo(user) {
    this.name = user.name + ' ' + user.surname;
    this.tax = Math.round(user.salary * .05);
    this.salary = user.salary;
}

function ResumeInfo(employee) {
    this.name = employee.name + ' ' + employee.surname;
    this.technology = employee.technology;
    this.salary = employee.salary;
} 

/* Company.prototype.getEmployeeTechnology = function(user) {
    return new EmployeeTechnology(user);
}

function EmployeeTechnology() {
    this.technology;
} */

var cmp = new Company();
var emp = new Employee();
cmp.add(emp);
cmp.remove(emp); 
