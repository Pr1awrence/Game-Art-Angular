import { Game } from './game';
import { Genre } from './genre';

export const GAMES: Game[] = [
  /*{
    name: 'Dragon Age: Inquisition',
    shortDescription: 'Action RPG from BioWare',
    longDescription: 'A new adventure begins. When the heavens open and wreak havoc, the world needs heroes. ' +
    'Become the savior of Tedas in the name "Dragon Age: Inquisition." You are the Inquisitor, and you have to save the world from him. ' +
    'But this path will be paved with hard decisions.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/dragon_age_inquisition.jpg',
    oldPrice: null,
    newPrice: 19.99,
    bestGame: true,
    id: 1
  },
  {
    name: 'Fallout 76',
    shortDescription: 'Action RPG from Bethesda Game Studios',
    longDescription: 'Get the Fallout Classic collection when buying Fallout 76 for PC at Game Art! ' +
    'Bethesda Game Studios is a multiplayer name Fallout 76. Team up or survive alone - you decide.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/fallout_76.jpg',
    oldPrice: 59.99,
    newPrice: 40.19,
    bestGame: true,
    id: 2
  },
  {
    name: 'Kingdom Come: Deliverance',
    shortDescription: 'Action RPG from Warhorse Studios',
    longDescription: 'Kingdom Come: Deliverance takes place in theearly 15th century, in the Kingdom of Bohemia, part of the Lands ' +
    'of the Bohemian Crown and the Holy Roman Empire in what is now the Czech Republic. The accessible area ' +
    'of the game-block is located in the region between Sasau and Rattay.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/kingdom_come_deliverance.jpg',
    oldPrice: 59.99,
    newPrice: 35.99,
    bestGame: true,
    id: 3
  },
  {
    name: 'Minecraft',
    shortDescription: 'Sandbox, survival from Mojang',
    longDescription: 'Minecraft is a 2011 sandbox video. The game-block allows players to build with a variety of different blocks in a ' +
    '3D procedurally generated world, requiring creativity from players. Other activities in the game-block include exploration, ' +
    'resource gathering, crafting, and combat.',
    genre: [Genre.Sandbox, Genre.Survival],
    image: '../assets/all_games_catalog/minecraft.jpg',
    oldPrice: null,
    newPrice: 29.99,
    bestGame: true,
    id: 4
  },
  {
    name: 'Grand Theft Auto V',
    shortDescription: 'Action & Adventure from Rockstar Games',
    longDescription: 'The game-block is played from either a third-person or first-person perspective and its world is navigated on foot ' +
    'or by vehicle. Players control the three lead protagonists throughout single-player and switch between them both during and ' +
    'outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay.',
    genre: [Genre.Action_Adventure],
    image: '../assets/all_games_catalog/grand_theft_auto_V.jpg',
    oldPrice: 29.99,
    newPrice: 22.49,
    bestGame: false,
    id: 5
  },
  {
    name: 'Diablo® III',
    shortDescription: 'Action RPG from Blizzard Entertainment',
    longDescription: 'Events develop around the war. The players\' characters are not direct followers of these factions, ' +
    'but they strive to ensure that the army succeeds in striving to destroy the Sanctuary - their home world.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/diablo_III.jpg',
    oldPrice: 19.99,
    newPrice: 9.99,
    bestGame: true,
    id: 6
  },
  {
    name: 'Destiny 2: Forsaken',
    shortDescription: 'Action Shooter from Blizzard Entertainment',
    longDescription: 'In Forsaken, you’ll take justice into your own hands and pursue vengeance for your fallen friend Cayde-6. ' +
    'You will explore new regions, awaken new powers, earn a wealth of new weapons and uncover lost Awoken secrets. The hunt is on.',
    genre: [Genre.Shooter],
    image: '../assets/all_games_catalog/destiny_2_forsaken.jpg',
    oldPrice: 39.99,
    newPrice: 29.99,
    bestGame: false,
    id: 7
  },
  {
    name: 'South Park: The Fractured But Whole',
    shortDescription: 'Role-playing from Ubisoft',
    longDescription: 'Delve into the crime-ridden underbelly of South Park with Coon and Friends, this dedicated group of crime ' +
    'fighters formed by Eric Cartman whose superhero alter-ego, The Coon, is half man, half raccoon. Join Mysterion, Toolshed, ' +
    'Human Kite and a host of others to battle the forces of evil while Coon strives to make his team ' +
    'the most beloved superheroes in history.',
    genre: [Genre.Role_playing],
    image: '../assets/all_games_catalog/south_park_the_fractured_but_whole.jpg',
    oldPrice: null,
    newPrice: 59.99,
    bestGame: false,
    id: 8
  },
  {
    name: 'Assassin\'s Creed® Origins',
    shortDescription: 'Action & Adventure from Ubisoft',
    longDescription: 'Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets ' +
    'and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.',
    genre: [Genre.Action_Adventure],
    image: '../assets/all_games_catalog/assassin\'s_creed_origins.jpg',
    oldPrice: 59.99,
    newPrice: 24.00,
    bestGame: true,
    id: 9
  },
  {
    name: 'No Man\'s Sky',
    shortDescription: 'Action & Adventure from Hello Games',
    longDescription: 'Inspired by the adventure and imagination that we love from classic science-fiction, No Man\'s Sky presents ' +
    'you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action.',
    genre: [Genre.Action_Adventure],
    image: '../assets/all_games_catalog/no_man\'s_sky.jpg',
    oldPrice: 49.99,
    newPrice: 44.99,
    bestGame: false,
    id: 10
  },
  {
    name: 'The Elder Scrolls V: Skyrim',
    shortDescription: 'Action RPG from Bethesda Game Studios',
    longDescription: 'The game-block\'s main story revolves around the player character\'s quest to defeat Alduin the World-Eater, a dragon ' +
    'who is prophesied to destroy the world. The game-block is set 200 years after the events of Oblivion and takes place in Skyrim, ' +
    'the northernmost province of Tamriel. Over the course of the game-block, the player completes quests and develops ' +
    'the character by improving skills.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/the_elder_scrolls_V_skyrim.jpg',
    oldPrice: 39.99,
    newPrice: 23.99,
    bestGame: false,
    id: 11
  },
  {
    name: 'FINAL FANTASY XV ROYAL EDITION',
    shortDescription: 'Role-playing from Square Enix',
    longDescription: 'FINAL FANTASY XV ROYAL EDITION brings the acclaimed epic to new heights, packed with add-on ' +
    'content and new features. Join Prince Noctis and his closest friends as they fight against the empire in an effort ' +
    'to take back their fallen kingdom.',
    genre: [Genre.RPG],
    image: '../assets/all_games_catalog/final_fantasy_XV_royal_edition.jpg',
    oldPrice: 49.99,
    newPrice: 29.99,
    bestGame: false,
    id: 12
  }*/
];
