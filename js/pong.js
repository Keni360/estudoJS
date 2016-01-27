document.body.style.backgroundColor = "#313131";



    function Player(seletor){
        this.seletor = document.querySelector(seletor);
        this.height = 150;
        this.width = 30;
        this.color = "#fff";
        this.posX = 0;
        this.posY = 0;
        this.speedX = 10;
        this.speedY = 10;
        this.moveUp = false;
        this.moveDown = false;
        this.seletor.style.width = this.width+"px";
        this.seletor.style.height = this.height+"px";
        this.seletor.style.display = "block";
        this.seletor.style.position = "absolute";
        this.seletor.style.left = this.posX;
        this.seletor.style.top = this.posY;
        this.seletor.style.backgroundColor = this.color; 
        
        
        this.sayHi = function(){
            alert(this.seletor);
        }
        
        this.keydownHandler = function(tecla)
        {
            this.tecla = tecla.keyCode;
            
            switch (this.tecla)
            {
                case 87:
                    this.moveUp = true;
                    break;
                case 83:
                    this.moveDown = true;
                    break;
            }
              alert(this.tecla);
            
            
        }
        
        
            function down(){
                this.seletor.style.top = "100px";
            }
        
            this.move = function(){

                    if(this.moveUp)
                    {
                        this.posY--;
                        this.seletor.style.top = this.posY+"px";
                    }
                    if(this.moveDown)
                    {
                        this.posY++;
                        this.seletor.style.top = this.posY+"px";
                    }
            }
        
    }
    

function playerControler()
{
    
}
        
    
    
function draw() {
        
        var player1 = new Player("#player");
      
        window.addEventListener("keydown",function(e){
        //player1.seletor.style.top = "500px";
        //alert(e.keyCode);
        
            if(e.keyCode == 87 && player1.posY > 0){
                player1.posY-=10;
                player1.seletor.style.top = player1.posY;
            }
            
            if(e.keyCode == 83 &&
               player1.posY + player1.height + 9 <= document.body.clientHeight )
            {
                player1.posY+= 10;
                player1.seletor.style.top = player1.posY+"px";
                
            }
    },false);

}




    function update(){
        draw();  
        playerController();
        setTimeout(update,5);
    }

    

    
        
        update();
        
        
        
        
    