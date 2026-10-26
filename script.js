// ==========================================
// EMPLOYEE MANAGEMENT SYSTEM
// Date Methods + Array Higher-Order Methods
// ==========================================


// ------------------------------------------
// EMPLOYEE DATA
// ------------------------------------------

const employees = [
    {
        id: 101,
        name: "Arun",
        department: "Development",
        salary: 45000,
        joiningDate: "2024-06-10",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 102,
        name: "Priya",
        department: "Testing",
        salary: 40000,
        joiningDate: "2025-01-15",
        skills: ["Java", "Selenium"]
    },
    {
        id: 103,
        name: "Karthik",
        department: "Development",
        salary: 55000,
        joiningDate: "2023-03-20",
        skills: ["JavaScript", "React", "CSS"]
    },
    {
        id: 104,
        name: "Divya",
        department: "HR",
        salary: 35000,
        joiningDate: "2025-08-05",
        skills: ["Communication", "Excel"]
    },
    {
        id: 105,
        name: "Rahul",
        department: "Development",
        salary: 60000,
        joiningDate: "2022-11-12",
        skills: ["JavaScript", "React", "Node"]
    }
];


// ==========================================
// DATE METHODS
// ==========================================

const today = new Date();

console.log("========== DATE METHODS ==========");


// 1. Current date
console.log("Current Date:", today);


// 2. getDate()
console.log("Date:", today.getDate());


// 3. getMonth()
// Month starts from 0
// January = 0
// December = 11
console.log("Month:", today.getMonth());


// 4. getFullYear()
console.log("Year:", today.getFullYear());


// 5. getDay()
// Sunday = 0
// Monday = 1
// Saturday = 6
console.log("Day:", today.getDay());


// 6. getHours()
console.log("Hours:", today.getHours());


// 7. getMinutes()
console.log("Minutes:", today.getMinutes());


// 8. getSeconds()
console.log("Seconds:", today.getSeconds());


// 9. getTime()
console.log("Timestamp:", today.getTime());


// 10. toString()
console.log("String:", today.toString());


// 11. toDateString()
console.log("Date String:", today.toDateString());


// 12. toTimeString()
console.log("Time String:", today.toTimeString());


// 13. toLocaleDateString()
console.log(
    "Local Date:",
    today.toLocaleDateString()
);


// 14. toLocaleTimeString()
console.log(
    "Local Time:",
    today.toLocaleTimeString()
);


// 15. toISOString()
console.log(
    "ISO Date:",
    today.toISOString()
);


// ==========================================
// SET DATE METHODS
// ==========================================

const customDate = new Date();


// 16. setDate()
customDate.setDate(25);
console.log("After setDate:", customDate);


// 17. setMonth()
customDate.setMonth(5);
console.log("After setMonth:", customDate);


// 18. setFullYear()
customDate.setFullYear(2027);
console.log("After setFullYear:", customDate);


// 19. setHours()
customDate.setHours(10);
console.log("After setHours:", customDate);


// ==========================================
// DATE DIFFERENCE
// ==========================================

console.log("========== DATE CALCULATION ==========");

const joiningDate = new Date("2024-06-10");

const difference = today - joiningDate;

const milliseconds = difference;

const seconds = milliseconds / 1000;

const minutes = seconds / 60;

const hours = minutes / 60;

const days = hours / 24;

const years = days / 365;

console.log("Milliseconds:", milliseconds);

console.log("Seconds:", seconds);

console.log("Minutes:", minutes);

console.log("Hours:", hours);

console.log("Days:", Math.floor(days));

console.log("Approx Years:", Math.floor(years));


// ==========================================
// ARRAY HIGHER-ORDER METHODS
// ==========================================

console.log("========== ARRAY METHODS ==========");


// ------------------------------------------
// 20. forEach()
// ------------------------------------------

console.log("Employee Names:");

employees.forEach(function(employee) {

    console.log(employee.name);

});


// ------------------------------------------
// 21. map()
// ------------------------------------------

const employeeNames = employees.map(function(employee) {

    return employee.name;

});

console.log("Names:", employeeNames);


// ------------------------------------------
// 22. filter()
// ------------------------------------------

const developers = employees.filter(function(employee) {

    return employee.department === "Development";

});

console.log("Developers:", developers);


// ------------------------------------------
// 23. find()
// ------------------------------------------

const employee = employees.find(function(employee) {

    return employee.id === 103;

});

