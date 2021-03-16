
module.exports = {
  name:"fight",
  discription:"battle untill death",
  args: true,
  usage: "<opponent>",
  execute(message, args){
    
    // hier begint de eigenlijke code
    
    //hier zeg ik wie de zender is en wie gevraagd wordt te vechten
    const sender = message.author.username;
    const taggedUser = message.mentions.users.first();
    
    if(taggedUser.id == message.author.id){
      return message.reply("you fought yourself and lost idiot");
    }
    
    //hier zeg ik dat je de bot niet kan vechten
    if(taggedUser.bot === true){
      return message.reply("you fought a bot and lost because bots are superior");
    }
    
    //hier geef ik info over de spelers en champions
    var p1 = {
      id:message.author.id,
      name:message.author.toString(),
      champ:"",
      speed:"",
      health:1,
      maxhealth:0,
      hardcc:false,
      hardcctimer:0,
      hardccform: "nothing",
      airborne:false,
      slowed:false,
      dashing:false,
      dashTimer:0,
      protect:false,
      DOT:false,
      DOTtimer:0,
      DOTrecieve:0,
      bombed: false,
      qcount:0,
      shape: 0,
      marked:false,
      rcountdown:-1
    };
    var p2 = {
      id:taggedUser.id,
      name:taggedUser,
      champ:"",
      speed:"",
      health:1,
      maxhealth:0,
      hardcc:false,
      hardcctimer:0,
      hardccform: "nothing",
      airborne:false,
      slowed:false,
      dashing:false,
      dashTimer: 0,
      protect:false,
      DOT:false,
      DOTtimer:0,
      DOTrecieve:0,
      bombed:false,
      qcount:0,
      shape:1,
      marked:false,
      rcountdown:-1
    };
    
    //dit is hetzelfde als sender & taggedUser
    var challenged = taggedUser.toString();
    var challenger = message.author.toString();
    
    //info over de champions
    var ahri ={
      health:800,
      speed:50,
      qdmg:100,
      qheal:50,
      wdmg:40,
      wcount:3,
      edmg:30,
    };
    var vladimir = {
      health: 850,
      speed:50,
      qdmg:50,
      qheal:100,
      edmg:150,
      ereturndmg:100,
      rdmg:150,
      rheal:150
    };
    var nidalee ={
      health :750,
      speed : 50,
      qdmg:150,
      qdmg2:100,
      wheal:100,
      edmg2:50,
      eheal:50,
    };
    var darius ={
      health:950,
      speed:50,
      qdmg:70,
      qheal:50,
      wdmg:100,
      edmg: 50,
      rdmg:150,
      rdmgexecute:250
    };
    var teemo ={
      health:750,
      speed:50,
      qdmg: 50,
      edmg:40,
      rdmg:50,
    };
    var lux ={
      health:800,
      speed:50,
      qdmg:40,
      wshield:50,
      edmg:100,
      rdmg:150
      
    };
    var yasuo ={
      health:850,
      speed:50,
      qdmg:60,
      qcount:0,
      edmg:10,
      eqdmg:70,
      rdmg:300
    };
    
    //eerst vraag ik of de ontvanger wil vechten
    message.channel.send(`${challenged}, ${challenger} challenged you to a duel. type accept or deny`)
      .then(() => {           //hier filtert hij accept en deny eruit
        message.channel.awaitMessages(response => (response.content.toLowerCase() == "accept" || response.content.toLowerCase() == "deny") && response.author.id == p2.id, {
        max: 1,
        time: 30000,
        errors: ["time"],
      })
      .then((collected) => {              // hier zeg ik wat hij moet doen bij accept
        if(collected.first().content.toLowerCase() == "accept"){            //hier vraag ik welke champion de 2e player wilt spelen
          message.channel.send(`${challenged} has accepted the challenge!, now ${challenged}, What champion do you want to play? here are your options: Ahri, Teemo, Darius, Lux, Yasuo, Vladimir or Nidalee`)
          .then(() => {                                         //hier filter ik de champions uit zijn antwoord
            message.channel.awaitMessages(response => (response.content.toLowerCase() == "ahri", "teemo", "darius", "lux", "yasuo", "nidalee", "vladimir") && response.author.id == p2.id, {
                max: 1,
                time: 30000,
                errors: ["time"],
                })
            .then((collected) => {      //hier zeg ik wie hij heeft gekozen
                p2.champ = collected.first().content.toLowerCase();
                switch(collected.first().content.toLowerCase()){
                  case "ahri":                                                        //hier assign ik de health van de champion naar de health van de speler
                    p2.health = ahri.health;
                    break;
                  case "lux":
                    p2.health = lux.health;
                    break;
                  case "teemo":
                    p2.health = teemo.health;
                    break;
                  case "darius":
                    p2.health = darius.health;
                    break;
                  case "yasuo":
                    p2.health = yasuo.health;
                    break;
                  case "nidalee":
                    p2.health = nidalee.health;
                    break;
                  case "vladimir":
                    p2.health = vladimir.health;
                    break;
                }
                message.channel.send(`${challenged} choose ${p2.champ}`)
                .then(() => {
                  message.channel.send(`${challenger} choose your champion`);         // hier vraag ik welke champion de 1e speler wilt
                  message.channel.awaitMessages(response => (response.content.toLowerCase() == "ahri", "teemo", "darius", "lux", "yasuo", "nidalee", "vladimir") && response.author.id == p1.id, {
                max: 1,
                time: 30000,
                errors: ["time"],
                })
                .then((collected) => {
                  p1.champ = collected.first().content.toLowerCase();
                  switch(collected.first().content.toLowerCase()){
                  case "ahri":                                                        //hier assign ik de health van de champion naar de health van de speler
                    p1.health = ahri.health;
                    break;
                  case "lux":
                    p1.health = lux.health;
                    break;
                  case "teemo":
                    p1.health = teemo.health;
                    break;
                  case "darius":
                    p1.health = darius.health;
                    break;
                  case "yasuo":
                    p1.health = yasuo.health;
                    break;
                  case "nidalee":
                    p1.health = nidalee.health;
                    break;
                  case "vladimir":
                    p1.health = vladimir.health;
                    break;
                }
                  message.channel.send(`${challenger} choose ${p1.champ}`)  //hier zeg ik wie hij heeft gekozen
                  .then(() => {           //hier vraag ik welke ability hij wilt gebruiken
                    message.channel.send(`${challenged}, you got the first move! press q, w, e or r. check ~bio <champion> <ability> if you want to know what they do.`);               //hier filter ik zijn antwoord eruit
                    message.channel.awaitMessages(response => (response.content.toLowerCase() == "q" || response.content.toLowerCase() == "w" || response.content.toLowerCase() == "e" || response.content.toLowerCase() == "eq"|| response.content.toLowerCase() == "r") && response.author.id == p2.id, {
                      max: 1,
                      time: 30000,
                      errors: ["time"],
                      })
                      .then((collected) => {
                        p2.maxhealth = p2.health;
                        p1.maxhealth = p1.health;
                        switch(p2.champ){
                          case "ahri":      //hier check ik welk champion player 2 heeft gekozen en welke ability
                             switch(collected.first().content.toLowerCase()){
                                case "q":                                                 //en hier staat wat hij bij welke ability moet doen
                                 dealDamage(p2, p1, ahri.qdmg);
                                 heal(p2, ahri.qheal);
                                 break;
                                case "w":
                                  dealDamage(p2,p1,ahri.wdmg);
                                  if(p1.protect === false){
                                  p1.DOT = true;
                                  p1.DOTtimer = 3;
                                  p1.DOTrecieve = ahri.wdmg;
                                  }
                                 break;
                                case "e":
                                  dealDamage(p2,p1,ahri.edmg, true, "charmed", 1);
                                 break;
                                case "r":
                                  p2.dashing = true;
                                  p2.dashTimer = 6;
                                  message.channel.send(`${challenged} dashed`);
                                 break;
                             }
                            break;
                            case "lux":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p2, p1, lux.qdmg, true, "rooted", 1);
                                 break;
                                case "w":
                                  heal(p2,lux.wshield);
                                 break;
                                case "e":
                                  dealDamage(p2,p1,lux.edmg, true, "slowed", 1);
                                 break;
                                case "r":
                                  dealDamage(p2, p1, lux.rdmg);
                                 break;
                              }
                              break;
                            case "teemo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p2, p1, teemo.qdmg, false, "", 0, false, true);
                                 break;
                                case "w":
                                  p2.dashing = true;
                                  p2.dashTimer = 3;
                                  message.channel.send(`${challenged} dashed`);
                                 break;
                                case "e":
                                  dealDamage(p2,p1,teemo.edmg);
                                  if(p1.protect === false){
                                  p1.DOT = true;
                                  p1.DOTtimer = 3;
                                  p1.DOTrecieve = teemo.edmg;
                                  }
                                  break;
                                case "r":
                                  p2.bombed = true;
                                  break;
                              }
                              break;
                             case "darius":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p2, p1, darius.qdmg);
                                 heal(p2, darius.qheal);
                                 break;
                                case "w":
                                  dealDamage(p2, p1, darius.wdmg, true, "slowed", 1);
                                  break;
                                case "e":
                                  dealDamage(p2,p1, darius.edmg, true, "airborne", 1);
                                 break;
                                case "r":
                                  if(p1.health > darius.rdmgexecute){
                                  dealDamage(p2, p1, darius.rdmg);
                                  } else {
                                  dealDamage(p2, p1, darius.rdmgexecute);
                                  message.channel.send("AND THEN WE JUST SLAAAAM ON TOP OF THEM");
                                  }
                                 break;
                              }
                              break;
                            case "yasuo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if(p2.qcount >= 2){
                                    dealDamage(p2, p1, yasuo.qdmg, true, "airborne", 1);
                                  }else{
                                    dealDamage(p2, p1, yasuo.qdmg);
                                    p2.qcount++;
                                  }
                                  break;
                                case "w":
                                  p2.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p2, p1, yasuo.edmg);
                                  p2.dashing = true;
                                  p2.dashTimer = 1;
                                  message.channel.send(`${challenged} dashed`);
                                  break;
                                case "eq":
                                  dealDamage(p2, p1, yasuo.eqdmg);
                                  p2.dashing = true;
                                  p2.dashTimer = 1;
                                  message.channel.send(`${challenged} dashed`);
                                  p2.qcount++;
                                  break;
                                case "r":
                                  if(p1.hardcc === true){
                                    dealDamage(p2, p1, yasuo.rdmg);
                                    p2.qcount = 0;
                                  } else{
                                    message.channel.send(`${challenger} is not airborne so you use q instead`);
                                    if(p2.qcount >= 2){
                                      dealDamage(p2, p1, yasuo.qdmg, true, "airborne", 1);
                                    }else{
                                      dealDamage(p2, p1, yasuo.qdmg);
                                      p2.qcount++;
                                    }
                                  }
                              }
                              break;
                              case "nidalee":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if (p2.shape === 0){
                                    dealDamage(p2, p1, nidalee.qdmg);
                                  }else{
                                    dealDamage(p2, p1, nidalee.qdmg2)
                                  }
                                 break;
                                case "w":
                                  if(p2.shape === 0){
                                  heal(p2, nidalee.wheal);
                                  }else {
                                    p2.dashing = true;
                                    p2.dashTimer = 2;
                                    message.channel.send(`${challenged} dashed`);
                                  }
                                  break;
                                case "e":
                                  if (p2.shape === 0){
                                    p2.bombed = true;
                                  }else {
                                    dealDamage(p2, p1, nidalee.edmg2);
                                  }
                                 break;
                                case "r":
                                  message.channel.send(`${challenged} switched shape!`)
                                  if(p2.shape === 0){
                                    p2.shape = 1;
                                  }else{
                                    p2.shape = 0;
                                  }
                                 break;
                              }
                              break;
                            case "vladimir":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p2, p1, vladimir.qdmg);
                                 heal(p2, vladimir.qheal);
                                 break;
                                case "w":
                                  p2.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p2,p1, vladimir.edmg);
                                  dealDamage(p2, p2, vladimir.ereturndmg)
                                 break;
                                case "r":
                                  p1.rcountdown = 3;
                                 break;
                              }
                              break;
                          
                        }                                       //hier vraag ik welke ability hij wilt gebruiken
                         message.channel.send(`${challenger}, your move! press q, w, e or r. check ~bio <champion> <ability> if you want to know what they do.`)
                        .then(() => {
                          message.channel.awaitMessages(response => (response.content.toLowerCase() == "q" || response.content.toLowerCase() == "w" || response.content.toLowerCase() == "e" || response.content.toLowerCase() == "eq"|| response.content.toLowerCase() == "r") && response.author.id == p1.id, {
                            max: 1,
                            time: 30000,
                            errors: ["time"],
                          })
                          .then((collected) => {
                            switch(p1.champ){             //hier check ik welk champion player 1 heeft gekozen en welke ability
                              case "ahri":
                                switch(collected.first().content.toLowerCase()){        //en hier staat wat hij bij welke ability moet doen
                                case "q":
                                 dealDamage(p1, p2, ahri.qdmg, false);
                                 heal(p1, ahri.qheal);
                                 break;
                                case "w":
                                  dealDamage(p1,p2,ahri.wdmg);
                                  if(p2.protect === false){
                                  p2.DOT = true;
                                  p2.DOTtimer = 3;
                                  p2.DOTrecieve = ahri.wdmg;
                                  }
                                 break;
                                case "e":
                                  dealDamage(p1,p2,ahri.edmg, true, "charmed", 2);
                                 break;
                                case "r":
                                  p1.dashing = true;
                                  p1.dashTimer = 1;
                                  message.channel.send(`${challenger} dashed`);
                                 break;
                                }
                                break;
                              case "lux":
                                switch(collected.first().content.toLowerCase()){
                                  case "q":
                                   dealDamage(p1, p2, lux.qdmg, true, "rooted", 2);
                                   break;
                                  case "w":
                                    heal(p1,lux.wshield);
                                   break;
                                  case "e":
                                    dealDamage(p1,p2,lux.edmg, true, "slowed", 2);
                                   break;
                                  case "r":
                                    dealDamage(p1, p2, lux.rdmg);
                                   break;
                                }
                                break;
                              case "teemo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p1, p2, teemo.qdmg, false, "", 0, false, true);
                                 break;
                                case "w":
                                  p1.dashing = true;
                                  p1.dashTimer = 3;
                                  message.channel.send(`${challenger} dashed`);
                                 break;
                                case "e":
                                  dealDamage(p1,p2,teemo.edmg);
                                  if(p2.protect === false)
                                  p2.DOT = true;
                                  p2.DOTtimer = 3;
                                  p2.DOTrecieve = teemo.edmg;
                                  break;
                                case "r":
                                  p1.bombed = true;
                                  break;
                              }
                              break;
                            case "darius":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p1, p2, darius.qdmg);
                                 heal(p1, darius.qheal);
                                 break;
                                case "w":
                                  dealDamage(p1, p2, darius.wdmg, true, "slowed", 2);
                                  break;
                                case "e":
                                  dealDamage(p1,p2, darius.edmg, true, "airborne", 2);
                                 break;
                                case "r":
                                  if(p2.health > darius.rdmgexecute){
                                  dealDamage(p1, p2, darius.rdmg);
                                  } else {
                                  dealDamage(p1, p2, darius.rdmgexecute);
                                  message.channel.send("AND THEN WE JUST SLAAAAM ON TOP OF THEM");
                                  }
                                 break;
                              }
                              break;
                            case "yasuo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if(p1.qcount >= 2){
                                    dealDamage(p1, p2, yasuo.qdmg, true, "airborne", 2);
                                  }else{
                                    dealDamage(p1, p2, yasuo.qdmg);
                                    p1.qcount++;
                                  }
                                  break;
                                case "w":
                                  p1.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p1, p2, yasuo.edmg);
                                  p1.dashing = true;
                                  p1.dashTimer = 1;
                                  message.channel.send(`${challenger} dashed`);
                                  break;
                                case "eq":
                                  dealDamage(p1, p2, yasuo.eqdmg);
                                  p1.dashing = true;
                                  p1.dashTimer = 1;
                                  message.channel.send(`${challenger} dashed`);
                                  p1.qcount++;
                                  break;
                                case "r":
                                  if(p2.hardcc === true){
                                    dealDamage(p1, p2, yasuo.rdmg);
                                    p1.qcount = 0;
                                  } else{
                                    message.channel.send(`${challenger} is not airborne so you use q instead`);
                                    if(p1.qcount >= 2){
                                      dealDamage(p1, p2, yasuo.qdmg, true, "airborne", 2);
                                    }else{
                                      dealDamage(p1, p2, yasuo.qdmg);
                                      p1.qcount++;
                                    }
                                  }
                              }
                              break;
                            case "nidalee":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if (p1.shape === 0){
                                    dealDamage(p1, p2, nidalee.qdmg);
                                  }else{
                                    dealDamage(p1, p2, nidalee.qdmg2)
                                  }
                                 break;
                                case "w":
                                  if(p1.shape === 0){
                                  heal(p1, nidalee.wheal);
                                  }else {
                                    p1.dashing = true;
                                    p1.dashTimer = 2;
                                    message.channel.send(`${challenger} dashed`);
                                  }
                                  break;
                                case "e":
                                  if (p1.shape === 0){
                                    p1.bombed = true;
                                  }else {
                                    dealDamage(p1, p2, nidalee.edmg2);
                                  }
                                 break;
                                case "r":
                                  if(p1.shape === 0){
                                    p1.shape = 1;
                                    message.channel.send(`${challenger} switched shape`);
                                  }else{
                                    p1.shape = 0;
                                    message.channel.send(`${challenger} switched shape`);
                                  }
                                 break;
                              }
                              break;
                            case "vladimir":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p1, p2, vladimir.qdmg);
                                 heal(p1, vladimir.qheal);
                                 break;
                                case "w":
                                  p1.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p1, p2, vladimir.edmg);
                                  dealDamage(p1, p1, vladimir.ereturndmg)
                                 break;
                                case "r":
                                  p2.rcountdown = 3;
                                 break;
                              }
                              break;
                            }
                            
                            newTurn(); //hier zeg ik doe nog een turn
                          })
                          .catch(() => {        //de catch wordt gebruikt bij een error of als hij er te lang over doet
                            message.channel.send(`${challenger} didn't choose fast enough so the fight was cancelled 4`);
                          });
                        });
                        })
                     .catch(() => {
                  message.channel.send(`${challenged} didn't choose fast enough so the fight was cancelled 3`);
                });
                  });
                })
                .catch(() => {
                  message.channel.send(`${challenger} didn't choose fast enough so the fight was cancelled 2`);
                });
                });
            })
            .catch(() => {
            message.channel.send(`${challenged} didn't choose fast enough so the fight was cancelled 1`);
          });
          });
        } else if (collected.first().content.toLowerCase() == "deny"){
          message.channel.send(`${challenged} fled from battle`);       //hier zeg ik wat hij moet doen als er deny wordt geantwoord
        }
      })
      .catch(() => {
        message.channel.send(`${challenged} is blind and thus the fight is cancelled`); // en hier als er niet op tijd geantwoord wordt
      });
    });
    function newTurn(){
                                                // hier zeg ik nog wat stats voor de spelers die elke turn veranderen
      p1.speed = 50;
      p2.speed = 50;
      
      p1.rcountdown--;
      p2.rcountdown--;
      if(p1.rcountdown === 0){
        dealDamage(p2, p1, vladimir.rdmg)
        heal(p2, vladimir.rheal)
      }
      if(p2.rcountdown === 0){
        dealDamage(p1, p2, vladimir.rdmg)
        heal(p1, vladimir.rheal)
      }
      
      if(p1.hardcctimer > 0){
        p1.hardcctimer--;
      }else {
        p1.hardcc = false;
        p1.hardccform = "nothing"
      }
      
      if(p2.hardcctimer > 0){
        p2.hardcctimer--;
      }else {
        p2.hardcc = false;
        p2.hardccform = "nothing"
      }
      
      if(p2.DOTtimer > 0 && p2.DOT === true){
      dealDamage(p1,p2, p2.DOTrecieve, false, "", 0, true);
      p2.DOTtimer -= 1;
      } else {
        p2.DOT = false;
      }
      if(p1.DOTtimer > 0 && p1.DOT === true){
      dealDamage(p2,p1, p1.DOTrecieve, false, "", 0, true);
      p1.DOTtimer-= 1;
      } else{
        p1.DOT = false;
      }
      if(p1.slowed){
        p1.speed -= 20;
      }
      if(p2.slowed){
        p2.speed -= 20;
      }
      if(p1.dashTimer > 0){
        p1.dashing = true;
        p1.dashTimer--;
      } else {
        p1.dashing = false;
      }
      if(p2.dashTimer > 0){
        p2.dashing = true;
        p2.dashTimer--;
      } else {
        p2.dashing = false;
      }
      if(p1.dashing){
        p1.speed += 30;
      }
      if(p2.dashing){
        p2.speed += 30;
      }
      
      showStats();                  //hier zeg ik dat hij de health en speed moet displayen van de spelers
      
            if(p1.health <= 0){
        message.channel.send(`${challenged} won!`);       //hier zeg ik wie gewonnen heeft
      } else if(p2.health <= 0){
          message.channel.send(`${challenger} won!`);
      }else{                                  //dit is weer hetzelfde als eerst, ik check hier de ability
      message.channel.send(`${challenged}, your move! press q, w, e or r. check ~bio <champion> <ability> if you want to know what they do.`)
        .then(() => {
          message.channel.awaitMessages(response => (response.content.toLowerCase() == "q" || response.content.toLowerCase() == "w" || response.content.toLowerCase() == "e" || response.content.toLowerCase() == "eq"|| response.content.toLowerCase() == "r") && response.author.id == p2.id, {
          max: 1,
          time: 30000,
          errors: ["time"],
          })
            .then((collected) => {
              
              switch(p2.champ){
                case "ahri":            //hier zeg ik wat de champion moet doen
                  switch(collected.first().content.toLowerCase()){
                    case "q":
                      dealDamage(p2, p1, ahri.qdmg);
                      heal(p2, ahri.qheal);
                      break;
                    case "w":
                      dealDamage(p2,p1,ahri.wdmg);
                      if(p1.protect === false){
                      p1.DOT = true;
                      p1.DOTtimer = 3;
                      p1.DOTrecieve = ahri.wdmg;
                      }
                      break;
                    case "e":
                      dealDamage(p2,p1,ahri.edmg, true, "charmed", 1);
                      break;
                    case "r":
                      p2.dashing = true;
                      p2.dashTimer = 1;
                      message.channel.send(`${challenged} dashed`);
                      break;
                   }
                break;
              case "lux":
                switch(collected.first().content.toLowerCase()){
                  case "q":
                    dealDamage(p2, p1, lux.qdmg, true, "rooted", 1);
                    break;
                  case "w":
                    heal(p2,lux.wshield);
                    break;
                  case "e":
                    dealDamage(p2,p1,lux.edmg, true, "slowed", 1);
                    break;
                  case "r":
                    dealDamage(p2, p1, lux.rdmg);
                    break;
                }
                break;
              case "teemo":
                switch(collected.first().content.toLowerCase()){
                  case "q":
                    dealDamage(p2, p1, teemo.qdmg, false, "", 0, false, true);
                    break;
                  case "w":
                    p2.dashing = true;
                    p2.dashTimer = 3;
                    message.channel.send(`${challenged} dashed`);
                    break;
                  case "e":
                    dealDamage(p2,p1,teemo.edmg);
                    if(p1.protect === false){
                      p1.DOT = true;
                      p1.DOTtimer = 3;
                      p1.DOTrecieve = teemo.edmg;
                    }
                    break;
                  case "r":
                    p2.bombed = true;
                    break;
                }
                break;
              case "darius":
                switch(collected.first().content.toLowerCase()){
                  case "q":
                    dealDamage(p2, p1, darius.qdmg);
                    heal(p2, darius.qheal);
                    break;
                  case "w":
                    dealDamage(p2, p1, darius.wdmg, true, "slowed", 1);
                    break;
                  case "e":
                    dealDamage(p2,p1, darius.edmg, true, "airborne", 1);
                    break;
                  case "r":
                    if(p1.health > darius.rdmgexecute){
                      dealDamage(p2, p1, darius.rdmg);
                    } else {
                      dealDamage(p2, p1, darius.rdmgexecute);
                      message.channel.send("AND THEN WE JUST SLAAAAM ON TOP OF THEM");
                    }
                    break;
                  }
                break;
                case "yasuo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if(p2.qcount >= 2){
                                    dealDamage(p2, p1, yasuo.qdmg, true, "airborne", 1);
                                  }else{
                                    dealDamage(p2, p1, yasuo.qdmg);
                                    p2.qcount++;
                                  }
                                  break;
                                case "w":
                                  p2.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p2, p1, yasuo.edmg);
                                  p2.dashing = true;
                                  p2.dashTimer = 1;
                                  message.channel.send(`${challenged} dashed`);
                                  break;
                                case "eq":
                                  p2.dashing = true;
                                  p2.dashTimer = 1;
                                  message.channel.send(`${challenged} dashed`);
                                  if(p2.qcount >= 2){
                                    dealDamage(p2, p1, yasuo.eqdmg, true, "airborne", 1);
                                  }else{
                                    dealDamage(p2, p1, yasuo.eqdmg);
                                    p2.qcount++;
                                  }
                                  break;
                                case "r":
                                  if(p1.hardcc === true){
                                    dealDamage(p2, p1, yasuo.rdmg);
                                    p2.qcount = 0;
                                  } else{
                                    message.channel.send(`${challenger} is not airborne so you use q instead`);
                                    if(p2.qcount >= 2){
                                      dealDamage(p2, p1, yasuo.qdmg);
                                    }else{
                                      dealDamage(p2, p1, yasuo.qdmg);
                                      p2.qcount++;
                                    }
                                  }
                              }
                              break;
                            case "nidalee":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if (p2.shape === 0){
                                    dealDamage(p2, p1, nidalee.qdmg);
                                  }else{
                                    dealDamage(p2, p1, nidalee.qdmg2)
                                  }
                                 break;
                                case "w":
                                  if(p2.shape === 0){
                                  heal(p2, nidalee.wheal);
                                  }else {
                                    p2.dashing = true;
                                    p2.dashTimer = 2;
                                    message.channel.send(`${challenged} dashed`);
                                  }
                                  break;
                                case "e":
                                  if (p2.shape === 0){
                                    p2.bombed = true;
                                  }else {
                                    dealDamage(p2, p1, nidalee.edmg2);
                                  }
                                 break;
                                case "r":
                                  message.channel.send(`${challenged} switched shape`)
                                  if(p2.shape === 0){
                                    p2.shape = 1;
                                  }else{
                                    p2.shape = 0;
                                  }
                                 break;
                              }
                              break;
                            case "vladimir":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p2, p1, vladimir.qdmg);
                                 heal(p2, vladimir.qheal);
                                 break;
                                case "w":
                                  p2.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p2,p1, vladimir.edmg);
                                  dealDamage(p2, p2, vladimir.ereturndmg)
                                 break;
                                case "r":
                                  p1.rcountdown = 3;
                                 break;
                              }
                              break;
              }
              
              if(p1.health <= 0){
                message.channel.send(`${challenged} won!`);       //hier zeg ik wie gewonnen heeft
              } else if(p2.health <= 0){
                message.channel.send(`${challenger} won!`);
              }else {
              message.channel.send(`${challenger}, your move! press q, w, e or r. check ~bio <champion> <ability> if you want to know what they do.`)
                .then(() => {
                  message.channel.awaitMessages(response => (response.content.toLowerCase() == "q" || response.content.toLowerCase() == "w" || response.content.toLowerCase() == "e" || response.content.toLowerCase() == "eq"|| response.content.toLowerCase() == "r") && response.author.id == p1.id, {
                      max: 1,
                      time: 30000,
                      errors: ["time"],
                  })
                    .then((collected) => {
                      
                      switch(p1.champ){
                        case "ahri":
                          switch(collected.first().content.toLowerCase()){
                            case "q":
                              dealDamage(p1, p2, ahri.qdmg);
                              heal(p1, ahri.qheal);
                              break;
                            case "w":
                              dealDamage(p1,p2,ahri.wdmg);
                              if(p2.protect === false){
                              p2.DOT = true;
                              p2.DOTtimer = 3;
                              p2.DOTrecieve = ahri.wdmg;
                              }
                              break;
                            case "e":
                              dealDamage(p1,p2,ahri.edmg, true, "charmed", 2);
                              break;
                            case "r":
                              p1.dashing = true;
                              p1.dashTimer = 1;
                              message.channel.send(`${challenger} dashed`);
                              break;
                          }
                          break;
                        case "lux":
                          switch(collected.first().content.toLowerCase()){
                            case "q":
                              dealDamage(p1, p2, lux.qdmg, true, "rooted", 2);
                              break;
                            case "w":
                              heal(p1,lux.wshield);
                              break;
                            case "e":
                              dealDamage(p1,p2,lux.edmg, true, "slowed", 2);
                              break;
                            case "r":
                              dealDamage(p1, p2, lux.rdmg);
                              break;
                          }
                          break;
                        case "teemo":
                          switch(collected.first().content.toLowerCase()){
                            case "q":
                              dealDamage(p1, p2, teemo.qdmg, false, "", 0, false, true);
                              break;
                            case "w":
                              p1.dashing = true;
                              p1.dashTimer = 3;
                              message.channel.send(`${challenger} dashed`);
                              break;
                            case "e":
                              dealDamage(p1,p2,teemo.edmg);
                              if(p2.protect === false){
                              p2.DOT = true;
                              p2.DOTtimer = 3;
                              p2.DOTrecieve = teemo.edmg;
                              }
                              break;
                            case "r":
                              p1.bombed = true;
                              break;
                          }
                          break;
                        case "darius":
                          switch(collected.first().content.toLowerCase()){
                            case "q":
                              dealDamage(p1, p2, darius.qdmg);
                              heal(p1, darius.qheal);
                              break;
                            case "w":
                              dealDamage(p1, p2, darius.wdmg, true, "slowed", 1);
                              break;
                            case "e":
                              dealDamage(p1,p2, darius.edmg, true, "airborne", 1);
                              break;
                            case "r":
                              if(p2.health > darius.rdmgexecute){
                                dealDamage(p1, p2, darius.rdmg);
                              } else {
                                dealDamage(p1, p2, darius.rdmgexecute);
                                message.channel.send("AND THEN WE JUST SLAAAAM ON TOP OF THEM");
                              }
                              break;
                          }
                          break;
                          case "yasuo":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if(p1.qcount >= 2){
                                    dealDamage(p1, p2, yasuo.qdmg, true, "airborne", 1);
                                  }else{
                                    dealDamage(p1, p2, yasuo.qdmg);
                                    p1.qcount++;
                                  }
                                  break;
                                case "w":
                                  p1.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p1, p2, yasuo.edmg);
                                  p1.dashing = true;
                                  p1.dashTimer = 1;
                                  message.channel.send(`${challenger} dashed`);
                                  break;
                                case "eq":
                                  p1.dashing = true;
                                  p1.dashTimer = 1;
                                  message.channel.send(`${challenger} dashed`);
                                  if(p1.qcount >= 2){
                                    dealDamage(p1, p2, yasuo.eqdmg, true, "airborne", 1);
                                  }else{
                                    dealDamage(p1, p2, yasuo.eqdmg);
                                    p1.qcount++;
                                  }
                                  break;
                                case "r":
                                  if(p2.hardcc === true){
                                    dealDamage(p1, p2, yasuo.rdmg);
                                    p1.qcount = 0;
                                  } else{
                                    message.channel.send(`${challenger} is not airborne so you use q instead`);
                                    if(p1.qcount >= 2){
                                      dealDamage(p1, p2, yasuo.qdmg, true, "airborne", 1);
                                    }else{
                                      dealDamage(p1, p2, yasuo.qdmg);
                                      p1.qcount++;
                                    }
                                  }
                              }
                              break;
                            case "nidalee":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                  if (p1.shape === 0){
                                    dealDamage(p1, p2, nidalee.qdmg);
                                  }else{
                                    dealDamage(p1, p2, nidalee.qdmg2)
                                  }
                                 break;
                                case "w":
                                  if(p1.shape === 0){
                                  heal(p1, nidalee.wheal);
                                  }else {
                                    p1.dashing = true;
                                    p1.dashTimer = 2;
                                    message.channel.send(`${challenger} dashed`);
                                  }
                                  break;
                                case "e":
                                  if (p1.shape === 0){
                                    p1.bombed = true;
                                  }else {
                                    dealDamage(p1, p2, nidalee.edmg2);
                                  }
                                 break;
                                case "r":
                                  message.channel.send(`${challenger} switched shape`)
                                  if(p1.shape === 0){
                                    p1.shape = 1;
                                  }else{
                                    p1.shape = 0;
                                  }
                                 break;
                              }
                              break;
                            case "vladimir":
                              switch(collected.first().content.toLowerCase()){
                                case "q":
                                 dealDamage(p1, p2, vladimir.qdmg);
                                 heal(p1, vladimir.qheal);
                                 break;
                                case "w":
                                  p1.protect = true;
                                  break;
                                case "e":
                                  dealDamage(p1, p2, vladimir.edmg);
                                  dealDamage(p1, p1, vladimir.ereturndmg)
                                 break;
                                case "r":
                                  p2.rcountdown = 3;
                                 break;
                              }
                              break;
                      }
                      
                      if(p1.health <= 0){
                        p1.health = 0;
                        message.channel.send(`${challenged} won!`);       //hier zeg ik wie gewonnen heeft
                      } else if(p2.health <= 0){
                        p2.health = 0;
                        message.channel.send(`${challenger} won!`);
                      }else{
                      newTurn();
                      }
                    })
                    .catch(() => {
                      message.channel.send(`${challenger} didn't choose fast enough so the fight was cancelled 6`);
                    });
                })
              }
            })
            .catch(() => {
              message.channel.send(`${challenged} didn't choose fast enough so the fight was cancelled 5`);
            });
            
        })
      }
    }
    function dealDamage(dealer, reciever, amount, cc, form, ccDuration, dot, protecc){     //hier zeg ik wat hij moet doen als er aangevallen wordt
      var r = Math.floor(Math.random() * 100);                                            //hier geef ik een willekeurig getal tussen de 0 en 100
      if(reciever.protect === false){                                                     //hier check ik of de aangevallene protected is
        if(reciever.id != dealer.id){
        if (reciever.speed< r || reciever.hardcc === true || dot === true){               //hier check ik met het willekeurige getal of de aanval raakt
            if (!reciever.marked){
            reciever.health -= amount;
            message.channel.send(`${dealer.name} dealt ${amount} damage to ${reciever.name}`);
            } else {
              amount *= 1.5;
              reciever.health -= (amount);
              message.channel.send(`${dealer.name} dealt ${amount} damage to ${reciever.name}`);
              reciever.marked =false;
            }
            if(reciever.bombed === true){
              if(reciever.champ == "teemo"){
              dealer.DOT = true;
              dealer.DOTtimer = 4;
              dealer.DOTrecieve = teemo.rdmg;
              reciever.bombed = false;
              givecc(dealer, "slowed", 1);
              message.channel.send(`${dealer.name} is poisoned by ${reciever.name} because traps exist`);
              }else if(reciever.champ == "nidalee"){
                dealer.marked = true;
                reciever.bombed = false;
                message.channel.send(`${dealer.name} is marked by ${reciever.name} because traps exist`);
              }
            }
          if(cc){
            givecc(reciever, form, ccDuration);
          }
          
          if(protecc){
            dealer.protect = true;
          }
        } else{
          message.channel.send(`${dealer.name} missed like an idiot`)
        }
      }else{
        reciever.health -= amount;
        message.channel.send(`${reciever.name} dealt ${amount} damage to himself`);
      }
      }else{
        message.channel.send(`${reciever.name} protected himself`)
        reciever.protect = false;
      }
    }
    function heal(reciever, amount){          //hier wat hij moet doen als iemand gehealed wordt
      reciever.health += amount;
      message.channel.send(`${reciever.name} healed for ${amount}`);

    if(reciever.health > reciever.maxhealth){
      reciever.health = reciever.maxhealth;
      message.channel.send(`${reciever.name}'s health is maxed out`);

    }
    }
    function givecc(reciever, form, ccDuration){        //dit is om iemand te kunnen charmen, stunnen of slowen
      if(form != "slowed"){
          try{
          reciever.hardcc = true;
          message.channel.send(`${reciever.name} is ${form}`);
          reciever.hardcctimer = ccDuration;
          reciever.hardccform = form;
          } catch(e) {
            
          }
        
      }else if(form == "slowed"){
          try{
          reciever.slowed = true;
          message.channel.send(`${reciever.name} is ${form}`);
          }catch (e) {
            
          }
        
      }
    }
    function showStats(){   //dit is om de stats te laten zien zoals ik eerder zei
      message.channel.send(`
      ${p1.name}:
      Health: ${p1.health}
      Speed: ${p1.speed}

      ${p2.name}:
      Health: ${p2.health}
      Speed: ${p2.speed}`);
      
    }
  }
}