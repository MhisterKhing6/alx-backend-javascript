export default function createReportObject (employeesList) {
  const ob = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (obj) => Object.keys(obj).length
  };
  return ob;
}
