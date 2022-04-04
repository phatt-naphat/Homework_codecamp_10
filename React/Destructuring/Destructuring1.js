let user = {
    name: "John",
    years: 30
};

let { name: name, years: age, isAdmin = false } = user;
