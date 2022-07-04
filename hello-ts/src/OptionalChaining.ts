type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);

// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }

// optional property access operator
console.log(customer?.birthday.getFullYear());
console.log(customer2?.birthday?.getFullYear());

// Optional element access operator
let langs = ["Java", "C++", "GO"];
console.log(langs?.[0]);
console.log(langs?.[3]);

// Optional Call
let log: any = (message: string) => {
  console.log("Hello ", message);
};
let log2: any = null;
log?.("a");
log2?.("a");
