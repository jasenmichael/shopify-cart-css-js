window.addEventListener("load", () => {
  const list = document.querySelector(
    '[data-order-summary-section="line-items"]'
  );
  const spinnerTemplate = `
  <tr id="spinner">
    <td>
      <img src="https://jasenmichael.github.io/shopify-checkout-css-js/spinning-loading.gif" />
    </td>
  </tr>`;
  list.innerHTML = spinnerTemplate + list.innerHTML;

  const products = [...document.getElementsByClassName("product")];
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
    const spinner = document.querySelector('#spinner')
    if (spinner) {
        spinner.parentNode.removeChild(spinner);
    }
    if (!isFree || isWhitelist) {
      product.classList.add("visible");
    }
  });
});
