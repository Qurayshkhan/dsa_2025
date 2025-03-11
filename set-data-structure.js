let set = new Set(["hk", "SM", "hk"]);
let items = ["hk", "SM", "hk"];

set.add("bruce");
set.delete("hk");
// set.add({ email: "hassan@gmail.com" });

console.log(set.has("hk"));
// set.clear();

// console.log(set.values());
console.log(set.entries());
console.log(set); // remove duplicates values.
console.log(items); // print as it is array items.