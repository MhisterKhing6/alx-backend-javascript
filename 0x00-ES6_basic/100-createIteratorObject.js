export default function createIteratorObject(report) { 
    return {
        [Symbol.iterator]() {
            const departments = report['allEmployees'];
            let combined_employees = [];
            for (const key of Object.keys(departments)) {
                combined_employees =[...combined_employees, ...departments[key]]
            }
            const total_employess =combined_employees.length;
            let start = 0;
            return {
                next() {
                    if (start < total_employess) {
                        return {
                            done:false, value: combined_employees[start++],
                        }                   
                }
                else {
                    return {
                        done:true,
                    }
                }
            }
        }
    }
}
}



