let gabrielus = {
  HP: 108,
  Atk: 130,
  Def: 95,
  SpA: 80,
  SpD: 85,
  Spe: 102,
};

console.log("property名の一覧");
for (const [stats, _] of Object.entries(gabrielus)) {
  console.log(stats);
}

console.log("\n値の一覧");
for (const [_, param] of Object.entries(gabrielus)) {
  console.log(param);
}
