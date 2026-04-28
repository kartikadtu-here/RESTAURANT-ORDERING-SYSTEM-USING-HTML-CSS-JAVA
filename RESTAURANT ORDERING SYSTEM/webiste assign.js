
var etaMap = {
  "Masor Tenga": 25,
  "Aloo Pitika": 10,
  "Duck Meat Curry": 40,
  "Pitha Platter": 20,
  "Khar": 20,
  "Chicken Roast": 35,
  "Butter Chicken": 30,
  "Dal Makhani": 30,
  "Masala Dosa": 15,
  "Shorshe Ilish": 30,
  "Pani Puri": 10,
  "Rasogolla": 10,
  "Assam Chai": 5,
  "Lassi": 5,
  "Nimbu Pani": 5
};

function placeOrder(event) {
  event.preventDefault();

  
  var selectedOption = document.getElementById("item").value;
  var dishName = selectedOption.split(" – ")[0];

  
  var eta = etaMap[dishName] || 30;

  
  var notif = document.getElementById("notification");
  var msg = document.getElementById("notif-msg");

  msg.textContent = "Your \"" + dishName + "\" will be ready in " + eta + " minutes.";
  notif.classList.add("show");

  
  setTimeout(function() {
    notif.classList.remove("show");
  }, 5000);
}