import { Warrior, MagicWarrior, Warriror2, MagicWarrior2 } from "./index.js";

test("戦士クラス", () => {
    let player = new Warrior(10);
    expect(player.atk).toBe(10);
    expect(player.attack()).toBe(20);
})

test("魔法戦士クラス", () => {
    const player = new MagicWarrior(5, 6);
    expect(player.atk).toBe(5);
    expect(player.mgc).toBe(6);
    expect(player.attack()).toBe(11);
})

test("戦士クラス2", () => {
    let player = new Warriror2(10);
    expect(player.atk).toBe(10);
    expect(player.attack()).toBe(20);
})

test("魔法戦士クラス2", () => {
    let player = new MagicWarrior2(5, 6);
    expect(player.atk).toBe(5);
    expect(player.mgc).toBe(6);
    expect(player.attack()).toBe(11);
})