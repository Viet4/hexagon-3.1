class Block {

    constructor(x,y,width,height) {

        var options = {

            'restitution': 0.3,
            'friction': 0.5,
            'density': 1,

        }


        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        this.visibility = 255;

        World.add(world,this.body);
    }

    score() {

        if (this.visibility < 255 && this.visibility > 0) {

            score++;
        }
    }

    display(f) {

        if (this.body.speed < 5) {

            var pos = this.body.position;
            
            stroke("black");
            strokeWeight(2.2);
            fill(f);
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }
        else {

            World.remove(world,this.body);
            
            push();

            this.visibility = this.visibility-5;
            tint(255,this.visibility);

            pop();
        }
    }
}