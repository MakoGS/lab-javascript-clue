// Characters

const mrGreen = {
first_name: "Jacob",
last_name: "Green",
color: "green",
description: "He has a lot of connections",
age: 45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur"
};

const drOrchid = { 
first_name: "Doctor",
last_name: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation: "Scientist"
};

const profPlum = {
first_name: "Victor",
last_name: "Plum",
color: "purple",
description: "Billionaire video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer"
};

const missScarlet = {
first_name: "Kasandra",
last_name: "Scarlet",
color: "red",
description: "She is an A-list movie star with a dark past",
age: 31,
image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation: "Actor"
};

const mrsPeacock = {
first_name: "Eleanor",
last_name: "Peacock",
color: "blue",
description: "She is from a wealthy family and uses her status and money to earn popularity",
age: 36,
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation: "Socialité"
};

const mrMustard = {
first_name: "Jack",
last_name: "Mustard",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory",
age: 62,
image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation: "Retired Football player"
};

// Weapons

const rope = {
name: "rope",
weight: 10
}
const knife = {
name: "knife",
weight: 8
}
const candlestick = {
name: "candlestick",
weight: 2
}
const dumbbell = {
name: "dumbbell",
weight: 30
}
const poison = {
name: "poison",
weight: 2
}
const axe = {
name: "axe",
weight: 15
}
const bat = {
name: "bat",
weight: 13
}
const trophy = {
name: "trophy",
weight: 25
}
const pistol = {
name: "pistol",
weight: 20
}

// Rooms

const Dining = { name: "Dining Room" }
const Conservator = { name: "Conservator" }
const Kitchen = { name: "Kitchen" }
const Study = { name: "Study" }
const Library = { name: "Library" }
const Billiard = { name: "Billiard Room" }
const Lounge = { name: "Lounge" }
const Ballroom = { name: "Ballroom" }
const Hall = { name: "Hall" }
const Spa = { name: "Spa" }
const Living = { name: "Living Room" }
const Observatory = { name: "Observatory" }
const Theater = { name: "Theater" }
const Guest = { name: "Guest House" }
const Patio = { name: "Patio" }


// Characters Collection

const charactersArray = [ 
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];

// Rooms Collection
const roomsArray = [
  Dining,
  Conservator,
  Kitchen,
  Study,
  Library,
  Billiard,
  Lounge,
  Ballroom,
  Hall,
  Spa,
  Living,
  Observatory,
  Theater,
  Guest,
  Patio
];

// Weapons Collection

const weaponsArray = [
rope,
knife,
candlestick,
dumbbell,
poison,
axe,
bat,
trophy,
pistol
];

//Random Selector

const randomSelector = (array) => {
  if (!array.length) return undefined;
  const randomValue = Math.floor(Math.random() * array.length);
  return array[randomValue];
}

const pickMystery = () => {
  const mysteryEnvelope = {
    suspect: randomSelector(charactersArray),
    weapon: randomSelector(weaponsArray),
    room: randomSelector(roomsArray)
  }
  return mysteryEnvelope;
}

const revealMystery = (pickMystery) => {
return `${pickMystery.suspect.first_name} ${pickMystery.suspect.last_name} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!!!!`
}