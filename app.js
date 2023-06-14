// SECTION: Global Variables/Arrays

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1.25,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: .25,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: .25,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

// SECTION - Functions

function addIceCreamToCart(ice) {
    let flavorName = iceCream.find(flavor => flavor.name == ice)

    flavorName.quantity++

    // console.log(flavorName)

    drawCart()
}

function addToppingsToCart(top) {
    let toppingName = toppings.find(treat => treat.name == top)

    toppingName.quantity++

    console.log(toppingName)
}

function drawCart() {
    let cartHTML = ''

    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            cartHTML += /*html*/`
            <li>
                <div class="d-flex justify-content-between">
                    <span>
                    ${flavor.name}
                    </span>
                    <span>
                    ${flavor.quantity}
                    </span>
                    <span>
                    ${flavor.price.toFixed(2)}
                    </span>
                    <span>
                    $${(flavor.quantity * flavor.price).toFixed(2)}
                    </span>
                </div>
            </li>
            `
            // console.log(flavor)
        }
    })

    let cartContents = document.getElementById('cart')

    cartContents.innerHTML = cartHTML

    drawTotal()
}

function drawTotal() {
    let cartTotalContents = document.getElementById('cart total')

    let totalSum = 0

    iceCream.forEach(flavor => {
        totalSum += flavor.price * flavor.quantity
    })

    cartTotalContents.innerText = totalSum.toFixed(2).toString()
}

function checkOut() {
    const payButton = window.confirm("Are you ready to pay and check out?")

    if (!payButton) {
        return
    }

    iceCream.forEach(flavor => flavor.quantity = 0)

    drawCart()
}


// REVIEW: Reference Functions (old and refactored out)

// function addCookieDoughToCart() {
//     let cookieDough = iceCream.find(flavor => flavor.name == 'Cookie Dough'
//     )

//     cookieDough.quantity++

//     console.log(cookieDough)
// }

// function addVanillaToCart() {
//     let vanilla = iceCream.find(flavor => flavor.name == 'Vanilla')

//     vanilla.quantity++

//     console.log(vanilla)
// }

// function addStrawberryToCart() {
//     let strawberry = iceCream.find(flavor => flavor.name == 'Strawberry')

//     strawberry.quantity++

//     console.log(strawberry)
// }