// script.js

document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');
    const aboutBtn = document.getElementById('aboutBtn');
    const departmentButtons = document.querySelectorAll('.department-btn');
    const employeeList = document.getElementById('employee-list');
    const employeeDetails = document.getElementById('employee-details');
    const floorSelect = document.getElementById('floor-select');

    // Employee Data (Sample)
    const employees = {
        CAS: {
            1: ["Alice", "Bob"],
            2: ["Carol", "Dave"]
        },
        CIT: {
            1: ["Eve", "Frank"],
            2: ["Grace", "Heidi"]
        },
        COENG: {
            1: ["Ivan", "Judy"],
            2: ["Mallory", "Niaj"]
        },
        COED: {
            1: ["Olivia", "Peggy"],
            2: ["Sybil", "Trent"]
        },
        CONHS: {
            1: ["Victor", "Wendy"],
            2: ["Xander", "Yara"]
        }
    };

    // Show About Section
    aboutBtn.addEventListener('click', () => {
        aboutSection.classList.toggle('hidden');
    });

    // Display Employees on Department and Floor Selection
    departmentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const department = button.dataset.department;
            employeeList.classList.remove('hidden');
            populateEmployeeList(department, floorSelect.value);
            floorSelect.addEventListener('change', () => {
                populateEmployeeList(department, floorSelect.value);
            });
        });
    });

    function populateEmployeeList(department, floor) {
        employeeDetails.innerHTML = "";
        if (employees[department] && employees[department][floor]) {
            employees[department][floor].forEach(employee => {
                const li = document.createElement('li');
                li.textContent = employee;
                employeeDetails.appendChild(li);
            });
        } else {
            employeeDetails.innerHTML = "<li>No employees found</li>";
        }
    }
});
