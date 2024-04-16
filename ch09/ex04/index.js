export class Warrior {
  #atk = 0;

  constructor(atk) {
    this.#atk = atk;
  }

  get atk() {
    return this.#atk;
  }

  attack() {
    return this.atk * 2;
  }
}

export class MagicWarrior extends Warrior {
  constructor(atk, mgc) {
    super(atk);

    this.mgc = mgc;
  }

  attack() {
    return this.atk + this.mgc;
  }
}

export function Warriror2(atk) {
  this.atk = atk;
}

Warriror2.prototype = {
  attack() {
    return this.atk * 2;
  },
};

export function MagicWarrior2(atk, mgc) {
  this.atk = atk;
  this.mgc = mgc;
}

MagicWarrior2.prototype = Object.create(Warriror2.prototype);
MagicWarrior2.prototype.constructor = MagicWarrior2;

MagicWarrior2.prototype.attack = function () {
  return this.atk + this.mgc;
};
