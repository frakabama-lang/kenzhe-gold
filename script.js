// ===== МЕНЮ =====
function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("active");
}

// ===== АДМИН ВХОД =====
function adminLogin(){
let login = prompt("Логин:");
let pass = prompt("Пароль:");

if(login === "Kenzhe_gold2022" && pass === "kenzhegold2022"){
window.location.href = "admin.html";
}else{
alert("Неверные данные");
}
}

// ===== КУПИТЬ СРАЗУ (WhatsApp) =====
function buyNow(product){
let text = "Здравствуйте! Хочу заказать " + product + " с сайта Kenzhe_Gold";
window.open("https://wa.me/77759425888?text=" + encodeURIComponent(text));
}

// ===== КОРЗИНА =====

// Добавить в корзину
function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: name,
price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Товар добавлен в корзину");
}

// Загрузка корзины
function loadCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartContainer");
let total = 0;

if(!container) return;

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

let totalElement = document.getElementById("totalPrice");
if(totalElement){
totalElement.innerText = total + " ₸";
}
}

// Удалить из корзины
function removeFromCart(index){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

// Оформление заказа
function checkout(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("Корзина пустая");
return;
}

let message = "Здравствуйте! Хочу оформить заказ:\n\n";
let total = 0;

cart.forEach(item=>{
message += "- " + item.name + " (" + item.price + " ₸)\n";
total += Number(item.price);
});

message += "\nИтого: " + total + " ₸";

window.open("https://wa.me/77759425888?text=" + encodeURIComponent(message));

localStorage.removeItem("cart");
}
