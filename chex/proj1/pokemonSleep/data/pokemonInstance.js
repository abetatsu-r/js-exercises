import Pokemon from "../classes/Pokemon";
import EvolutionStage from "../constants/evolutionStage";
import Ingradients from "../constants/ingredients";
import Types from "../constants/types";

/**
 * ポケモン種族インスタンス一覧
 */
const pokemonList = {
  Venusaur: {
    instance: new Pokemon(
      "Venusaur",
      Types.GRASS,
      2800,
      [
        { kind: Ingradients.HONEY, amount: [2, 5, 7] },
        { kind: Ingradients.TOMATO, amount: [null, 4, 7] },
        { kind: Ingradients.POTATO, amount: [null, null, 6] },
      ],
      26.6,
      null,
      2.1,
      17,
      EvolutionStage.FINAL
    ),
    japaneseName: "フシギバナ",
  },
};

// インスタンス取得(英名)
const getPokemonInstance = (name) => {
  return pokemonList[name]?.instance || null;
};

// 日本語引数名で取得
const getPokemonInstanceByJapaneseName = (name) => {
  return (
    Object.values(pokemonList).find((pokemon) => pokemon.japaneseName === name)
      ?.instance || null
  );
};
