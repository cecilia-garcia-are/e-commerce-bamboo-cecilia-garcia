import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';
import header from './components/header.js';




/*UI ELEMENTS*/

/*HIDDEN LOADER*/

loader()

/*show menu*/

showMenu()

/*ShowCart*/

showCart()

/* end UI ELEMENTS*/

/*PRODUCTS*/

const {db, printProducts} = products(await getProducts())

/*Cart*/

cart(db, printProducts)

header()







