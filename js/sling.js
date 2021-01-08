class Sling {

    constructor(posA, posB) {

        var options = {

            bodyA: posA,
            pointB: posB,
            
            sniffness: 0.04,
            length: 50,
        }

        this.sling = Constraint.create(options);

        this.bodyA = posA;
        this.pointB = posB;

        World.add(world, this.sling);
    }

    fly(){

        this.sling.bodyA = null;
    }

    attached(){

        this.sling.bodyA = this.bodyA;
    }
    
    display(colour){

        if (this.sling.bodyA !== null) {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;

            stroke(colour);
            strokeWeight(5);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}