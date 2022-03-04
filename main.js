// (() => {
//   console.log("Hello World");
//   const products = document.getElementsByClassName("product");
//   console.log(products);
//   for (const product of products) {
//     console.log(product);
//   }
// })();


window.addEventListener("load", function() {
    // alert('Page is loaded');
    console.log("Hello World");
    const products = [...document.getElementsByClassName("product")]
    products.forEach((product, i) => {
        console.log(product.getElementsByClassName("product__price")[0].innerText.trim());
        const isFree = product.getElementsByClassName("product__price")[0].innerText.trim() === "Free";
        console.log(i, 'isFree:', isFree);
        if (!isFree) {
            product.classList.add("visible");
        }
        // console.log(JSON.stringify(product.innerText), i);
    })
});