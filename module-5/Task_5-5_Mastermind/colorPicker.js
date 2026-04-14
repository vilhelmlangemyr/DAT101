"use strict";

import { TSpriteDraggable } from "libSprite";
import { colorPickers, spcvs, SpriteInfoList } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";

export class TColorPicker extends TSpriteDraggable {
    constructor(aPos){
        super(spcvs, SpriteInfoList.ColorPicker, aPos.x, aPos.y);
    }

    onStartDrag() {
        const index = colorPickers.indexOf(this);
        colorPickers.splice(index, 1)
        colorPickers.push(this);
    }
}