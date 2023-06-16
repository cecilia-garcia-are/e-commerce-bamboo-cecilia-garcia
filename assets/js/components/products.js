function products(products) {
    const db = [...products]

    function printProducts() {
        const productsDOM = document.querySelector('.products__container')
        let htmlProduct = ''

        for (const product of db) {
            htmlProduct += `
         <article class="product">
          <div class="product__image">
           <img src="${product.image} " alt="${product.name} ">
          </div>
          <div class="product__content">
           <button type="button" class="product  btn add--to--cart" data-id="${product.id} ">
            <i class='bx bx-cart'></i>
           </button>
           <span class="product__price">$${product.price} </span>
           <span class="product__stock">Disponibles: ${product.quantity}</span>
           <span class="product__description">${product.name}</span>
           <a data-id="${product.db} "></a> 
           </div>
         </article>
         `
        }

        productsDOM.innerHTML = htmlProduct
    }

    printProducts()

    return {
        db,
        printProducts
    }
}

export default products