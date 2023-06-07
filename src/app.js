let products = [ ];

function CreateProduct( name, description, category, price, quantity, imageLink){
    
    const id = Math.floor(Math.random() * 1000000)

    const product = {
        id, 
        name,
        description,
        category,
        price,
        quantity,
        imageLink
    }

    products.push(product)
}

const cellphone = new CreateProduct( "Samsung Galaxy S22", "2022 model", "Cellphones", 25999, 25, "https:" )
const cellphone2 = new CreateProduct( "Samsung Galaxy S23", "2022 model", "Cellphones", 20999, 25, "https:" )
const laptop = new CreateProduct("Dell Asos", "25' screen", "Computer", 12999, 15, "htttps")
const earphones = new CreateProduct("Galaxy Buds", "All black", "Accesories", 1999, 20, "https")
const daisies = new CreateProduct("Daisy v5", "dandelion", "Accesories", 500, 20,  "https")
console.log(products)

const filteredArray = products.filter((product) => product.category === "Cellphones")
console.log(filteredArray)

const sortedArray = filteredArray.filter((product) => product.price >= 22000)
console.log(sortedArray)



