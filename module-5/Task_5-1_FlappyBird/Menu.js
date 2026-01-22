"use strict";
import { TSprite, TSpriteButton } from "libSprite";
import { EGameStatus, startGame } from "./FlappyBird.mjs";

export class TMenu {
    #spTitle;
    #spPlayBtn;
    constructor(aSpcvs, aSPI) {
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 235, 180);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
    }

    spPlayBtnClick(){
        console.log("Click!");
        this.#spPlayBtn.hidden = true;
        startGame();
    }
}