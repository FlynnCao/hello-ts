"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }
// optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
let langs = ["Java", "C++", "GO"];
console.log(langs === null || langs === void 0 ? void 0 : langs[0]);
console.log(langs === null || langs === void 0 ? void 0 : langs[3]);
// Optional Call
let log = (message) => {
    console.log("Hello ", message);
};
let log2 = null;
log === null || log === void 0 ? void 0 : log("a");
log2 === null || log2 === void 0 ? void 0 : log2("a");
//# sourceMappingURL=OptionalChaining.js.map