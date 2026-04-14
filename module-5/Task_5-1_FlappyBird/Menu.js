"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
  }

  setSoundMute(aIsMuted) {
  // Sjekk om sfRunning faktisk eksisterer (spillet er i gang)
  if (this.#sfRunning) {
    if (aIsMuted) {
      this.#sfRunning.pause(); // Eller .stop() avhengig av libSound-biblioteket ditt
    } else {
      // Spill bare hvis vi faktisk er i "gaming"-modus
      this.#sfRunning.play();
    }
  }
}

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
  }

  countDown() {
  this.#spCountDown.value--;
  if (this.#spCountDown.value > 0) {
    setTimeout(this.countDown.bind(this), 1000);
  } else {
    this.#spCountDown.visible = false;
    this.#spTitle.hidden = true;
    
    this.#sfRunning = new TSoundFile(fnRunning);
    // Sjekk mute før bakgrunnsmusikk
    if (!this.isMuted) {
      this.#sfRunning.play();
    }
    startGame();

}
    
  }

  spPlayBtnClick() {
  console.log("Click!");
  this.#spPlayBtn.hidden = true;
  this.#spCountDown.visible = true;
  this.#spCountDown.value = 3;
  
  // Sjekk mute før nedtellingslyd
  if (!this.isMuted) {
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
  }
  
  setTimeout(this.countDown.bind(this), 1000);
}

}