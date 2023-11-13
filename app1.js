
// let cart={};
// function addToCart(itemId, quantity){
//     if(cart[itemId]){
//         cart[itemId]+=quantity;
//     }else{
//         cart[itemId]=quantity;
//     }
// }
// function displayCart(){
//     let cartItems=Object.keys(cart);
//     let cartTable=
//     "<table><thead><tr><th>Item</th><th>Quantity</th></tr></thead><tbody>";
//     for(let i=0;i<cartItems.length;i++){
//         let itemId=cartItems[i];
//         let quantity=cart[itemId];
//         cartTable +="<tr><>td"+itemId+"</td><td>"+quantity+"</td></tr>";
//     }
//     cartTable +="</tbody></table>";
//     document.getElementById("cart").innerHTML=cartTable;
// }
// let addToCartButtons=
// document.querySelectorAll(".add-to-cart");
// addToCartButtons.forEach(function(button){
//     button.addEventListener("click",function(event){
//         let itemId =event.target.dataset.itemId;
//         let quantity = 1;
//         addToCart(itemId,quantity);
//         displayCart();
//     });
// });