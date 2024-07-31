let cart = {
    items: [] ,
    total: 0
}

const proudcts = [
    {
        id: 1 , 
        name: "Gaming Laptop" ,
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 78 ,
        img: "images/Album 1.webp" ,
        quantity: 4
    } , 
    
    {
        id: 2 , 
        name: "Gaming Headphone" ,
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 400 ,
        img:"images/Album 2.jpg" ,
        quantity: 3
    } , 
    
    {
        id: 3 , 
        name: "Gaming Mouse" ,
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 220 ,
        img:"images/Album 3.webp" ,
        quantity: 5 
    } , 
    
    {
        id: 4 , 
        name: "Gaming Desktop" ,
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 120 ,
        img:"images/Album 4.avif" ,
        quantity: 6
    } , 
    
    {
        id: 5 , 
        name: "Gaming Monitor" ,
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 100 ,
        img:"images/Album 5.jpeg" ,
        quantity: 2
    } , 
    
    {
        id: 6 , 
        name: "Gaming Alpha" , 
        cart_text: `This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.` , 
        price: 45 ,
        img:"images/Album 6.jpg" ,
    } ,    
]



//  selcet elements

const totalPrice = document.querySelector(".totalPrice")



const renderProducts = () => {

    const products_carts = document.querySelector(".products-carts")
    
    products_carts.innerHTML =""

    proudcts.forEach((item , index) => {
        products_carts.innerHTML += `
        
    <div class="col-md-4 card-item">
        <article class="post card shadow-sm">
            <img class="card-img-top" src="${item.img}" alt="${item.name}">
            <div class="card-body">
                <div class="title-text">
                    <h5>${item.name}</h5>
                </div>
                <div class="card-text">
                    <p class="text-muted">${item.cart_text}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn btn-group btn-sm">
                        <button class="button" value="${item.id}" onclick="addToCart(${index})">
                            <span>Add to cart</span>
                            <div class="cart">
                                <svg viewBox="0 0 36 26">
                                    <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5">
                                    </polyline>
                                    <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <p class="m-0 text-muted">${item.price} $</p>
                </div>
            </div>
        </article>
    </div>

        `

        

        // if(item.quantity === 0) {
        //     products_carts.innerHTML += `
            
        // <div class="col-md-4 card-item">
        //     <article class="post card shadow-sm">
        //         <img class="card-img-top" src="${item.img}" alt="${item.name}">
        //         <div class="card-body">
        //             <div class="title-text">
        //                 <h5>${item.name}</h5>
        //             </div>
        //             <div class="card-text">
        //                 <p class="text-muted">${item.cart_text}</p>
        //             </div>
        //             <div class="d-flex justify-content-between align-items-center">
        //                 <div class="btn btn-group btn-sm">
        //                 <button class="btn btn-danger btn-finish" value="${item.id}" disabled></button>
        //                 </div>
        //                 <p class="m-0 text-muted">${item.price} $</p>
        //             </div>
        //         </div>
        //     </article>
        // </div>

        //     `
        // }
        
    })

    
}



const renderCartItems = () => {

    const cartItems = document.querySelector(".cartItems")
    cartItems.innerHTML = ""


    const totalPriceEl = document.querySelector(".totalPrice")

    let totalPrice = 0

    if(cart.items.length === 0){
        cartItems.innerHTML = " There are no products in the shopping cart "
    }


    cart.items.forEach((item) => {
        totalPrice += item.total

        cartItems.innerHTML += `
        
    <div class="card mb-4">
        <div class="card-body">

            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.img}" class="img-fluid" alt="Generic placeholder image">
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <div>
                        <p class="small text-muted mb-4 pb-2">Name</p>
                        <p class="lead fw-normal mb-0">${item.name}</p>
                    </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <div>
                        <p class="small text-muted mb-4 pb-2">Quantity</p>
                        <p class="lead fw-normal mb-0">${item.qty}</p>
                    </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <div>
                        <p class="small text-muted mb-4 pb-2">Price</p>
                        <p class="lead fw-normal mb-0">$ ${item.price}</p>
                    </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <div>
                        <p class="small text-muted mb-4 pb-2">Total</p>
                        <p class="lead fw-normal mb-0 amt">$ ${item.amt}</p>
                    </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <div>
                        <button class="btn btn-danger" onclick="removeCart('${item.name}')"><i class="fas fa-trash-can-list"></i></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
        
        `

    });



    totalPriceEl.innerHTML = `
    
    <div class="float-end">
        <p class="mb-0 me-5 d-flex align-items-center">
            <span class="small text-muted me-2">Order total:</span> <span
            class="lead fw-normal">$ ${totalPrice}</span>
        </p>
    </div>
    
    `


      // Add Product Count in Cart Icon

    const cartCount = document.querySelector('.cart-count');
    let count = cart.items.length;
    cartCount.innerHTML= count;

    if(count == 0){
        cartCount.style.display='none';
    }else{
        cartCount.style.display='block';
    }





}






const addToCart = (productIndex) => {
    const product = proudcts[productIndex]

    let amt = document.querySelector(".amt")

    let existingProduct = false 

    let newCartItems = cart.items.reduce((state , item) => {

        if(item.name === product.name) {
            existingProduct = true

            const newItem = {
                ...item,
                qty: item.qty + 1,
                total: (item.qty + 1) * item.price,
                amt: (item.qty + 1) * (item.price),
            }

            return [...state, newItem]
        }

        return [...state, item]

    }, [])

    if(!existingProduct) {
        newCartItems.push({
            ...product,
            qty: 1,
            total: product.price,
            amt: product.price,
        })
    }

    cart = {
        ...cart, 
        items: newCartItems,
    }



    renderCartItems()
}


const removeCart = (productName) => {
    let newCartItems = cart.items.reduce((state , item) => {

        if(item.name === productName){
            const newItem = {
                ...item,
                qty: item.qty - 1,
                total: (item.qty - 1) * item.price,
                amt: (item.qty - 1) * (item.price)
            }

            if(newItem.qty > 0){
                return [...state , newItem]
            }else {
                return state
            }
        }

        return [...state , item]

    } , [])


    cart = {
        ...cart ,
        items: newCartItems
    }

    renderCartItems()
}







renderProducts()
renderCartItems()







document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
            button.classList.add("loading");
            setTimeout(() => button.classList.remove("loading"), 3000);
        }
        e.preventDefault();
    })
);





