const addproduct =()=>{
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product=productField.value
    const quantity=quantityField.value
    productField.value='';
    quantityField.value='';
    console.log(product,quantity);
    displayproduct(product,quantity);
    saveproductToLoacalStorage(product,quantity)
}
const displayproduct =(product, quantity)=>{
    const ul=document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText=`${product} : ${quantity}`
    ul.appendChild(li);
}
const getStoredShoppingCart=()=>{
    const storeCart=localStorage.getItem('cart');
    let cart={};
    if(storeCart){
        cart=JSON.parse(storeCart);
    }
    return cart;
}
const saveproductToLoacalStorage=(product,quantity)=>{
    const cart=getStoredShoppingCart();
    cart[product]=quantity;
    console.log(cart);
    const cartstringyfied=JSON.stringify(cart);
    localStorage.setItem('cart',cartstringyfied);
}
const displayproductfromlocalstorage=()=>{
    const saveCart=getStoredShoppingCart();
    console.log(saveCart);
}

displayproductfromlocalstorage();