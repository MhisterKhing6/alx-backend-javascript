const fs = require('fs')

const { parse } = require('csv-parse');

function countstudents(path) {
  let count = 0;
  let cs = [];
  let sw = [];
  fs.createReadStream(path).pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('data', (row) => {
      if (row.includes('CS')) {
        cs.push(row[0]);
      }
      if (row.includes('SWE')) {
        sw.push(row[0]);
      }
      count += 1;
    })
    .on('end', () => {
      console.log('Number of students: ,', count);
      console.log(`Number of students in cs: ${cs.length}. List: ${cs}`);
      console.log(`Number of students in cs: ${sw.length}. List: ${sw}`);
    });
}

countstudents('./database.csv');
