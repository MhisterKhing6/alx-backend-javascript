const http = require('http');
const fs = require('fs');
const { parse } = require('csv-parse');

const hostname = '127.0.0.1';
const port = 50004;

let stu = '';
function countstudents(path) {
  let count = 0;
  const cs = [];
  const sw = [];
  let t = '';
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
      t += `Number of students: ${count}\n`;
      t += `Number of students in cs: ${cs.length}\n`;
      t += `Number of students in sw: ${sw.length}\n`;
    });
  return t;
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/students') {
    res.end(`This is the list of our ${process.argv[2]} students\n${countstudents(process.argv[2])}`);
  } else {
    res.end('Just trying');
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});
