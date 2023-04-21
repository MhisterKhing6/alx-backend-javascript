export default function createReportObject(employeesList) {
    let ob = {
        'allEmployees' : {...employeesList},
        'getNumberOfDepartments' : (obj) => Object.keys(obj).length,
    }
    return ob;
}
