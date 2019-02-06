var company = new Company();

for (let index = 0; index < 10; index++) {
    company.add(
        new Employee (
            index + 1,
            'Random ' + index,
            'Random Sur ' + index,
            random(1000, 5000),
            Employee.tech[random(0, Employee.tech.length - 1)],
            random(1, 30) + ' ' + month[random(0, month.length - 1)] + ' ' + random(1994, 2019)
        )
    )
}

var employee = new Employee (
    1,
    'Random 1',
    'Random Sur 1',
    random(1000, 5000),
    Employee.tech[random(0, Employee.tech.length - 1)],
    random(1, 30) + ' ' + month[random(0, month.length - 1)] + ' ' + random(1994, 2019)
)

var accInfo = company.getAccountInfo();
var salarySum = company.getSalarySum();
// var empTech = company.getEmployeeTechnology();

var resume = company.getResumeInfo();

console.log(company, resume)
