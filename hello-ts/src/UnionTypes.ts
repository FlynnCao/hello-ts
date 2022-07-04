function KgToLbs(weight: number | string): void {
  if (typeof weight == "number") {
    console.log(`weight:${weight}KG`);
  } else {
    console.log(`weight:${weight}`);
  }
}

KgToLbs(10);
KgToLbs("20KG");
