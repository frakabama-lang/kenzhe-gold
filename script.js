function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("active");
}

function adminLogin(){
let login=prompt("Логин:");
let pass=prompt("Пароль:");
if(login==="Kenzhe_gold2022" && pass==="kenzhegold2022"){
window.location.href="admin.html";
}else{
alert("Неверные данные");
}
}

function buyNow(product){
let text="Здравствуйте! Хочу заказать "+product+" с сайта Kenzhe_Gold";
window.open("https://wa.me/77759425888?text="+encodeURIComponent(text));
}

// ===== КОРЗИНА =====

function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name:name, price:price});
localStorage.setItem("cart", JSON.stringify(cart));

alert("Товар добавлен в корзину");
}

function loadCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartContainer");
let total = 0;

container.innerHTML = "";

cart.forEach((item, index)=>{
total += Number(item.price);

container.innerHTML += `
<div class="card">
<h3>${item.name}</h3>
<p>${item.price} ₸</p>
<button onclick="removeFromCart(${index})">Удалить</button>
</div>
`;
});

document.getElementById("totalPrice").innerText = total + " ₸";
}

function removeFromCart(index){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}