console.log("Found Employee:", employee);


// ------------------------------------------
// 24. findIndex()
// ------------------------------------------

const employeeIndex = employees.findIndex(function(employee) {

    return employee.name === "Priya";

});

console.log("Priya Index:", employeeIndex);


// ------------------------------------------
// 25. some()
// ------------------------------------------

const highSalaryEmployee = employees.some(function(employee) {

    return employee.salary > 50000;

});

console.log(
    "Salary above 50000:",
    highSalaryEmployee
);


// ------------------------------------------
// 26. every()
// ------------------------------------------

const allAbove30000 = employees.every(function(employee) {

    return employee.salary > 30000;

});

console.log(
    "Everyone earns above 30000:",
    allAbove30000
);


// ------------------------------------------
// 27. reduce()
// ------------------------------------------

const totalSalary = employees.reduce(function(total, employee) {

    return total + employee.salary;

}, 0);

console.log("Total Salary:", totalSalary);


// ------------------------------------------
// 28. reduceRight()
// ------------------------------------------

const namesRight = employees.reduceRight(function(result, employee) {

    return result + employee.name + " ";

}, "");

console.log("Names Right:", namesRight);


// ------------------------------------------
// 29. sort()
// ------------------------------------------

const salarySorted = [...employees].sort(function(a, b) {

    return b.salary - a.salary;

});

console.log("Salary Sorted:", salarySorted);


// ==========================================
// OTHER ARRAY METHODS
// ==========================================


// ------------------------------------------
// 30. includes()
// ------------------------------------------

const departments = employees.map(function(employee) {

    return employee.department;

});

console.log(
    "Has HR:",
    departments.includes("HR")
);


// ------------------------------------------
// 31. indexOf()
// ------------------------------------------

console.log(
    "Development Index:",
    departments.indexOf("Development")
);


// ------------------------------------------
// 32. slice()
// ------------------------------------------

const firstThree = employees.slice(0, 3);

console.log(
    "First Three Employees:",
    firstThree
);


// ------------------------------------------
// 33. concat()
// ------------------------------------------

const newEmployees = [
    {
        id: 106,
        name: "Suresh",
        department: "Support",
        salary: 38000,
        joiningDate: "2026-01-10",
        skills: ["Communication"]
    }
];

const allEmployees = employees.concat(newEmployees);

console.log(
    "All Employees:",
    allEmployees
);


// ------------------------------------------
// 34. reverse()
// ------------------------------------------

const reversedEmployees = [...employees].reverse();

console.log(
    "Reversed:",
    reversedEmployees
);


// ==========================================
// 35. flatMap()
// ==========================================

const allSkills = employees.flatMap(function(employee) {

    return employee.skills;

});

console.log(
    "All Skills:",
    allSkills
);


// ==========================================
// PRACTICAL DATE + ARRAY COMBINATION
// ==========================================

console.log("========== PRACTICAL EXAMPLES ==========");


// Employees who joined after 2024

const recentEmployees = employees.filter(function(employee) {

    const joining = new Date(employee.joiningDate);

    return joining.getFullYear() >= 2025;

});

console.log(
    "Recently Joined Employees:",
    recentEmployees
);


// ------------------------------------------
// Calculate employee experience
// ------------------------------------------

const employeeExperience = employees.map(function(employee) {

    const joining = new Date(employee.joiningDate);

    const difference = today - joining;

    const days = difference / (1000 * 60 * 60 * 24);

    const years = Math.floor(days / 365);

    return {
        name: employee.name,
        experience: years + " years"
    };

});

console.log(
    "Employee Experience:",
    employeeExperience
);


// ------------------------------------------
// Highest Salary
// ------------------------------------------

const highestSalaryEmployee = employees.reduce(
    function(highest, employee) {

        return employee.salary > highest.salary
            ? employee
            : highest;

    }
);

console.log(
    "Highest Salary Employee:",
    highestSalaryEmployee
);


// ------------------------------------------
// Average Salary
// ------------------------------------------

const averageSalary =
    totalSalary / employees.length;

console.log(
    "Average Salary:",
    averageSalary
);


// ------------------------------------------
// Check JavaScript Developers
// ------------------------------------------

const javascriptDevelopers = employees.filter(
    function(employee) {

        return employee.skills.includes("JavaScript");

    }
);

console.log(
    "JavaScript Developers:",
    javascriptDevelopers
);