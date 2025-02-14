import { MyPokemon } from "../../model/MyPokemon.js";

/**
 * 出力結果のうちポケモンに該当する部分を作成する
 * @param {MyPokemon} myPokemon
 */
export const createPokemonArea = (myPokemon) => {
  // 要素作成
  const pokemonArea = document.createElement("div");
  pokemonArea.className = "result-pokemon-area";

  // 画像部分の作成
  const img = document.createElement("img");
  console.log(myPokemon.pokemon.id);
  img.src = `assets/images/pokemon/${myPokemon.pokemon.id}_icon.png`;

  // 名前部分(label)の作成
  const name = document.createElement("label");
  name.textContent = myPokemon.pokemon.name; // optionに登録用の名前を記載できるようにしたらそれを採用するようにする

  pokemonArea.appendChild(img);
  pokemonArea.appendChild(name);

  return pokemonArea;
};
