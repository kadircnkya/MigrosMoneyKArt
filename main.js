
let message=
`
Migros'a hoşgeldiniz.
Money kartınız var mı ?
1-Evet
2-Hayır

`;

const products=[
    {
        urunIsmi:"süt",
        fiyat:15,
    },
    {
        urunIsmi:"Bebek bezi",
        fiyat:100
    },
    {
        urunIsmi:"Kusbası",
        fiyat: 220
    }
]
//true veya false
let result=confirm(message);
let odenecekTutar

if (result==true) {
    let name=prompt("Adınızı Giriniz:");
    let lastName=prompt("Soyisminizi Giriniz:");
    const customer=new Customer(name,lastName,result,products)
   odenecekTutar= customer.calculate();
   alert(`Müsteri Bilgileri: ${name} ${lastName}
      Ödenecek Tutar: ${odenecekTutar}
   `);
}
else{

    const customer=new Customer(null,null,false,sonuc);
    odenecekTutar=customer.calculate();
    alert(`Ödenecek Tutar: ${odenecekTutar}`)

}