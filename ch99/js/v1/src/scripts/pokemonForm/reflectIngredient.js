import { IngredientKindInfo } from "../../enums/IngredientKindInfo.js";

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
      createRadioAndLabel(ingredient_a, elem, order, IngredientKindInfo.A);
    }

    if (ingredient_b.quantity[order - 1]) {
      createRadioAndLabel(ingredient_b, elem, order, IngredientKindInfo.B);
    }

    if (ingredient_c.quantity[order - 1]) {
      createRadioAndLabel(ingredient_c, elem, order, IngredientKindInfo.C);
    }
  } else {
    // elemの子要素をすべて削除
  }
}

// ラジオボタンの作成 + ラベルの作成
function createRadioAndLabel(ingredient, elem, order, kind) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "ingredient-" + order;
  radio.value = kind;
  radio.id = "ingredient-" + order + "-" + kind;
  radio.style.display = "none";
  radio.checked = true;
  elem.appendChild(radio);

  const label = document.createElement("label");
  label.style.position = "relative";
  label.style.margin = "0 5px";
  label.htmlFor = radio.id;

  const img = document.createElement("img");
  img.src = `assets/images/ingredient/${ingredient.ingredient.name}.png`;
  img.alt = ingredient.ingredient.name_ja;
  img.style.width = "30px";
  img.style.height = "30px";

  label.appendChild(img);
  elem.appendChild(label);
}
