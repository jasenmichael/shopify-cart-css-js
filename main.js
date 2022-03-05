const orderSummary = document.getElementById("order-summary");
if (orderSummary) {
  const spinnerTemplate = `
    <div id="spinner">
      <div class="css-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`;
  orderSummary.innerHTML = spinnerTemplate + orderSummary.innerHTML;
}

window.addEventListener("load", () => {
  const products = [...document.getElementsByClassName("product")];
  const spinner = document.querySelector("#spinner");
  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  }

  products.forEach((product, i) => {
    const isFree =
      product.getElementsByClassName("product__price")[0].innerText.trim() ===
      "Free";
    const titleWhitelist = [
        "Pop!_OS", 
        "Ubuntu", 
        "Parts and Labor Warranty",
        "Integrated Graphics",
        "AMD ",
        "Intel ",
    ];
    const title = product
      .getElementsByClassName("product__description__name")[0]
      .innerText.trim()
      .split("\n")[0];
    const isWhitelist = titleWhitelist.some((t) => title.includes(t));

    if (!isFree || isWhitelist) {
      {
        isFree
          ? (product.getElementsByClassName("product__price")[0].innerText =
              "Included")
          : null;
      }
      product.classList.add("visible");
    }
  });
});
