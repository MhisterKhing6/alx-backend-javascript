export default function iterateThroughObject (reportWithIterator) {
  let output = '';
  for (const employee of reportWithIterator) {
    output += employee + ' | ';
  }
  return output.slice(0, output.length - 2);
}
