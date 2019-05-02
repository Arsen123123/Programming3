class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0; 
    }

    
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [    this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [    this.x, this.y + 1],
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

  
    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

              
                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}

class Eatgrass {
    constructor(x, y) {
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

            
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

          
            this.x = x;
            this.y = y;

        }
    }



    eat() {
        
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

      
        if (cord) {
            var x = cord[0];
            var y = cord[1];

         
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;

         
            this.multiply++;

            
            this.energy++;

         
            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
        }
    }

  
    mul() {
    
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

  
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

       
            matrix[y][x] = 1;
            this.multiply = 0;
        } 
    }

    
    die() {
       
        matrix[this.y][this.x] = 0;

        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5;
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
        
        var fundCords = this.getDirections(2);
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

         
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;

         
            this.multiply++;

            
            this.energy++;

         
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
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
        
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);
        
  
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            

            var norG = new Gishatich(x, y);
            gishatichArr.push(norG);

       
            matrix[y][x] = 3;
        } 
    }

    
    die() {
       
        matrix[this.y][this.x] = 0;

        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }

}
class Dino {
    constructor(x, y) {
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
class Dino2 {
    constructor(x, y) {
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

            
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

          
            this.x = x;
            this.y = y;

        }
    }





    eat() {
        
        var fundCords = this.getDirections(4);
        var cord = random(fundCords);
        
      
        if (cord) {
            var x = cord[0];
            var y = cord[1];

         
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;

         
            this.multiply++;

            
            this.energy++;

         
            for (var i in dinoArr) {
                if (x == dinoArr[i].x && y == dinoArr[i].y) {
                    dinoArr.splice(i, 1);
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
        
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        
  
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            

            var norG = new Dino2(x, y);
            dino2Arr.push(norG);

       
            matrix[y][x] = 5;
        } 
    }

    
    die() {
       
        matrix[this.y][this.x] = 0;

        for (var i in dino2Arr) {
            if (this.x == dino2Arr[i].x && this.y == dino2Arr[i].y) {
                dino2Arr.splice(i, 1);
            }
        }
    }

}