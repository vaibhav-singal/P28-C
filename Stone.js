class Stone {

    constructor(x,y) {

        var options = {
        isStatic:true,
        restitution:0,
        density: 1.2,
        friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill ("red");
        image(this.image,0,0,this.width,this.height);
        pop ();

    }
    }   