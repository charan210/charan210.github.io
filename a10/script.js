const products = [
  { id:1,name:"Apple",  price:100,  imgUrl:"apple.jpg" },
  {id:2,name:"Banana",price:70,imgUrl:"banana.jpeg"},
  {id:3,name:"Mango",price:150,imgUrl:"mango.jpeg"},
];
function addProduct(){
  let id=document.querySelector("#id").value;
  let name=document.querySelector("#name").value;
  let price=document.querySelector("#price").value;
  let imgUrl=document.querySelector("#imgUrl").value;
  
  const obj ={
    id:id,
    name:name,
    price:price,
    imgUrl:imgUrl
  };
  products.push(obj)
  display()
}

function display(){
  let str="";
  products.map((value)=>{
    str+=`<div>
    <img src="${value.imgUrl}"/>
    <h2>${value.name}</h2>
    <h3>${value.price}</h3>
    <button>Add to cart</button>
    </div>`;
  });
  container.innerHTML=str;
}