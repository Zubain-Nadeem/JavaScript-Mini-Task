let api = "https://dummyjson.com/products";
let prodContainer = document.querySelectorAll(".products-container")[0];
let welSection = document.querySelectorAll(".bg-section")[0];

function showProducts() {
  fetch(api)
    .then((response) => response.json())
    .then((item) => {
      let product = item.products;
      console.log(product);

      for (let i = 0; i < product.length; i++) {
        prodContainer.innerHTML += `
        <div class = 'card'> 
            <img  src = "${product[i].images}" />
                <h2> ${product[i].title} </h2>
                <p> $ ${product[i].price}</p>
        </div>
        `;
      }

      welSection.style.display = "none";
    });
}
