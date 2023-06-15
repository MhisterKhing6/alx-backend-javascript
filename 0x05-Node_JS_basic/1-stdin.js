process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    console.log('Your name is: ', input.toString());
  }
});
process.on('SIGINT', () => {
  console.log('This important software is now closing');
});
