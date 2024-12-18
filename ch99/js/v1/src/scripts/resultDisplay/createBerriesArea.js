import CalcResult from "../../model/calcResult.js";

/**
 * きのみエリアを生成する
 * @param {CalcResult} res
 */
export function createBerriesArea(res) {
  const berriesArea = document.createElement("div");
  berriesArea.className = "result-berries-area";

  // きのみ情報
  const berry = res.pokemon.pokemon.type.berry;
  console.log(berry);

  // きのみ個数表示空間
  const berriesCountArea = document.createElement("div");
  berriesCountArea.className = "result-berries-count-area";

  // きのみ画像
  const berriesImg = document.createElement("img");
  // あとでberriesに変える
  console.log(res.pokemon.pokemon.type.name_img);
  berriesImg.src = `assets/images/berry/${res.pokemon.pokemon.type.berry.name}.png`;

  // 個数のテキスト
  const berriesCountText = document.createElement("p");
  berriesCountText.textContent = `×${res.totalBerries.toFixed(
    1
  )}(${res.totalBerriesWithoutLost.toFixed(1)})`;

  berriesCountArea.appendChild(berriesImg);
  berriesCountArea.appendChild(berriesCountText);

  // きのみエナジー
  const berriesEnergyArea = document.createElement("div");
  berriesEnergyArea.className = "result-berries-energy-area";
  const berriesEnergyText = document.createElement("p");
  berriesEnergyText.textContent = `${(
    res.pokemon.getBerryEnergy() * res.totalBerries
  ).toFixed(1)}(${(
    res.pokemon.getBerryEnergy() * res.totalBerriesWithoutLost
  ).toFixed(1)})`;
  berriesEnergyArea.appendChild(berriesEnergyText);

  berriesArea.appendChild(berriesCountArea);
  berriesArea.appendChild(berriesEnergyArea);

  return berriesArea;
}
