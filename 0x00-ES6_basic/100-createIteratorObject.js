export default function createIteratorObject (report) {
  return {
    [Symbol.iterator] () {
      const departments = report.allEmployees;
      let Combinedemployees = [];
      for (const key of Object.keys(departments)) {
        Combinedemployees = [...Combinedemployees, ...departments[key]];
      }
      const Totalemployess = Combinedemployees.length;
      let start = 0;
      return {
        next () {
          if (start < Totalemployess) {
            return {
              done: false, value: Combinedemployees[start++]
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  };
}
