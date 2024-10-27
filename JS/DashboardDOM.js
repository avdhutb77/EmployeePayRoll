
$(document).ready(function () {

    const employees = JSON.parse(localStorage.getItem("employees"));

    // Loop through employee data
    employees.forEach((employee, index) => {
        const {name,gender, departments, salary, startDate } = employee;

        //new table row
        const newRow = `
                    <tr>
                        <td> ${name}</td>
                        <td>${gender}</td>
                        <td>${departments.join(", ")}</td>
                        <td>${salary}</td>
                        <td>${startDate}</td>
                        <td>
                            <button class="delete-btn" data-index="${index}">
                                <img src="../../assets/delete-pic.png" alt="Delete" />
                            </button>
                            <button class="edit-btn" data-index="${index}">
                                <img src="../../assets/edit-pic.png" alt="Edit" />
                            </button>
                        </td>
                    </tr>
                `;

        $("#table-body").append(newRow);
    });

    // Handle Delete Button Click
    $(document).on("click", ".delete-btn", function () {
        const index = $(this).attr("data-index");
        employees.splice(index, 1); 
        localStorage.setItem("employees", JSON.stringify(employees));  // Update localStorage
        location.reload();  
    });
    $(document).on("click", ".edit-btn", function () {
        const index = $(this).attr("data-index");
        const employeeToEdit = employees[index];

        // Store the employee data in localStorage for editing
        localStorage.setItem("editEmployee", JSON.stringify(employeeToEdit));

        // Redirect to the registration page
        window.location.href = "../Pages/EmployeePayrollRegister.html";
    });

    

});