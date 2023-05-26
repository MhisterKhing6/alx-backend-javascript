import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
let v = handleResponseFromAPI(promise);

console.log(v.resolves())

