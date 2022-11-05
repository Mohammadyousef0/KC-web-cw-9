// أنشئ المصفوفة تحت هذا الكومنت
let orders = [];

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  let newOrder = {
    name: name,
    id: id,
    phone: phone,
    order: order
  };
    // أدرج الكائن إلى المصفوفة
    orders.push(newOrder);
    
  // طبق الخطوة 7 تحت هذا الكومنت
  load()
}


function load() {
  // طبّق الخطوة 6 تحت هذا الكومنت
 let container = document.getElementById("container");
  container.innerHTML ="";
  orders.forEach(order => {
    document.getElementById("container").innerHTML +=
    `<div> <h1>${order.name} - ${order.id}</h1> <h3>${order.order}</h3>
    </div>`
  });

}
function del() {
orders.pop();
load();
}
