window.addEventListener("load", () => {
    const products = [...document.getElementsByClassName("product")]
    products.forEach((product, i) => {
        const isFree = product.getElementsByClassName("product__price")[0].innerText.trim() === "Free";
        const titleWhitelist = [
            "Pop!_OS",
            "Ubuntu"
        ]
        const title = product.getElementsByClassName("product__description__name")[0].innerText.trim().split("\n")[0];
        const isWhitelist = titleWhitelist.some(t => title.includes(t));
        const spinner = document.querySelector('#spinner')
        spinner.parentNode.removeChild(spinner);
        if (!isFree || isWhitelist) {
            product.classList.add("visible");
        }
    })
});