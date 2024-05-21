/* Primeiro passo é selecionar todos os elementos que vamos manipular */

/**
 * Função para extrair e converter o valor de preço de um elemento.
 * @param {string} elClasses - O valor do atributo class do elemento.
 * @returns {number} - O valor numérico extraído e convertido.
 */

function extractPrice(elClasses) {
  const priceElement = document.querySelector(`${elClasses}`);

  if (!priceElement) {
    return null;
  }

  const priceText = priceElement.textContent;

  const cleanedPriceText = priceText.trim().replace("R$", "").replace(/\s/g, "");

  const numericPriceText = cleanedPriceText.replace(/\./g, "").replace(",", ".");

  const priceNumber = parseFloat(numericPriceText);

  return priceNumber;
}

/**
 * Função para formatar um número como uma string de moeda brasileira.
 * @param {number} value - O valor numérico a ser formatado.
 * @returns {string} - O valor formatado como moeda brasileira.
 */

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

const originalPrice = extractPrice(".sc-kpDqfm.gBEKKZ.sc-gEkIjz.hhsvJQ");
const discountPrice = extractPrice(".sc-kpDqfm.eCPtRw.sc-bOhtcR.dOwMgM");
const discount = originalPrice - discountPrice;
const newDiscountString = `(${formatCurrency(discount)} de desconto)`;
const discountElement = document.querySelector(".sc-eXsaLi.fErFMt");
const buyButton = document.querySelector(".sc-kOPcWz.dRuGuM.sc-hwFkLi.kVmJYX");
const addToCartButton = document.querySelector(".sc-kOPcWz.fZuCAx.sc-hwFkLi.kVmJYX");
const floatingButton = document.querySelector(".sc-kOPcWz.kWCmos.sc-cJIyfF.cveySP");
const floatingDiscountLabel = document.querySelector(".sc-fqkvVR.lkyyeb");

if (buyButton && addToCartButton) {
  buyButton.style.backgroundColor = "rgb(0, 134, 255)";
}

if (addToCartButton) {
  addToCartButton.style.display = "none";
}

if (floatingButton) {
  floatingButton.style.backgroundColor = "rgb(0, 134, 255)";
  floatingButton.querySelector(".sc-kOHTFB.brGmaU").textContent = "COMPRAR";
}

if (newDiscountString && discountElement) {
  discountElement.textContent = newDiscountString;
}

if (floatingDiscountLabel) {
  floatingDiscountLabel.textContent = newDiscountString;
  floatingDiscountLabel.style.color = "rgb(89, 192, 11)";
}
