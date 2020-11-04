var database,position,ballPosition;
var gameState =0;
var playerCount,allPlayers;
var form,player,game;
var paddle1,paddle2,paddle3,paddle4;
var paddles = [];
var ball1,ball2,ball3,ball4;
var score;
var HighestScore;
var pad1,pad2,pad3,pad4;
var edges;
var y1,y2,x3,x4;
var index
var pos1,pos2,pos3,pos4;

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "green";

    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "blue"

    ball3 = createSprite(250,250,10,10);
    ball3.shapeColor = "yellow";

    ball4 = createSprite(250,250,10,10);
    ball4.shapeColor = "red";

    score = 0; 
    game = new Game();
    game.getState();
    game.start();

    edges = createEdgeSprites();

    //if(gameState===1){
   // }
}

function draw(){
    background("white");

    //fetches x and y value
    database.ref('players/player1/y').on("value",(data)=>{
      y1 = data.val();
    })
 
    database.ref('players/player2/y').on("value",(data)=>{
     y2 = data.val();
   })
 
   database.ref('players/player3/x').on("value",(data)=>{
     x3 = data.val();
   })
 
   database.ref('players/player4/x').on("value",(data)=>{
     x4 = data.val();
   })

    if(HighestScore<score){
        HighestScore= score; 
      } 
      
      text("High score:"+score,200,200);

      //console.log(score);

    if(playerCount === 4){
        game.update(1);
        ball1.velocityX = 5;        
        ball2.velocityY = -5;
        ball3.velocityX = -5;        
        ball4.velocityY = 5;
      }


    if(gameState === 1){
        clear();
        game.play();

        //bounces ball off edges
        ball1.bounceOff(edges[0]);
        ball2.bounceOff(edges[2]);
        ball3.bounceOff(edges[0]);
        ball4.bounceOff(edges[2]);

        ball1.bounceOff(edges[1]);
        ball2.bounceOff(edges[3]);
        ball3.bounceOff(edges[1]);
        ball4.bounceOff(edges[3]);

        //bounces ball off paddles
        ball4.bounceOff(paddle1);
        ball4.bounceOff(paddle2);

        ball2.bounceOff(paddle1);
        ball2.bounceOff(paddle2);

        ball1.bounceOff(paddle3);
        ball1.bounceOff(paddle4);

        ball3.bounceOff(paddle3);
        ball3.bounceOff(paddle4);

  
        score = score + Math.round(World.frameRate%60);
      }

      if(ball1.isTouching(edges[2])||ball1.isTouching(edges[3])){
        game.update(2);
      }

      if(ball3.isTouching(edges[2])||ball3.isTouching(edges[3])){
        game.update(2);
      }

      if(ball2.isTouching(edges[0])||ball2.isTouching(edges[1])){
        game.update(2);
      }

      if(ball4.isTouching(edges[0])||ball4.isTouching(edges[1])){
        game.update(2);
      }
      
      //blue lines
      stroke("blue");
      line(490,10,490,250);
      line(10,490,10,250);

      //green lines
      stroke("green");
      line(490,10,250,10);
      line(10,490,250,490);
      
      //red lines
      stroke("red");
      line(10,10,10,250);
      line(490,490,490,250); 

      //yellow lines
      stroke("yellow");
      line(10,10,250,10);
      line(490,490,250,490); 

      drawSprites();
    } 