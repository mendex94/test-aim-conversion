# Teste para Desenvolvedor Front-end

Este repositório contém um script JavaScript que realiza manipulações no DOM para exibir informações de preço e aplicar determinadas mudanças de estilo. O script extrai e formata dados de preço de elementos específicos, calcula o desconto e atualiza o DOM de acordo. Este README irá orientá-lo sobre como entender o código e sua funcionalidade.

## Instalação

O script pode ser executado através do console do navegador no website do Magalu. Para isso, siga as etapas abaixo:

1. Abra o website do Magalu no navegador.
2. Abra o console do navegador:
   - **Google Chrome:** Pressione `Ctrl + Shift + J` (Windows/Linux) ou `Cmd + Option + J` (Mac).
   - **Mozilla Firefox:** Pressione `Ctrl + Shift + K` (Windows/Linux) ou `Cmd + Option + K` (Mac).
   - **Microsoft Edge:** Pressione `Ctrl + Shift + J` (Windows/Linux) ou `Cmd + Option + J` (Mac).
3. Copie e cole o código do script [test.js](test.js) no console e pressione `Enter`.

## Funções

### extractPrice(elClasses)

Esta função extrai e converte o valor de preço de um elemento com a classe especificada.

**Parâmetros:**

- `elClasses` (string): A classe do elemento do qual extrair o preço.

**Retorna:**

- `number`: O valor de preço extraído e convertido.

### formatCurrency(value)

Esta função formata um valor numérico como moeda brasileira.

**Parâmetros:**

- `value` (number): O valor a ser formatado.

**Retorna:**

- `string`: O valor formatado como moeda brasileira.

## Manipulações do DOM

O script realiza várias manipulações no DOM com base nos valores de preço extraídos e calcula o desconto. Em seguida, atualiza o conteúdo de texto de elementos específicos para exibir o desconto.

1. **Extrair Valores de Preço:**

   ```javascript
   const originalPrice = extractPrice(".sc-kpDqfm.gBEKKZ.sc-gEkIjz.hhsvJQ");
   const discountPrice = extractPrice(".sc-kpDqfm.eCPtRw.sc-bOhtcR.dOwMgM");
   ```

2. **Calcular Desconto:**

   ```javascript
   const discount = originalPrice - discountPrice;
   const newDiscountString = `(${formatCurrency(discount)} de desconto)`;
   ```

3. **Atualizar Elementos de Desconto:**

   ```javascript
   const discountElement = document.querySelector(".sc-eXsaLi.fErFMt");
   if (newDiscountString && discountElement) {
     discountElement.textContent = newDiscountString;
   }
   ```

## Mudanças de Estilo

O script aplica mudanças específicas de estilo a certos elementos para aprimorar a interface do usuário.

1. **Alterar Cores dos Botões:**

   ```javascript
   const buyButton = document.querySelector(".sc-kOPcWz.dRuGuM.sc-hwFkLi.kVmJYX");
   const addToCartButton = document.querySelector(".sc-kOPcWz.fZuCAx.sc-hwFkLi.kVmJYX");
   const floatingButton = document.querySelector(".sc-kOPcWz.kWCmos.sc-cJIyfF.cveySP");

   if (buyButton && addToCartButton) {
     buyButton.style.backgroundColor = "rgb(0, 134, 255)";
   }

   if (floatingButton) {
     floatingButton.style.backgroundColor = "rgb(0, 134, 255)";
     floatingButton.querySelector(".sc-kOHTFB.brGmaU").textContent = "COMPRAR";
   }
   ```

2. **Ocultar Botão Adicionar ao Carrinho:**

   ```javascript
   if (addToCartButton) {
     addToCartButton.style.display = "none";
   }
   ```

3. **Atualizar Rótulo Flutuante de Desconto:**

   ```javascript
   const floatingDiscountLabel = document.querySelector(".sc-fqkvVR.lkyyeb");

   if (floatingDiscountLabel) {
     floatingDiscountLabel.textContent = newDiscountString;
     floatingDiscountLabel.style.color = "rgb(89, 192, 11)";
   }
   ```

## Contato

Para perguntas ou feedback, entre em contato através do email [lfelipecmendes@icloud.com](mailto:lfelipecmendes@icloud.com).

---

Este README fornece uma visão geral da funcionalidade e uso do código. Para informações mais detalhadas, consulte os comentários dentro do script.
