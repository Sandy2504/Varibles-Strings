let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(userName);
console.log(getUserNameLength(userName));
console.log(getUserNameLength(userName) > 4);

// TODO: Implement the isString function

function isString(data) {
  return typeof data === "string";
}
console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
