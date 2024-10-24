class Car{
    constructor(name){
      this.brand=name;
    }
  
  road() {
    console.log(`${this.brand} is driving`);
  }}
  const myCar=new Car("tata");
  myCar.road();