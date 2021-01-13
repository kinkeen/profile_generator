const readline = require('readline'); //import the readline from node
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What is your name? Nicknames are also acceptable 😊: ',  (userName) => {
  rl.question('What\'s\ an activity you like doing? 😊: ',  (userActivity) => {
    rl.question('What do you listen to while doing that? 😊: ',  (userMusic) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)',  (userMeal) => {
        rl.question('What\'s\ your favourite thing to eat for that meal?? 😊: ',  (userFood) => {
          rl.question('Which sport is your absolute favourite?: ',  (userSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ',  (userPower) => {
             console.log(`${userName} loves listening to ${userMusic} while ${userActivity}, devouring ${userFood} for \n ${userMeal}, prefers ${userSport} over any other sport, and is amazing at \n ${userPower}.`)
             rl.close()
            });
          });
        });
      });
    });
  });
});
