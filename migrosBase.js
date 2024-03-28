class MigrosBase{
    indirimOrani=20;


    constructor(firstName,lastName,moneyKart,product){
        this.firstName=firstName;
        this.lastName=lastName;
        this.moneyKart=moneyKart;
        this.product=product;
    }

    calculate(){
        let odenecekTutar=0;
           if (this.productControl(this.product)) {
            //sepet dolu
            if(this.moneyKart){
                this.product.array.forEach(product => {
                    odenecekTutar+=(product.price*(100-this.indirimOrani)/100);
                 });
            }
            else{
                this.product.array.forEach(product => {
                    odenecekTutar+=product.price;
                 });
            }
            
         
        }

           else{
            alert("en az bir tane ürün satın almalısınız.");
           }

           return odenecekTutar;
    }

    productControl(product){
        if(product!=null && product.length>0){
            return true;
        }
        return false;
    }
}