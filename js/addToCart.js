const product = [
    {
        id: 0,
        image: 'img/cart1-img.jpg',
        title: 'card title ',
        price: 10, 
    },
    {
        id: 1,
        image: 'img/cart2-img.jpg',
        title: 'card title ',
        price: 26,
    },
    {
        id: 2,
        image: 'img/cart3-img.jpeg',
        title: 'card title ',
        price: 30,
    },
    {
        id: 3,
        image: 'img/cart1-img.jpg',
        title: 'card title ',
        price: 15,
    },
    {
        id: 4,
        image: 'img/cart2-img.jpg',
        title: 'card title ',
        price: 33,
    },
    {
        id: 5,
        image: 'img/cart3-img.jpeg',
        title: 'card title ',
        price: 13,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class="col-12 col-md-6 col-lg-4 mb-5 ">
            <div class=" card p-3 rounded-4" style="width: 100%;">
                <i class="fa-solid fa-heart card-icon  "></i>
                <img src=${image} class="card-img card-img-top" alt="...">
                <div class="card-body">
                <h5 class=" text-white-50 card-title">${title}</h5>
                <p class=" text-white-50 card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button href="#shop" class=" text-white-50 main-btn btn px-3 fw-bold" onclick="addtocart(${item.id})">Buy Now</button>
                <span  class="price px-4 text-white-50"> ${price}.00$</span>    
                </div>
            </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-items'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <h4 >${title}</h4>
                <span style='font-size: 14px;'>${price}.00$ </span>`+
                "<i class='fa-solid fa-trash ' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }   
}
// show and hide cart items
function openNav() {
  document.getElementById("mySidenav").style.width = "370px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}















