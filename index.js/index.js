
const Products = [
    {
        id: 1,
        title: "Air force",
        price: 119,
        colors: {
            red: "IMG/red nike.jpeg",


            black: "IMG/blacknike.png",


        },
    },
    {

        id: 2,
        title: " JORDAN",
        price: 149,
        colors: {
            red: "IMG/red jordan.jpeg",

            black: "IMG/black jordan.jpeg",
        }
    },


    {
        id: 3,
        title: "BLAZERS",
        price: 109,
        colors: {
            red: "IMG/red blazer.jpeg",


            black: "IMG/black blazers.jpeg",
        },

    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: {
            red: "IMG/red crater .jpeg",


            black: "IMG/blackcrater.png",
        },
    }, {
        id: 5,
        title: "HIPPIE",
        price: 99,
        colors: {
            red: "IMG/red hippie.jpeg",


            black: "IMG/blackhippie.jpg",
        }

    }
]



const Wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItems")




let chosenProduct;
const currentproductImage = document.querySelector(".productImage")
const currentproductTitle = document.querySelector(".productTitle")
const curentproductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".colors")
const curentproductSizes = document.querySelectorAll(".size")

console.log(currentProductColors);

currentProductColors.forEach((button)=>{
button.addEventListener("click", ()=> {
    Products.filter((product)=> {
        if(product.title.toLowerCase().trim() === currentproductTitle.textContent.toLowerCase().trim()){
            console.log(product);
            if(button.classList.contains("black")){
                currentproductImage.src = product.colors.black;

            }
            else{
                currentproductImage.src = product.colors.red;

            }
        }
    })
});
})



function changeColor() {
    currentproductImage.src = chosenProduct.colors.black
    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            //change The chosen Product
            chosenProduct = Products[index];
    
    
            //Change The Text Of a Product
            currentproductTitle.textContent = chosenProduct.title
            curentproductPrice.textContent = "$" + chosenProduct.price
            //Assing new Colors
            currentProductColors.forEach((color, index) => {
                color.style.backgroundColor = chosenProduct.colors[index].code
            })
        })
    })
    
    currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {    
            currentproductImage.src = chosenProduct[index].
                console.log(curentproductColors)
        })
    })
}



