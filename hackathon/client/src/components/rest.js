export function getEmployees() {
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("http://localhost:5000/people", myInit);
    return promise.then((response) => {
        return response.json();
    });
}