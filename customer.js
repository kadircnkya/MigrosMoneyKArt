class Customer extends MigrosBase{

    constructor(firstName,lastName,moneyKart,product){
        super(firstName,lastName,moneyKart,product);
    }
    calculate(){
       return super.calculate();
    }
}