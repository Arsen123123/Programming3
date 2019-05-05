class Dino {
    constructor(x, y) {
        super(x,y)
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 10;
        this.directions =[];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {
        
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

          
            this.x = x;
            this.y = y;

        }
    }





    eat() {
        
        var fundCords = this.getDirections(3);
        var cord = random(fundCords);
        console.log(this.multiply)
        if (true ) {
            console.log("mul") 
            this.mul()
            this.multiply = 0;
        }
      
        if (cord) {
            var x = cord[0];
            var y = cord[1];

         
            matrix[y][x] = 4 ;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;

         
            this.multiply++;

            
            this.energy++;

         
            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            


        } else {
            
            this.move();
            this.energy--;
            if (this.energy < 0) {
                this.die();
            }
        }
    }

  
    mul() {
        
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);
        
  
        if (cord) {
            console.log("mul")
            var x = cord[0];
            var y = cord[1];

            

            var norG = new Dino(x, y);
            dinoArr.push(norG);

       
            matrix[y][x] = 4;
        } 
    }

    
    die() {
       
        matrix[this.y][this.x] = 0;

        for (var i in dinoArr) {
            if (this.x == dinoArr[i].x && this.y == dinoArr[i].y) {
            dinoArr.splice(i, 1);
            }
        }
    }

}