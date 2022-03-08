// whitelist option by string in title
const titleWhitelist = [
  "Pop!_OS",
  "Ubuntu",
  "Parts and Labor Warranty",
  "Integrated Graphics",
  "AMD ",
  "Intel ",
];

// show loading spinner until page load
const orderSummary = document.getElementById("order-summary");
if (orderSummary) {
  const spinnerTemplate = `
    <div id="spinner">
      <div class="css-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`;
  orderSummary.innerHTML = spinnerTemplate + orderSummary.innerHTML;
}

// add items to cart after page load
window.addEventListener("load", () => {
  const products = [...document.getElementsByClassName("product")].filter(
    (div) => div.nodeType == 1
  );
  const spinner = document.querySelector("#spinner");
  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  }

  // sort products by price
  let sortedProducts = products.sort((a, b) => {
    const aInnerText = Number(
      a
        .getElementsByClassName("product__price")[0]
        .innerText.trim()
        .replace(/(^\$|,)/g, "")
    );
    const bInnerText = Number(
      b
        .getElementsByClassName("product__price")[0]
        .innerText.trim()
        .replace(/(^\$|,)/g, "")
    );
    console.log(aInnerText, bInnerText);
    return bInnerText - aInnerText;
    // return aInnerText === bInnerText ? -2 : aInnerText < bInnerText ? 1 : 0;
  });

  // // clear all unsorted products
  const productsTable = document.querySelector(
    '[data-order-summary-section="line-items"]'
  );
  productsTable.innerHTML = "";

  // add sorted products to the dom
  sortedProducts.forEach((product) => {
    productsTable.appendChild(product);
  });

  // loop product elements, make visible only non-free, and whitelisted free products
  products.forEach((product, i) => {
    // check if product is free
    const isFree =
      product.getElementsByClassName("product__price")[0].innerText.trim() ===
      "Free";

    // get the title of product
    const title = product
      .getElementsByClassName("product__description__name")[0]
      .innerText.trim()
      .split("\n")[0];
    const isWhitelist = titleWhitelist.some((t) => title.includes(t));

    // make all non-free and white listed free items visible
    if (!isFree || isWhitelist) {
      if (isFree) {
        // hide free product thumbnail and quantity
        product
          .getElementsByClassName("product-thumbnail")[0]
          .classList.add("no-thumbnail");
        product.getElementsByClassName("product-thumbnail__quantity")[0] = "";
        product.getElementsByClassName("product__price")[0].innerText =
          "Included";
      }
      product.classList.add("visible");
    }
  });
});
