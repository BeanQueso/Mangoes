class Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking_mangoes/tree.png");

    }
    display(){
      
      image(this.image, 500, 400, this.width, this.height);
 
      
    }
  };
