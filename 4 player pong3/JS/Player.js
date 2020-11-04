class Player{
    constructor(){
        this.index = null;
        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

      update(dist){
        if(this.index===3){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            x:dist
          });
        }
        else if(this.index===4){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            x:dist
          });
        }
        else if(this.index===1){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            y:dist
          });
        }
        else if(this.index===2){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).update({
            name:this.name,
            y:dist
          });
        }
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
         playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
         })
       }
}