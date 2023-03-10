/**
 * Picks the frame and draws it into the proper location.
 */
class Animator{
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
      Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

    this.elapsedTime = 0;
    //   this.totalTime = frameCount * frameDuration;
    // this - means for this object. For other animation we gonna hava many animator objects.
    this.totalTime = this.frameCount * this.frameDuration;
    
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        let frame = this.currentFrame();
        let row = Math.floor(frame / 5);
        let column = frame % 5;
        
        //keeps running it over and over
        if(this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime; // this.elapsedTime =0: also works
        }
        // var speed = 55;
            
        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * column, this.yStart + this.height * row, //source x and y (for example, use "0, 0" on call ofthis function)
            this.width, this.height, //source width and hight
            x, y, //destination x and y, where to draw this frame
            this.width, this.height
                        
            ); //destination width and hight
       
    };

// frame count starts from 0 (zero)
currentFrame(){
    return Math.floor(this.elapsedTime / this.frameDuration);
    };

    // for shooting, jumping. looping - to start loop again (walking)
isDone() {
    return (this.elapsedTime >= this.totalTime);
    };
}