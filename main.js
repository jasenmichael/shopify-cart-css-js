const orderSummary = document.getElementById("order-summary");
if (orderSummary) {
    // <img src="https://jasenmichael.github.io/shopify-checkout-css-js/spinning-loading.gif" />
  const spinnerTemplate = `
    <div id="spinner">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`;
  orderSummary.innerHTML = spinnerTemplate + orderSummary.innerHTML;
}

window.addEventListener("load", () => {
  const products = [...document.getElementsByClassName("product")];
//   const spinner = document.querySelector("#spinner");
//   if (spinner) {
//     spinner.parentNode.removeChild(spinner);
//   }

  products.forEach((product, i) => {
    const isFree =
      product.getElementsByClassName("product__price")[0].innerText.trim() ===
      "Free";
    const titleWhitelist = ["Pop!_OS", "Ubuntu"];
    const title = product
      .getElementsByClassName("product__description__name")[0]
      .innerText.trim()
      .split("\n")[0];
    const isWhitelist = titleWhitelist.some((t) => title.includes(t));

    if (!isFree || isWhitelist) {
      product.classList.add("visible");
    }
  });
});
