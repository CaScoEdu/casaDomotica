class LightBulb{

    OFF = false;
    ON = true;
    stato = this.OFF;
    imgId;

    constructor(imgId){
        this.imgId = imgId;
        this.display();
    }

    switch(){
        this.stato = !this.stato;
        this.display();
    }

    display(){
        if (this.stato)
            this.imgId.src = "img/lightBulb_ON.png";
        else
            this.imgId.src = "img/lightBulb_OFF.png";
    }

}