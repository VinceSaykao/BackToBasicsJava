
$(document).ready(onReady);

// This our app's STATE:
let employees = [];

// Callback function that our document.ready statement will execute:
function onReady() {
  console.log('🦄');
  // // Will GET the value of #unicorn-input:
  // let unicornVal1 = $('#unicorn-input').val();
  // // Will SET the value of #unicorn-input:
  // $('#unicorn-input').val('🦄🦄🦄🦄🦄');
  // // Will GET the value of #unicorn-input:
  // let unicornVal2 = $('#unicorn-input').val();

  // console.log('unicornVal1', unicornVal1);
  // console.log('unicornVal2', unicornVal2);


  renderEmployees();
  renderTotalMonthlySalary();
  $('#add-employee-button').on('click', onEmployeeAdd);
  $('body').on('click', '.delete-button', onEmployeeDelete);
}



// <RENDER FUNCTIONS> ---------------------------------------------
function renderEmployees() {
  $('#employee-rows').empty();
  for (let i = 0; i < employees.length; i++) {
    let annualSalaryAsCurrencyString = formatNumberAsMoney(employees[i].annualSalary);

    $('#employee-rows').append(`
      <tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td>${employees[i].employeeId}</td>
        <td>${employees[i].jobTitle}</td>
        <td>${annualSalaryAsCurrencyString}</td>
        <td><button data-id=${i} class="delete-button">Delete 🦄</button></td>
      </tr>
    `);
  }
}

function renderTotalMonthlySalary() {
  let totalMonthlySalary = calculateMonthlySalary();

  if (totalMonthlySalary > 20000) {
    // Add CSS class "red-text" to the salary span:
    $('#total-monthly-salary').addClass('red-text');
  } else {
    // Remove CSS class "red-text" from salary span:
    $('#total-monthly-salary').removeClass('red-text');
  }

  let formattedMonthlySalary = formatNumberAsMoney(totalMonthlySalary);

  $('#total-monthly-salary').empty();
  $('#total-monthly-salary').append(formattedMonthlySalary);
}
// </RENDER FUNCTIONS> --------------------------------------------



// <CLICK HANDLER FUNCTIONS> -------------------------------------
function onEmployeeAdd() {
  let newEmployee = {
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    employeeId: Number($('#employee-id').val()),
    jobTitle: $('#job-title').val(),
    annualSalary: Number($('#annual-salary').val())
  }
  employees.push(newEmployee);
  renderEmployees();
  renderTotalMonthlySalary();
  clearEmployeeInputs();
}

function onEmployeeDelete() {
  console.log($(this).data('id'));
  let employeeToDeleteIndex = $(this).data('id');
  employees.splice(employeeToDeleteIndex, 1);
  renderEmployees();
  renderTotalMonthlySalary();
}
// </CLICK HANDLER FUNCTIONS> ------------------------------------



// <HELPER FUNCTIONS> ---------------------------------------------
function calculateMonthlySalary() {
  // Variable that will store the totalAnnualSalary
  let totalAnnualSalary = 0;

  // Loop through employees array, add each employee's
  // salary value to ^that variable^
  for (let employee of employees) {
    // totalAnnualSalary = totalAnnualSalary + employee.annualSalary
    totalAnnualSalary += employee.annualSalary;
  }

  // Calculate monthlyAnnualSalary
  let monthlyAnnualSalary = totalAnnualSalary / 12;

  // RETURN monthlyAnnualSalary
  return monthlyAnnualSalary;
}

// Takes in an unrounded number, then uses a handy JS built-in
// feature to convert it to a rounded currency string:
function formatNumberAsMoney(moneyAsNumber) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  let moneyAsCurrencyString = formatter.format(moneyAsNumber);
  return moneyAsCurrencyString;
}

function clearEmployeeInputs() {
  $('#first-name').val('');
  $('#last-name').val('');
  $('#employee-id').val('');
  $('#job-title').val('');
  $('#annual-salary').val('');
}
// </HELPER FUNCTIONS> --------------------------------------------
