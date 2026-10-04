// QUESTION 1: Create Student Objects
const student1 = [
    {
        id: 1,
        name: "Raymond Ehi",
        age: 27,
        grades: [85, 92, 78]
    },
    {
        id: 2,
        name: "Alice Johnson",
        age: 20,
        grades: [72, 88, 91]
    },
    {
        id: 3,
        name: "David Smith",
        age: 22,
        grades: [55, 64, 58]
    },
    {
        id: 4,
        name: "Sarah Williams",
        age: 21,
        grades: [95, 89, 93]
    },
    {
        id: 5,
        name: "Michael Brown",
        age: 23,
        grades: [45, 52, 48]
    }
];
console.log("Students:", students);

// QUESTION 2: Calculate Averages
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    return Number(average.toFixed(2));
}
console.log("Average for first student:", calculateAverage(students[0].grades));
const studentsWithAverage = students.map(student => {
    return {
        ...student,
        average: calculateAverage(student.grades)
    };
});
console.log("Students with averages:", studentsWithAverage);

// QUESTION 3: Get Passing Students
function getPassingStudents(students) {
    return students.filter(student => student.average >= 60);
}
const passingStudents = getPassingStudents(studentsWithAverage);
console.log("Passing Students:", passingStudents);

// QUESTION 4: Process Students with a Callback
function processStudents(students, callback) {
    return students.map(callback);
}

// Add Lettter Grade 
function addLetterGrade(student) {
    let letterGrade;
    if (student.average >= 90) {
        letterGrade = 'A';
    } else if (student.average >= 80) {
        letterGrade = 'B';
    } else if (student.average >= 70) {
        letterGrade = 'C';
    } else if (student.average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return {
        ...student,
        letterGrade: letterGrade
    };
}

// Add Pass/Fail Status
function addStatus(student) {
    const status = student.average >= 60 ? 'Pass' : 'Fail';
    return {
        ...student,
        status: status
    };
}

const studentsWithLetterGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log("Students with Letter Grades:", studentsWithLetterGrades);
const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log("Students with Status:", studentsWithStatus);

