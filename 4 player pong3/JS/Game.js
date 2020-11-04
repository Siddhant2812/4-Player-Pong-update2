class Game{
    constructor(){
        this.pos = 5;
        this.neg = -5;
    }

    //fetches gamestate from database
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    //updates gamestate when needed
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }


    async start(){
    if(gameState === 0){
        player = new Player();
        
        //gets player count
        var playerCountRef = await database.ref('playerCount').once("value");

        //checks if the player count is available and stores it
        if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
    }
        paddle1 = createSprite(490,250,10,50);

        paddle2 = createSprite(10,250,10,50);
        
        paddle3 = createSprite(250,10,50,10);
       
        paddle4 = createSprite(250,490,50,10);

        paddles = [paddle1, paddle2, paddle3, paddle4];
        
        pos1 = 250;
        pos2 = 250;
        pos3 = 250;
        pos4 = 250;

    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        paddle1.y = y1;
        paddle2.y = y2;

        paddle3.x = x3;
        paddle4.x = x4;

        if(allPlayers !== undefined){
            
            //index of the array
            index = 0;
      
            //var playerID = player+index;
      
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
             
              if (index === player.index){
                stroke(10);
                paddles[index - 1].shapeColor = "brown";
              }
            }

    if(index === 1){
        if(keyDown("d")){
            pos1 = pos1+5
            player.update(pos1);
        }
        if(keyDown("w")){
            pos1 = pos1-5
            player.update(pos1);
        }
    }

    if(index === 2){
        if(keyDown("d")){
            pos2 = pos2+5
            player.update(pos2);
            //player.update();
        }
        if(keyDown("w")){
            pos2 = pos2-5
            player.update(pos2);
        }
    }

    if(index === 3){
        if(keyDown(RIGHT_ARROW)){
            pos3 = pos3+5
            player.update(pos3);
        }
        if(keyDown(LEFT_ARROW)){
            pos3 = pos3-5
            player.update(pos3);
        }
    }

    if(index === 4){
        if(keyDown(RIGHT_ARROW)){
            pos4 = pos4+5
            player.update(pos4);
        }
        if(keyDown(LEFT_ARROW)){
            pos4 = pos4-5
            player.update(pos4);
        }
    }

        }
    }
    
}