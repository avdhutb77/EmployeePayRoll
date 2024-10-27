window.onload = () => {
    const form = document.getElementById("emp-form");

    
    form.addEventListener("submit", (event) => { 

        // Get employee details
        const name = document.getElementById("emp-name").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const profile = document.querySelector('input[name="profile"]:checked').value;
        const salary = document.getElementById("salary").value;
        const departments = [];
        document.querySelectorAll('input[name="department"]:checked').forEach(dept => {
            departments.push(dept.value);
        });
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const startDate = `${day}-${month}-${year}`;
        const notes = document.getElementById("notes").value;

        // Create an employee object
        const employeeData = {
            name: name,
            gender: gender,
            profileImage: profile,
            salary: salary,
            departments: departments, 
            startDate: startDate,
            notes: notes
        };

        // Store employee data in localStorage
        if(localStorage.length==0){
            let employees = [];
        }else{
            employees=JSON.parse(localStorage.getItem("employees")); 
        }
        
        employees.push(employeeData);
        localStorage.setItem("employees", JSON.stringify(employees));

        form.reset();
    });

    
    document.getElementById("resetButton").addEventListener("click", () => {
        form.reset();
    });

    
    document.getElementById("cancelBtn").addEventListener("click", () => {
        form.reset();  
        window.location.href = "../Pages/EmployeePayrollDashboard.html"; 
    });
};

