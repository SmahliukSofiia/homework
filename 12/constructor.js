function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function Company() {
    this.stuff = [];
}

Company.levels = [
    {
        name: 'Junior',
        salaryFrom: 300,
        salaryTo: 500,
    }, {
        name: 'Middle',
        salaryFrom: 100000,
        salaryTo: 200000000,
    }, {
        name: 'Senior',
        salaryFrom: 1000000,
        salaryTo: 20000000000,
    }
]

Company.prototype.add = function (emp) {
    this.stuff.push({
        employee: emp,
        level: Company.levels[random(0, 2)]
    });
}

Company.prototype.remove = function (emp) {
    this.stuff.splice(this.stuff.findIndex(function (el) {
        return el.employee === emp;
}), 1)}

Company.prototype.getSalarySum = function() {
    return this.stuff.reduce(function(acc, cmp) {
        return acc + cmp.employee.salary;
    }, 0);
}

Company.prototype.getAccountInfo = function() {
    return this.stuff.map(function (developer) {
        return new AccountInfo(developer);
    })
}

Company.prototype.getResumeInfo = function (resumeEmp) {
    return new ResumeInfo(resumeEmp);
}

Company.prototype.filterTechnology = function(tech) {
    return this.stuff.filter(function (cmp) {
        return cmp.employee.technology === tech;
    })
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

Employee.tech = ['JS', 'PHP', '.Net', 'Java', 'Scala', 'C++', 'C', 'Swift', 'Delphi', 'HTML', 'DevOps', 'Administrator']
month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']

function AccountInfo(user) {
    this.name = user.name + ' ' + user.surname;
    this.tax = Math.round(user.salary * .05);
    this.salary = user.salary;
}

function ResumeInfo(emp) {
    this.name = emp.name + ' ' + emp.surname;
    this.technology = emp.technology;
    this.salary = emp.salary;
} 

var cmp = new Company();
