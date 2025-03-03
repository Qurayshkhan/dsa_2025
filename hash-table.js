// Object Data Structure
const data = {
    name: "Hassan khan",
    age: 24,
    email: "hk147471@gmail.com",
    getName: function () {
        return this.name;
    }
}

data.contact = "03043434434";

// for (key in data) {
//     console.log(data[key]);
// }

// console.log(data);

// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(Object.entries(data));


const map = new Map([
    ['name', "Hassan khan"],
    [true, "Boolean Value"],
    [100, "Numeric value"],
]);

map.set('color', 'green');
map.set('name', 'green');


map.set('users', [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
]);

// console.log(map);
// console.log(map.size);
// console.log(map.has(100));
// console.log(map.get('name'));
// map.clear();


// for (x of map) {
//     console.log(x);
// }

// map.delete('name');
map.forEach((value, key) => {
    console.log("value " + value, "key " + key);
});
