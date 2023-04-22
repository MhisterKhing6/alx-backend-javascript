export default function handleResponseFromAPI (promise) {
  let endValue = null;
  promise.then((response) => {
    console.log('I was successful');
    endValue = 'love';
    return true;
  });
  return endValue;
}
