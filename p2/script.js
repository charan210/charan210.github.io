const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const showProducts = () => {
 let str="";
 products.forEach((value)=>{
    str+= `<div class="card">
         <h2>${value.name}</h2>
        <p>Price: ${value.price}</p>
        <button onClick="adc(${value.id})">AddToCart</button>
                </div>`;
 });
  

  document.getElementById("root").innerHTML=str;
};


function adc(id){
    alert(`Product ID:${id}Go ANd check,WHATs in your CArt????`)
}
