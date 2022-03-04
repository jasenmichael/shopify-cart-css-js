window.addEventListener("load", function() {
    const products = [...document.getElementsByClassName("product")]
    products.forEach((product, i) => {
        console.log(product.getElementsByClassName("product__price")[0].innerText.trim());
        const isFree = product.getElementsByClassName("product__price")[0].innerText.trim() === "Free";
        console.log(i, 'isFree:', isFree);
        if (!isFree) {
            product.classList.add("visible");
        }
    })
});