var tracery = require("tracery-grammar");

var grammar = tracery.createGrammar({
  attempt: [
    "has to",
    "wants to",
    "tries to",
    "is tricked in to",
    "loses a bet and has to",
    "confusingly tries to",
    "mistakingly gets to"
  ],
  modified_attempt: [
    "#attempt#",
    "#attempt#",
    "#attempt#",
    "#attempt#",
    "almost #attempt#",
    "nearly #attempt#"
  ],
  premise: [
    "battle",
    "join forces with",
    "convince",
    "win a dance contest against",
    "tickle",
    "wrestle",
    "hide from",
    "speculate the origin of",
    "gay flirt with",
    "dress up as",
    "feed",
    "go twos up on",
    "frighten",
    "sell his business to",
    "play snooker for",
    "work for",
    "outmanoeuvre",
    "chaufer around",
    "bake a cake for",
    "be a butler for",
    "trick",
    "spend some quality time with",
    "think about",
    "find out the secret of",
    "come up with a name for",
    "prepare breakfast for",
    "write a song about"
  ],
  quality: [
    "mythical ",
    "big fat ",
    "cis male ",
    "hungry ",
    "terrible ",
    "closeted ",
    "genius ",
    "autistic ",
    "snooty ",
    "vegetarian ",
    "sneaky ",
    "recovering ",
    ""
  ],
  success_level: [
    "a struggling",
    "a successful",
    "an up and coming",
    "a has-been",
    "a washed up",
    "a radical",
    "a dedicated",
    "an experimental"
  ],
  artist: [
    "writer",
    "juggler",
    "actor",
    "dancer",
    "quiz show host",
    "rapper",
    "method actor"
  ],
  character: [
    "a #quality#baseball coach",
    "Mona Lisa",
    "a foreign leader",
    "a tramp",
    "Hitler's mum",
    "a futuristic #job#",
    "his own sister",
    "a really #emotion# #job#",
    "Elvis Presley",
    "Cool Hand Luke",
    "a baddy from a recent videogame",
    "a #emotion# black lady",
    "the alpha dog",
    "a famous cricketer",
    "Prince Charles",
    "an army general",
    "3 different characters",
    "an Internet billionare",
    "a #quality#husband",
    "someones pet",
    '"#job.capitalize#-Dog"',
    "#success_level# #artist#",
    "an animated princess"
  ],
  emotion: [
    "miserable",
    "enthusiastic",
    "drunk",
    "racist",
    "forgetful",
    "clumsy",
    "unethical",
    "greedy",
    "bored"
  ],
  job: [
    "postman",
    "ghost",
    "bank manager",
    "taxi driver",
    "hairdresser",
    "balet dancer",
    "chef",
    "fire chief",
    "police cop",
    "paramedic",
    "estate agent",
    "man",
    "girl",
    "animal doctor",
    "professor",
    "school teacher",
    "dinosaur hunter"
  ],
  role: [
    " pretends to be #character# and",
    " is #character# and",
    " plays #character# and",
    ""
  ],
  country: [
    "an alternative Britain",
    "Brazil",
    "Spain",
    "Neptune",
    "the Gypsies",
    "Hearts",
    "the prom"
  ],
  region: [
    "the room",
    "the world",
    "the whole country",
    "ancient Rome",
    "a hotel for dogs"
  ],
  animal: [
    "bird",
    "hamster",
    "baby",
    "goldfish",
    "animal",
    "creature",
    "cat",
    "ferret"
  ],
  antagonist: [
    "a pope",
    "a mayor",
    "his friend's dad",
    "MechaHitler",
    "the King of #country#",
    "his shadow",
    "Dracula",
    "some boys",
    "everyone",
    "some dogs",
    "every #job# in #region#",
    "a newspaper guy",
    "the rest of the Transformers",
    "mutants",
    "a tiny little #animal#"
  ],
  macguffin: [],
  industry: [
    "narcotics",
    "dairy",
    "financial",
    "toy",
    "weapons",
    "pet food",
    "meat product"
  ],
  presidents: ["of America", "", "of a major #industry# company"],
  opportunity: [
    "save",
    "take down",
    "marry",
    "get a sneaky kiss from",
    "please",
    "win the heart of",
    "dance with"
  ],
  prize: [
    "a car",
    "twenty quid",
    "the election!",
    "some more Lego",
    "a lifetime of happiness",
    "some more tokens",
    "the game!"
  ],
  resolution: [
    "#opportunity# the president #presidents#",
    "save the world",
    "#opportunity# his #emotion# wife",
    "inherit a fortune",
    "win #prize#",
    "#opportunity# the Prime Minister of England",
    "#opportunity# his boss",
    "#opportunity# his childhood crush",
    "#opportunity# the other main character",
    "save the day",
    "make everyone happy again",
    "make the leap back home",
    "get paid",
    "go home",
    "go back to his own planet"
  ],
  plot: [
    "in order to #resolution#",
    "because he needs to #resolution#",
    "so that he can #resolution#",
    "because he's #emotion#"
  ],
  origin: [
    "Adam Sandler#role# #modified_attempt# #premise# #antagonist# #plot#"
  ]
});

grammar.addModifiers(tracery.baseEngModifiers);

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: grammar.flatten("#origin#")
  });
};
