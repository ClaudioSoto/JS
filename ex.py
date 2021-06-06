puclic class car{
    private String carMaker;
    private String model;
    private String color;

    public car(){
        //default constructor
    }
    public car(String carMaker,String model,String color){
        this.carMaker = carMaker;
        this.model = model;
        this.color = color;
    }


}

import car;
public main[](){
    Car myNewCar = new Car("BMW","X5","green");
}
