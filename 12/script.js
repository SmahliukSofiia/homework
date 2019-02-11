var company = new Company();

var emp = new Employee (
    1,
    'Random 1',
    'Random Sur 1',
    random(1000, 5000),
    Employee.tech[random(0, Employee.tech.length - 1)],
    random(1, 30) + ' ' + month[random(0, month.length - 1)] + ' ' + random(1994, 2019)
)

var emp2 = new Employee (
    2,
    'Random 1',
    'Random Sur 1',
    random(1000, 5000),
    Employee.tech[random(0, Employee.tech.length - 1)],
    random(1, 30) + ' ' + month[random(0, month.length - 1)] + ' ' + random(1994, 2019)
)

company.add(emp)
company.add(emp2)

var accInfo = company.getAccountInfo();
var salarySum = company.getSalarySum();

var resume = company.getResumeInfo();
var empTech = company.filterTechnology('C');

console.log(company, accInfo)
