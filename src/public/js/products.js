const CARTS_URL = 'http://localhost:8080/api/carts'
const PRODUCTS_VIEW_URL = 'http://localhost:8080/products'
const CART_VIEW_URL = 'http://localhost:8080/cart'

async function addProductToCart(productId, cartId) {
    axios.post(`${CARTS_URL}/${cartId}/product/${productId}`)
        .then(function (response) {
            Swal.fire({
                title: 'Product added successfully',
            })
        })
        .catch(function (error) {
            Swal.fire({
                title: 'Something went wrong'
            })
            console.error(error);
        })
}

function goToProductView(productId) {
    window.location = `${PRODUCTS_VIEW_URL}/${productId}`;
}

function goToHomeView() {
    window.location = `${PRODUCTS_VIEW_URL}`;
}

function goToCartView(cartId) {
    if (cartId == null) {
        Swal.fire({
            title: 'No cart for this user',
        })
        return
    }
    window.location = `${CART_VIEW_URL}/${cartId}`
}

function goToPage(link) {
    window.location = link;
}