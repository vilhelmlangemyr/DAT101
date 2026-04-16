"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spInfo;
  #spGameOver
  #spMedal;

  constructor(aSpcvs, aSPI) {
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, aSPI.background.width/2-aSPI.flappyBird.width/2, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, aSPI.background.width/2-aSPI.buttonPlay.width/2, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, aSPI.background.width/2-aSPI.numberBig.width/2, 190);
    this.#spCountDown.visible = false;
    
    this.#spInfo = new TSprite(aSpcvs, aSPI.infoText, aSPI.background.width/2-aSPI.infoText.width/2, 50);
    this.#spInfo.visible = false;

    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, aSPI.background.width/2-aSPI.gameOver.width/2, 120);
    this.#spGameOver.visible = false;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 202, 163);
    this.#spMedal.visible = false;



    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
  }

  setSoundMute(aIsMuted) {
    if (this.#sfRunning) {
      if (aIsMuted) {
        this.#sfRunning.pause();
      } else {
        this.#sfRunning.play();
      }
    }
  }

  spPlayBtnClick() {
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;

  
    EGameStatus.state = EGameStatus.countDown;

    this.#spInfo.visible = true;
    this.#spInfo.index = 0; 
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;


    const isMuted = document.getElementById("chkMuteSound").checked;
    if (!isMuted) {
      this.#sfCountDown = new TSoundFile(fnCountDown);
      this.#sfCountDown.play();
    }

    setTimeout(this.countDown.bind(this), 1000);
  }

  countDown() {
    this.#spCountDown.value--;

    if (this.#spCountDown.value > 0) {
      setTimeout(this.countDown.bind(this), 1000);
    } else {
      // Ferdig med nedtelling
      this.#spCountDown.visible = false;
      this.#spInfo.visible = false;
      
      // Start musikken
      this.#sfRunning = new TSoundFile(fnRunning);
      const isMuted = document.getElementById("chkMuteSound").checked;
      if (!isMuted) {
        this.#sfRunning.play();
      }
      
      startGame();
    }
  }


  stopSound() {
    if (this.#sfRunning) {
      this.#sfRunning.stop();
    }
  }

  gameOver() {
    this.#spInfo.visible = true;
    this.#spInfo.index = 1;
    this.#spGameOver.visible = true;
    this.#spMedal.visible = true;
    }


  draw() {
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spInfo.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }
}