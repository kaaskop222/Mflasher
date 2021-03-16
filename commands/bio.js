module.exports = {
  name: "bio",                                                        //hier weer de naam of hij argumenten gebruikt en welke argumenten hij nodig heeft.
  discription: "The biografie of a champion or ability",
  args: true,
  usage: "<champion> <ability>",
  execute(message, args) {
    const champions = ["ahri", "teemo", "lux", "yasuo", "darius", "nidalee", "vladimir"];                     //hier check ik of hij een champion noemt
    
    if (args[0].toLowerCase() == champions[0] || args[0].toLowerCase() == champions[1] || args[0].toLowerCase() == champions[2] || args[0].toLowerCase() == champions[3] || args[0].toLowerCase() == champions[4]|| args[0].toLowerCase() == champions[5]|| args[0].toLowerCase() == champions[6]){
      if(args[0].toLowerCase() == "darius"){
        if(args[1]){                                                                                        //hier check ik of hij een ability heeft vermeld
          switch(args[1].toLowerCase()){
          case "q":
            message.channel.send("Darius swings his axe in a cricle dealing damage and healing himself for a part of the damage dealt");
            break;
          case "w":
            message.channel.send("Darius hits with his axe. Inflicts slow");
            break;
          case "e":
            message.channel.send("Darius hooks with his axe, inflicts airborne");
            break;
          case "r":
            message.channel.send("Darius SLAMS his axe onto the enemy while shouting: 'And then we just SLAAAAM on top of them'");
            break;
          }
        } else {
          message.channel.send("Big corrupted axemen. Nothing magical just a man with a big fucking axe", {files: ["./Darius.png"]});
        }
      }
      if(args[0].toLowerCase() == "ahri"){
        if(args[1]){
          switch(args[1].toLowerCase()){
          case "q":
            message.channel.send("Ahri throws her magical orb wich also returns dealing damage and healing her for a bit of the damage dealt");
            break;
          case "w":
            message.channel.send("Ahri spawns three blue flames dealing damage spread over the next three turns");
            break;
          case "e":
            message.channel.send("Ahri blows a kiss dealing damage and inflicts charm");
            break;
          case "r":
            message.channel.send("Ahri can dash up to three times in a row");
            break;
          }
        } else {
          message.channel.send("Woman with nine fox tails. She lures her victims to her hole with her charming powers to consume their souls", {files: ["./Ahri.png"]});
        }
      }
        if(args[0].toLowerCase() == "yasuo"){
          if(args[1]){
            switch(args[1].toLowerCase()){
              case "q":
                message.channel.send("Yasuo uses his sword as a stabbo stick, can be used at the same time as his e making him do a 360 instead, if this ability is used succesfully three times in a row it inflicts airborne");
                break;
              case "w":
                message.channel.send("Yasuo makes a wall out of wind blocking all incoming attacks");
                break;
              case "e":
                message.channel.send("Yasuo uses the wind to dash");
                break;
              case "r":
                message.channel.send("Yasuo hits the enemy to keep them up longer in the air, needs enemy to be airborne");
                break;
              }
          } else {
              message.channel.send("Yasuo is a loner with a sword that learned the way of the wind", {files: ["./Yasuo.png"]});
          }
        }
        if(args[0].toLowerCase() == "lux"){
          if(args[1]){
            switch(args[1].toLowerCase()){
              case "q":
                message.channel.send("Lux shoots a light out of her staff that deals damage and roots");
                break;
              case "w":
                message.channel.send("Lux spins her staff in front of her for two turns to absorb a portion of incoming damage");
                break;
              case "e":
                message.channel.send("shoots a small sun wich deals damage and inflicts slow");
                break;
              case "r":
                message.channel.send("SUPER AWESOME RAINBOW LASER");
                break;
              }
          } else {
              message.channel.send("Lux is from a royal familie in a city where people tend to kill mages but little do they know their princess is a mage", {files: ["./Lux.png"]});
          }
        }
        if(args[0].toLowerCase() == "teemo"){
          if(args[1]){
            switch(args[1].toLowerCase()){
              case "q":
                message.channel.send("Teemo shoots a blinding dart. Guess what, it inflicts blindness");
                break;
              case "w":
                message.channel.send("Teemo runs a bit faster for no real reason");
                break;
              case "e":
                message.channel.send("Teemo shoots a poison dart which deals damage and inflicts poison for three turns");
                break;
              case "r":
                message.channel.send("Teemo places a poisonous shroom wich inflicts slow and damage over time when hit");
                break;
              }
          } else {
              message.channel.send("Teemo is a squirrel-like human being around 80 cm tall, he uses his darts and mushrooms to poison the enemy", {files: ["./Teemo.png"]});
          }
        }
        if(args[0].toLowerCase() == "nidalee"){
        if(args[1]){
          switch(args[1].toLowerCase()){
          case "q":
            message.channel.send("In human form Nidalee throws a spear and in cougar form she scratches the enemy");
            break;
          case "w":
            message.channel.send("In human form she uses her survival powers to heal herself and in cougar form she dashes");
            break;
          case "e":
            message.channel.send("In human form she lays a trap down, when hit the enemy gets marked and recieves 150% damage form nidalee's next attack, in cougar form she bites the enemy");
            break;
          case "r":
            message.channel.send("Nidalee switches form human to cougar or the other way around");
            break;
          }
        } else {
          message.channel.send("Nidalee is a master of the hunt using her cougar senses and form to hunt her enemies down", {files: ["./Nidalee.png"]});
        }
      }
      if(args[0].toLowerCase() == "vladimir"){
        if(args[1]){
          switch(args[1].toLowerCase()){
          case "q":
            message.channel.send("Vladimir sucks the blood out of the enemy healing himself for a lot");
            break;
          case "w":
            message.channel.send("Vladimir becomes a pool of blood and can not get hit in this time");
            break;
          case "e":
            message.channel.send("Vladimir shoots blood out of his body dealing damage to himself as well");
            break;
          case "r":
            message.channel.send("Vladimir spawns his mark on the enemy wich detonates after three turns, dealing damage and healing himself");
            break;
          }
        } else {
          message.channel.send("Vladimir is a vampire who uses bloodmagic and he heals a lot", {files: ["./Vladimir.png"]});
        }
      }
      
    }
  }
};
