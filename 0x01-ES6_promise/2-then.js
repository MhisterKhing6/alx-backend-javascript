export default function handleResponseFromAPI(promise) {
  promise.then((response) => {
    return {

      status: 200,
      body: 'success'

    };
  }, (reject) => {
    return new Error();
  });
  console.log('Got a response from the API');
}
