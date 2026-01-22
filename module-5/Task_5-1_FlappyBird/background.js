"Use Strict";
import {TSprite} from "libSprite";

export class TBackground{
    #SpriteBackground;
    #SpriteGround;

    constructor(aSpcvs, aSPI){
        this.#SpriteBackground = new TSprite(aSpcvs, aSPI.background,0,0);
        const groundPosY = aSPI.background.height - aSPI.ground.height;
        this.#SpriteGround = new TSprite(aSpcvs, aSPI.ground,0,groundPosY);
    }

    drawBackground(){
        this.#SpriteBackground.draw();
        
    }
    drawGrond(){
        this.#SpriteGround.draw();
    }

    animate (){
        let x = this.#SpriteGround.x + (this.#SpriteGround.width / 2);
        if (x < 5){
        this.#SpriteGround.x = 0;
        } else {
        this.#SpriteGround.x --;
        }
    }
}