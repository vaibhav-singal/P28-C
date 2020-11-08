class Ball {

  
    constructor(x,y,width,height) {

      var options = {
        isStatic:true,
        restitution:0,
        density: 1.2,
        friction:1
      }

       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.y = 300;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
        
    }

    display() {

        
            var pos = this.body.position;
                var angle = this.body.angle;
                push ();
                translate(pos.x,pos.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image,0,0,this.width,this.height);
                pop ();
          
        
         
        
          
        
    }
}
  


