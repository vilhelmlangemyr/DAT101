"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus, menu } from "./FlappyBird.mjs";
import { isDayMode } from "./FlappyBird.mjs";

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;

export class TObstacle {
  #spUp;
  #spDown;
  #spi;

  constructor(aSpcvs, aSPI) {
    const x = 600;
    this.#spi = aSPI;

    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion;
    const maxTop = -MinimumProtrusion;

    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion;
    let topWithGap = this.#spi.height + top + gap;

    if (topWithGap > minBottom) {
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap;
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);

    // Initial setting når røret lages:
    // Dag (true) -> 2 og 3
    // Natt (false) -> 0 og 1
    if (isDayMode) {
      this.#spDown.index = 2; 
      this.#spUp.index = 3;   
    } else {
      this.#spDown.index = 0; 
      this.#spUp.index = 1;   
    }
  }

  draw() {
    this.#spDown.draw();
    this.#spUp.draw();
  }

  // Denne metoden fikser fargen på rør som allerede er på skjermen når du trykker på knappen
  setDayNight(aIsDay) {
    if (aIsDay) {
      this.#spDown.index = 2; // Dagmodus -> Index 2 (Grønn ned?)
      this.#spUp.index = 3;   // Dagmodus -> Index 3 (Grønn opp?)
    } else {
      this.#spDown.index = 0; // Nattmodus -> Index 0 (Rød ned?)
      this.#spUp.index = 1;   // Nattmodus -> Index 1 (Rød opp?)
    }
  }

  animate() {
    this.#spDown.x--;
    this.#spUp.x--;
    let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp);

    if (hasCollided) {
      EGameStatus.state = EGameStatus.heroIsDead;
      hero.animationSpeed = 0;
      menu.stopSound();
      hero.flap(); 
      hero.dead();
    }
  }

  get x() { return this.#spDown.x; }
  get width() { return this.#spDown.width; }
}