/**
 * 食材一覧を反映させる
 * @param {HTMLElement} elem - 反映させる要素
 * @param {number} order - 第n食材か
 * @param {Pokemon} selectedPokemon - 選択されたポケモン
 */
export function reflectIngredient(elem, order, selectedPokemon) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (selectedPokemon) {
    // 食材のリストを取得
    const ingredientList = selectedPokemon.ingredients;

    // 第一第二第三食材(ingredientsクラス)
    const ingredient_a = ingredientList[0];
    const ingredient_b = ingredientList[1];
    const ingredient_c = ingredientList[2];

    if (ingredient_a.quantity[order - 1]) {
      createRadioAndLabel(ingredient_a, elem, order);
    }

    if (ingredient_b.quantity[order - 1]) {
      createRadioAndLabel(ingredient_b, elem, order);
    }

    if (ingredient_c.quantity[order - 1]) {
      createRadioAndLabel(ingredient_c, elem, order);
    }
  } else {
    // elemの子要素をすべて削除
  }
}

// ラジオボタンの作成 + ラベルの作成
function createRadioAndLabel(ingredient, elem, order) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "ingredient-" + order;
  radio.value = ingredient.ingredient.name_ja;
  radio.checked = true;
  elem.appendChild(radio);

  const label = document.createElement("label");
  label.textContent = ingredient.ingredient.name_ja;
  elem.appendChild(label);
}
