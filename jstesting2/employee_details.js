const employee = [
  {id : '1' , name : 'john doe' , departement : 'IT' , salary : '5000'},
  {id : '2' , name : 'whatever' , departement : 'info' , salary :'8000'},
  {id : '3' , name :'nameit' , departement : 'RH' , salary : '6000'},
  {id : '4' , name :'Raed' , departement : 'RH' , salary : '9000'},
];

function displayEmployees(){
  const totalEmployee = employee.map((employee ,index )=>
    `<p> ${employee.id} : ${employee.name} : ${employee.departement} : ${employee.salary} </p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployee;
}
function calculateTotalSalaries(){
  const totalSalaries = employee.reduce(( acc, employee)=>
  acc + parseInt(employee.salary) , 0);
  alert(`the total salaries of the employee is : ${totalSalaries}`);
}
function displayHREmployees(){
  const HrEmployes = employee.filter(employee=>
    employee.departement === "RH");
  const HrEmploye = HrEmployes.map((employee,index)=>
   `<p>${employee.name} : ${employee.departement} : ${employee.salary}</p>`
  ).join('');
  document.getElementById('employeesDetails').innerHTML = HrEmploye;

}
function findEmployeeById(employeeId){
  const employeeById = employee.filter(employee => employee.id === employeeId);
  if(employeeById){
  document.getElementById('employeesDetails').innerHTML = `<p>${employeeById.id} : ${employeeById.name} : ${employeeById.departement} : ${employeeById.salary}</p>`;
}
  else{
    document.getElementById('employeesDetails').innerHTML = "employee NOT found !";
  }
}