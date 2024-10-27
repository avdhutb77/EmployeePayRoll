const { response } = require("express")

let empList = []
$(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/EmployeeList",
        success: (response) => {
            console.log("Emp List: ", response)
            empList = response
        },
        error: (error) => {
            console.log("Error: ", error);
        },  
    })  
})


$.ajax({
    type: "GET",
    url: 'http://localhost:3000/EmployeeList/${id}',
    success: (response) => {
        console.log("Emp List: ", response)
        empList = response
    },
    error: (error) => {
        console.log("Error: ", error);
    },  
})  



$.ajax({
    type:"PUT",
    url:'http://localhost:3000/EmployeeList/${id}',
    // data:JSON.stringify({
        
    // })
success: (response)=>{
    console.log("Data:",response)
},
error: (error) => {
    console.log("Error: ", error);
}, 
})


$.ajax({
    type: "DELETE",
    url: `http://localhost:3000/EmployeeList/${id}`, 
    success: function(response) {
        console.log("Employee deleted successfully:", response);
        
    },
    error: function(error) {
        console.log("Error deleting employee:", error);
    }
});




$('#fetchBtn').on('click', function(e) {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/EmployeeList",
        data: JSON.stringify({
            "name": "VIRAT KOHLI",
            "department": ["111"],
            "gender": "xcvbcnv",
            "salary": "xzcvb",
            "data": "11zxcv1",
            "notes": "111",
            "profile": "./Assets/profile3.png"
        }),
        success: (response) => {
            console.log("Data: ", response)
        },
        error: (error) => {
            console.log("Error: ", error);
        },  
    })
    e.preventDefault()
})
