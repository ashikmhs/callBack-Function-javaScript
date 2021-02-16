// Pretending that this response is coming from the server

const students = [
    {name: "Ashik", subject: "CSE"},
    {name: "Sifat", subject: "BBA"}
]

function enrollStudent (student,callback){
   setTimeout(function() {
    students.push(student);
    console.log("student has pushed");
    callback();
   }, 4000);
}

function getStudent (){
    setTimeout(function() {
        let str = "";
    students.forEach(function(student){
        str += `<li>${student.name}</li>`
    });
    document.getElementById("id").innerHTML = str;
    console.log("students have been fetched");
    }, 1000);
}

let newStudent = {name: "Rahim", subject: "Eng"};
enrollStudent(newStudent,getStudent);