window.addEventListener("load", function() {
    const products = [...document.getElementsByClassName("product")]
    products.forEach((product, i) => {
        console.log(product.getElementsByClassName("product__price")[0].innerText.trim());
        const isFree = product.getElementsByClassName("product__price")[0].innerText.trim() === "Free";
        const titleWhitelist = [
            "Pop!_OS",
            "Ubuntu"
        ]
        const title = product.getElementsByClassName("product__description__name")[0].innerText.trim().split("\n")[0];
        const isWhitelist = titleWhitelist.some(t => title.includes(t));
        if (!isFree || isWhitelist) {
            product.classList.add("visible");
        }
    })
});