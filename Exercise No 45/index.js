function createcar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar = createcar("Mercedes", "Benz B class", { color: "black", year: 2023 });
console.log(mycar);
export {};
