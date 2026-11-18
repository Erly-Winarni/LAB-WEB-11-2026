async function tes() {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(respons);
}

tes();