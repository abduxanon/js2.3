//1-misol

//  class mashina {
//    constructor(rusumi, yili) {
//      this.rusumi = rusumi;
//      this.yili = yili;
//    }
//  }
//  const car1 = new mashina("gentra", 2023);
//  const car2 = new mashina("nexia.2", 2012);
//  const car3 = new mashina("malibu.1", 2014);

//  console.log(`rusumi:${car1.rusumi}, yili:${car1.yili}`);
//  console.log(`rusumi:${car2.rusumi}, yili:${car2.yili}`);
//  console.log(`rusumi:${car3.rusumi}, yili:${car3.yili}`);

//2-misol

// class mashina {
//   constructor(rusumi, yili) {
//     this.rusumi = rusumi;
//     this.yili = yili;
//   }
// }
// class ElectricCar extends mashina {
//   constructor(rusumi, yili, batareya) {
//     super(rusumi, yili);
//     this.batareya = batareya;
//   }
// }
// const electricCar1 = new ElectricCar("Tesla", 2023, 550);
// const electricCar2 = new ElectricCar("byd", 2023, 500);
// console.log(
//   `rusumi:${electricCar1.rusumi}, yili:${electricCar1.yili}, batareya yetishi:${electricCar1.batareya}km yetadi`
// );
// console.log(
//   `rusumi:${electricCar2.rusumi}, yili:${electricCar2.yili}, batareya yetishi:${electricCar2.batareya}km yetadi`
// );

//3-misol

// class mashina {
//   constructor(rusumi, yili) {
//     this.rusumi = rusumi;
//     this.yili = yili;
//   }
//   displayInfo() {
//     console.log(this.rusumi, this.yili);
//   }
// }
// class ElectricCar extends mashina {
//   constructor(rusumi, yili, batareya) {
//     super(rusumi, yili);
//     this.batareya = batareya;
//   }
//   displayInfo() {
//     console.log(this.rusumi, this.yili, this.batareya);
//   }
// }
// const electricCar1 = new mashina("Tesla", 2023);
// const electricCar2 = new ElectricCar("byd", 2023, 500);
// electricCar1.displayInfo();
// electricCar2.displayInfo();

