import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
let v = handleResponseFromAPI(promise);
promise.then((response) => {console.log("i was responded")},)
