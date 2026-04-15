export interface SeedGame {
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  rating: number;
  playCount: number;
  description: string;
  featured: boolean;
  tags: string[];
}

// Games use own-domain URLs or verified open embeds (no CrazyGames domain check)
// Own domains: narrow.one, smashkarts.io, getaway-shootout.com, bonk.io, wormate.io,
//   sploop.io, tribals.io, nightpoint.io, worms.io, yohoho.io, kirka.io,
//   freepacman.org, hexgl.bkcore.com, drifthunters.net, moto-x3m.com, snowrider3d.com,
//   krunker.io, shellshock.io, zombsroyale.io, ev.io, 1v1.lol, warbrokers.io,
//   diep.io, starblast.io, generals.io, lordz.io
// Open embeds: gabrielecirulli.github.io, playpager.com, hextris.io, mathsisfun.com
// CG CDN (games.crazygames.com) for remaining titles

export const seedGames: SeedGame[] = [

  // ===== ACTION (13 games) =====
  {
    title: "Narrow One", slug: "narrow-one", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/narrow-one/cover_16x9-1.png",
    iframeUrl: "https://narrow.one/",
    rating: 4.5, playCount: 330000, featured: true,
    description: "Medieval archery multiplayer with team-based capture-the-flag.",
    tags: ["archery", "multiplayer", "medieval", "team"]
  },
  {
    title: "Smash Karts", slug: "smash-karts", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/smash-karts/cover_16x9-1.png",
    iframeUrl: "https://smashkarts.io/",
    rating: 4.6, playCount: 490000, featured: true,
    description: "Race in go-karts collecting power-ups and blasting opponents.",
    tags: ["kart", "multiplayer", "battle", "fun"]
  },
  {
    title: "Getaway Shootout", slug: "getaway-shootout", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/getaway-shootout/cover_16x9-1.png",
    iframeUrl: "https://getaway-shootout.com/",
    rating: 4.4, playCount: 285000, featured: false,
    description: "Race to the getaway vehicle while shooting rivals.",
    tags: ["2-player", "shooting", "race", "funny"]
  },
  {
    title: "Bonk io", slug: "bonk-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/bonk-io/cover_16x9-1.png",
    iframeUrl: "https://bonk.io/",
    rating: 4.3, playCount: 275000, featured: false,
    description: "Push opponents off the edge in this physics-based multiplayer game.",
    tags: ["physics", "multiplayer", "platformer", "competitive"]
  },
  {
    title: "Wormate io", slug: "wormate-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/wormate-io/cover_16x9-1.png",
    iframeUrl: "https://wormate.io/",
    rating: 4.2, playCount: 210000, featured: false,
    description: "Grow your worm eating sweets and defeating rivals.",
    tags: ["io", "snake", "multiplayer", "casual"]
  },
  {
    title: "Sploop io", slug: "sploop-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/sploop-io/cover_16x9-1.png",
    iframeUrl: "https://sploop.io/",
    rating: 4.2, playCount: 180000, featured: false,
    description: "Build, gather resources, and fight opponents in this survival io game.",
    tags: ["survival", "crafting", "multiplayer", "io"]
  },
  {
    title: "Tribals io", slug: "tribals-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/tribals-io/cover_16x9-1.png",
    iframeUrl: "https://tribals.io/",
    rating: 4.1, playCount: 155000, featured: false,
    description: "Gather resources, craft tools, and fight other tribes.",
    tags: ["survival", "crafting", "tribal", "io"]
  },
  {
    title: "Night Point io", slug: "nightpoint-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/nightpoint-io/cover_16x9-1.png",
    iframeUrl: "https://nightpoint.io/",
    rating: 4.2, playCount: 190000, featured: false,
    description: "Survive zombie hordes and fight other players in this dark top-down shooter.",
    tags: ["zombies", "shooter", "survival", "io"]
  },
  {
    title: "Worms Zone io", slug: "worms-zone", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/worms-zone-io-voracious-snake/cover_16x9-1.png",
    iframeUrl: "https://worms.io/",
    rating: 4.3, playCount: 265000, featured: false,
    description: "Eat food, grow huge, and trap other worms.",
    tags: ["io", "snake", "worms", "multiplayer"]
  },
  {
    title: "Yohoho io", slug: "yohoho-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/yohoho-io/cover_16x9-1.png",
    iframeUrl: "https://yohoho.io/",
    rating: 4.2, playCount: 220000, featured: false,
    description: "Pirate battle royale io game! Become the biggest pirate.",
    tags: ["pirate", "battle-royale", "io", "multiplayer"]
  },
  {
    title: "Kirka io", slug: "kirka-io", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/kirka-io/cover_16x9-1.png",
    iframeUrl: "https://kirka.io/",
    rating: 4.2, playCount: 175000, featured: false,
    description: "Blocky first-person shooter with parkour mechanics.",
    tags: ["fps", "parkour", "multiplayer", "blocky"]
  },
  {
    title: "Pacman", slug: "pacman", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/pac-man/cover_16x9-1.png",
    iframeUrl: "https://freepacman.org/",
    rating: 4.5, playCount: 450000, featured: true,
    description: "The legendary Pac-Man arcade game. Eat all the dots while avoiding ghosts.",
    tags: ["classic", "arcade", "maze", "pac-man"]
  },
  {
    title: "HexGL Racing", slug: "hexgl", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/car-rush/cover_16x9-1.png",
    iframeUrl: "https://hexgl.bkcore.com/play/",
    rating: 4.4, playCount: 240000, featured: false,
    description: "Futuristic WebGL racing game at breakneck speed.",
    tags: ["racing", "futuristic", "3d", "webgl"]
  },

  // ===== RACING (11 games) =====
  {
    title: "Drift Hunters", slug: "drift-hunters", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/drift-hunters/cover_16x9-1.png",
    iframeUrl: "https://drifthunters.net/",
    rating: 4.7, playCount: 350000, featured: true,
    description: "Master drifting in this realistic 3D driving game.",
    tags: ["drifting", "3d", "cars", "racing"]
  },
  {
    title: "Moto X3M", slug: "moto-x3m", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/moto-x3m/cover_16x9-1.png",
    iframeUrl: "https://moto-x3m.com/games/moto-x3m/",
    rating: 4.7, playCount: 430000, featured: true,
    description: "Race your motorbike through challenging obstacle courses.",
    tags: ["motorcycle", "stunts", "racing", "physics"]
  },
  {
    title: "Snow Rider 3D", slug: "snow-rider-3d", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/snow-rider-3d/cover_16x9-1.png",
    iframeUrl: "https://snowrider3d.com/",
    rating: 4.5, playCount: 370000, featured: false,
    description: "Dodge trees on an endless snowy slope on a sled.",
    tags: ["snow", "sledding", "winter", "casual"]
  },
  {
    title: "Moto X3M Pool Party", slug: "moto-x3m-pool-party", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/moto-x3m-pool-party/cover_16x9-1.png",
    iframeUrl: "https://moto-x3m.com/games/moto-x3m-pool-party/",
    rating: 4.6, playCount: 320000, featured: false,
    description: "Race motorbikes through wild pool party obstacle courses.",
    tags: ["motorcycle", "stunts", "pool", "summer"]
  },
  {
    title: "Moto X3M Spooky Land", slug: "moto-x3m-spooky-land", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/moto-x3m-spooky-land/cover_16x9-1.png",
    iframeUrl: "https://moto-x3m.com/games/moto-x3m-spooky-land/",
    rating: 4.5, playCount: 290000, featured: false,
    description: "Halloween-themed Moto X3M with ghosts and spooky obstacles.",
    tags: ["motorcycle", "halloween", "stunts", "racing"]
  },
  {
    title: "Moto X3M 4", slug: "moto-x3m-4", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/moto-x3m-4/cover_16x9-1.png",
    iframeUrl: "https://moto-x3m.com/games/moto-x3m-4/",
    rating: 4.1, playCount: 190000, featured: false,
    description: "New Moto X3M levels and obstacles.",
    tags: ["motorcycle", "stunts", "obstacles", "racing"]
  },
  {
    title: "Madalin Cars Multiplayer", slug: "madalin-cars-multiplayer", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/madalin-cars-multiplayer/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/madalin-cars-multiplayer/index.html",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Drive supercars on massive stunt tracks with other players.",
    tags: ["supercars", "stunts", "multiplayer", "3d"]
  },
  {
    title: "Death Chase", slug: "death-chase", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/death-chase/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/death-chase/index.html",
    rating: 4.3, playCount: 210000, featured: false,
    description: "Race through dangerous terrain performing insane stunts.",
    tags: ["stunts", "2-player", "racing", "extreme"]
  },
  {
    title: "Burnout Drift", slug: "burnout-drift", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/burnout-drift/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/burnout-drift/index.html",
    rating: 4.4, playCount: 260000, featured: false,
    description: "Burn rubber and drift around corners.",
    tags: ["drifting", "cars", "customization", "3d"]
  },
  {
    title: "Hill Climb Racing", slug: "hill-climb-racing", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/hill-climb-racing/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/hill-climb-racing/index.html",
    rating: 4.6, playCount: 290000, featured: false,
    description: "Drive over hills without flipping your vehicle.",
    tags: ["driving", "physics", "racing", "upgrade"]
  },
  {
    title: "Traffic Jam 3D", slug: "traffic-jam-3d", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/traffic-jam-3d/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/traffic-jam-3d/index.html",
    rating: 4.0, playCount: 145000, featured: false,
    description: "Navigate intense 3D traffic on busy highway roads.",
    tags: ["traffic", "3d", "highway", "speed"]
  },

  // ===== PUZZLE (13 games) =====
  {
    title: "2048", slug: "2048", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/2048/cover_16x9-1.png",
    iframeUrl: "https://gabrielecirulli.github.io/2048/",
    rating: 4.4, playCount: 410000, featured: false,
    description: "Slide numbered tiles to combine them and reach 2048.",
    tags: ["math", "puzzle", "numbers", "brain"]
  },
  {
    title: "Sudoku", slug: "sudoku", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/sudoku/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/sudoku/index.html",
    rating: 4.5, playCount: 280000, featured: true,
    description: "Fill the 9x9 grid so each row, column, and box contains 1-9.",
    tags: ["sudoku", "numbers", "logic", "classic"]
  },
  {
    title: "Hextris", slug: "hextris", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "https://hextris.io/",
    rating: 4.6, playCount: 600000, featured: false,
    description: "Rotate a hexagon to catch falling colored blocks and create chains.",
    tags: ["blocks", "hexagon", "puzzle", "reflex"]
  },
  {
    title: "Tetris", slug: "tetris", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/tetris.html",
    rating: 4.6, playCount: 600000, featured: false,
    description: "The legendary block-stacking puzzle game.",
    tags: ["blocks", "classic", "puzzle", "retro"]
  },
  {
    title: "Minesweeper", slug: "minesweeper", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/minesweeper/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/minesweeper.html",
    rating: 4.2, playCount: 220000, featured: false,
    description: "Clear the minefield using logic.",
    tags: ["minesweeper", "logic", "classic", "deduction"]
  },
  {
    title: "Brain Puzzle", slug: "brain-puzzle", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/brain-puzzle/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/brain-puzzle/index.html",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Solve tricky riddles and brain teasers that defy logic.",
    tags: ["brain", "riddles", "tricky", "iq"]
  },
  {
    title: "Water Sort Puzzle", slug: "water-sort-puzzle", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/water-sort-puzzle/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/water-sort-puzzle/index.html",
    rating: 4.4, playCount: 270000, featured: false,
    description: "Sort colored water between tubes until each tube is one color.",
    tags: ["sorting", "colors", "relaxing", "logic"]
  },
  {
    title: "Mahjong Classic", slug: "mahjong-classic", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/mahjong-classic/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/mahjong-classic/index.html",
    rating: 4.3, playCount: 350000, featured: false,
    description: "Match pairs of identical tiles to clear the board.",
    tags: ["mahjong", "matching", "classic", "tiles"]
  },
  {
    title: "Word Search", slug: "word-search", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/word-search/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/word-search/index.html",
    rating: 4.4, playCount: 310000, featured: true,
    description: "Find hidden words in a grid of letters.",
    tags: ["word", "search", "brain", "letters"]
  },
  {
    title: "Bubble Shooter", slug: "bubble-shooter", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/bubble-shooter-classic/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/bubble-shooter-classic/index.html",
    rating: 4.3, playCount: 290000, featured: false,
    description: "Shoot colored bubbles and match 3 or more to pop them.",
    tags: ["bubble", "shooter", "match-3", "casual"]
  },
  {
    title: "Cut the Rope 2", slug: "cut-the-rope-2", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/cut-the-rope-2/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/cut-the-rope-2/index.html",
    rating: 4.4, playCount: 310000, featured: false,
    description: "Feed Om Nom candy by cutting ropes in clever ways.",
    tags: ["physics", "puzzle", "casual", "cute"]
  },
  {
    title: "Cut the Rope", slug: "cut-the-rope", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/cut-the-rope/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/cut-the-rope/index.html",
    rating: 4.6, playCount: 320000, featured: false,
    description: "Feed Om Nom candy by cutting ropes in the right order.",
    tags: ["physics", "puzzle", "casual", "brain"]
  },
  {
    title: "Adventure Capitalist", slug: "adventure-capitalist", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/adventure-capitalist/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/adventure-capitalist/index.html",
    rating: 4.3, playCount: 240000, featured: false,
    description: "Build a business empire from a humble lemonade stand.",
    tags: ["idle", "clicker", "business", "relaxing"]
  },

  // ===== SHOOTING (12 games) =====
  {
    title: "Krunker io", slug: "krunker-io", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/krunker/cover_16x9-1.png",
    iframeUrl: "https://krunker.io/",
    rating: 4.5, playCount: 410000, featured: true,
    description: "Fast-paced browser FPS with pixel block graphics.",
    tags: ["fps", "io", "multiplayer", "pixel"]
  },
  {
    title: "Shell Shockers", slug: "shell-shockers", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/shell-shockers/cover_16x9-1.png",
    iframeUrl: "https://shellshock.io/",
    rating: 4.3, playCount: 260000, featured: false,
    description: "Egg-based multiplayer first-person shooter.",
    tags: ["fps", "multiplayer", "funny", "shooter"]
  },
  {
    title: "Zombs Royale", slug: "zombs-royale", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/zombs-royale-io/cover_16x9-1.png",
    iframeUrl: "https://zombsroyale.io/",
    rating: 4.2, playCount: 220000, featured: false,
    description: "2D battle royale. Be the last one standing.",
    tags: ["battle-royale", "shooter", "multiplayer", "io"]
  },
  {
    title: "EV.io", slug: "ev-io", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/ev-io/cover_16x9-1.png",
    iframeUrl: "https://ev.io/",
    rating: 4.4, playCount: 240000, featured: false,
    description: "Sci-fi multiplayer FPS with fast fluid movement.",
    tags: ["fps", "sci-fi", "multiplayer", "competitive"]
  },
  {
    title: "1v1.LOL", slug: "1v1-lol", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/1v1-lol/cover_16x9-1.png",
    iframeUrl: "https://1v1.lol/",
    rating: 4.4, playCount: 280000, featured: false,
    description: "Build structures and outshoot opponents in 1v1 battles.",
    tags: ["building", "1v1", "shooter", "competitive"]
  },
  {
    title: "Warbrokers", slug: "warbrokers", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/warbrokers-io/cover_16x9-1.png",
    iframeUrl: "https://warbrokers.io/",
    rating: 4.4, playCount: 240000, featured: false,
    description: "Large-scale multiplayer FPS with vehicles and tanks.",
    tags: ["fps", "vehicles", "multiplayer", "warfare"]
  },
  {
    title: "Bullet Force", slug: "bullet-force", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/bullet-force-multiplayer/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/bullet-force-multiplayer/index.html",
    rating: 4.5, playCount: 285000, featured: true,
    description: "Online multiplayer FPS with customizable loadouts.",
    tags: ["fps", "multiplayer", "online", "shooter"]
  },
  {
    title: "Gun Mayhem 2", slug: "gun-mayhem-2", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/gun-mayhem-2/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/gun-mayhem-2/index.html",
    rating: 4.4, playCount: 255000, featured: false,
    description: "Blast enemies off the stage with up to 4 players.",
    tags: ["platform", "4-player", "weapons", "action"]
  },
  {
    title: "Stick War", slug: "stick-war", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/stick-war/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/stick-war/index.html",
    rating: 4.5, playCount: 340000, featured: false,
    description: "Command your stickman army in epic battles.",
    tags: ["stickman", "strategy", "army", "war"]
  },
  {
    title: "Curve Fever Pro", slug: "curve-fever-pro", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/curve-fever-pro/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/curve-fever-pro/index.html",
    rating: 4.2, playCount: 200000, featured: false,
    description: "Draw curves and trap opponents in this multiplayer arcade game.",
    tags: ["multiplayer", "battle", "snake", "io"]
  },
  {
    title: "Angry Birds", slug: "angry-birds", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/angry-birds/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/angry-birds/index.html",
    rating: 4.3, playCount: 350000, featured: false,
    description: "Launch birds from a slingshot to destroy pigs.",
    tags: ["physics", "slingshot", "birds", "classic"]
  },
  {
    title: "Geometry Dash", slug: "geometry-dash", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/geometry-dash-meltdown/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/geometry-dash-meltdown/index.html",
    rating: 4.6, playCount: 490000, featured: true,
    description: "Rhythm-based action platformer perfectly synced to music.",
    tags: ["rhythm", "platformer", "music", "challenging"]
  },

  // ===== SPORTS (12 games) =====
  {
    title: "Basketball Stars", slug: "basketball-stars", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/basketball-stars/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/basketball-stars/index.html",
    rating: 4.3, playCount: 195000, featured: true,
    description: "Fast-paced 1v1 basketball with skill moves.",
    tags: ["basketball", "sports", "multiplayer", "2-player"]
  },
  {
    title: "Penalty Shooters 2", slug: "penalty-shooters-2", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/penalty-shooters-2/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/penalty-shooters-2/index.html",
    rating: 4.3, playCount: 175000, featured: false,
    description: "Test your goalkeeping skills in the ultimate penalty shootout.",
    tags: ["football", "soccer", "sports", "penalty"]
  },
  {
    title: "Boxing Random", slug: "boxing-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/boxing-random/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/boxing-random/index.html",
    rating: 4.3, playCount: 220000, featured: false,
    description: "Physics-based boxing where rules change every round.",
    tags: ["boxing", "physics", "random", "funny"]
  },
  {
    title: "Soccer Random", slug: "soccer-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/soccer-random/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/soccer-random/index.html",
    rating: 4.4, playCount: 310000, featured: false,
    description: "Wild one-button soccer with random changing physics.",
    tags: ["soccer", "random", "funny", "physics"]
  },
  {
    title: "Basket Random", slug: "basket-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/basket-random/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/basket-random/index.html",
    rating: 4.3, playCount: 255000, featured: false,
    description: "Wacky basketball with random rules each round.",
    tags: ["basketball", "random", "funny", "2-player"]
  },
  {
    title: "Mini Golf Club", slug: "mini-golf-club", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/mini-golf-club/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/mini-golf-club/index.html",
    rating: 4.4, playCount: 200000, featured: false,
    description: "Fun multilayer mini golf with creative courses.",
    tags: ["golf", "mini-golf", "multiplayer", "casual"]
  },
  {
    title: "Table Tennis", slug: "table-tennis", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/table-tennis-world-tour/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/table-tennis-world-tour/index.html",
    rating: 4.1, playCount: 140000, featured: false,
    description: "Compete in world table tennis tournaments.",
    tags: ["table-tennis", "ping-pong", "sports", "tournament"]
  },
  {
    title: "Volley Random", slug: "volley-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/volley-random/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/volley-random/index.html",
    rating: 4.2, playCount: 185000, featured: false,
    description: "Crazy volleyball with physics that changes each round.",
    tags: ["volleyball", "random", "physics", "funny"]
  },
  {
    title: "8-Ball Billiards", slug: "pool-party", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/8-ball-billiards-classic/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/8-ball-billiards-classic/index.html",
    rating: 4.3, playCount: 195000, featured: false,
    description: "Master 8-ball pool against the AI.",
    tags: ["pool", "billiards", "sports", "skill"]
  },
  {
    title: "Tap Tap Shots", slug: "tap-tap-shots", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/tap-tap-shots/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/tap-tap-shots/index.html",
    rating: 4.2, playCount: 165000, featured: false,
    description: "Tap to shoot basketballs into the hoop with perfect timing.",
    tags: ["basketball", "tap", "reflex", "casual"]
  },
  {
    title: "Pool Club", slug: "pool-club", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/pool-club/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/pool-club/index.html",
    rating: 4.3, playCount: 180000, featured: false,
    description: "Multiplayer 8-ball pool with realistic physics.",
    tags: ["pool", "billiards", "multiplayer", "competitive"]
  },
  {
    title: "Mini Putt Golf", slug: "mini-putt", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/mini-putt/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/mini-putt/index.html",
    rating: 4.1, playCount: 130000, featured: false,
    description: "Classic mini golf with tricky creative courses.",
    tags: ["mini-golf", "golf", "skill", "classic"]
  },

  // ===== ADVENTURE (12 games) =====
  {
    title: "Starblast io", slug: "starblast-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/starblast-io/cover_16x9-1.png",
    iframeUrl: "https://starblast.io/",
    rating: 4.5, playCount: 320000, featured: true,
    description: "Mine asteroids and battle in space in this multiplayer io game.",
    tags: ["space", "multiplayer", "upgrade", "io"]
  },
  {
    title: "Fireboy and Watergirl", slug: "fireboy-and-watergirl", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/fireboy-and-watergirl-the-forest-temple/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/fireboy-and-watergirl-the-forest-temple/index.html",
    rating: 4.6, playCount: 440000, featured: true,
    description: "Team up to solve puzzles in the Forest Temple.",
    tags: ["cooperative", "2-player", "puzzle", "adventure"]
  },
  {
    title: "Paper Minecraft", slug: "paper-minecraft", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/paper-minecraft/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/paper-minecraft/index.html",
    rating: 4.8, playCount: 720000, featured: true,
    description: "Build and explore in this 2D Minecraft-inspired game.",
    tags: ["sandbox", "building", "creative", "survival"]
  },
  {
    title: "Generals io", slug: "generals-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/generals-io/cover_16x9-1.png",
    iframeUrl: "https://generals.io/",
    rating: 4.3, playCount: 195000, featured: false,
    description: "Conquer the map in real-time multiplayer strategy battles.",
    tags: ["io", "real-time", "conquest", "multiplayer"]
  },
  {
    title: "Bob the Robber", slug: "bob-the-robber", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/bob-the-robber/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/bob-the-robber/index.html",
    rating: 4.3, playCount: 280000, featured: false,
    description: "Sneak through buildings and steal the treasure.",
    tags: ["stealth", "thief", "puzzle", "sneaking"]
  },
  {
    title: "Paper io 2", slug: "paper-io-2", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/paper-io-2/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/paper-io-2/index.html",
    rating: 4.2, playCount: 350000, featured: false,
    description: "Claim territory by drawing shapes around land.",
    tags: ["io", "territory", "multiplayer", "casual"]
  },
  {
    title: "Raft Wars", slug: "raft-wars", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/raft-wars/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/raft-wars/index.html",
    rating: 4.4, playCount: 270000, featured: false,
    description: "Defend your hidden treasure from pirates on your raft.",
    tags: ["pirate", "shooting", "aiming", "funny"]
  },
  {
    title: "Idle Breakout", slug: "idle-breakout", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/idle-breakout/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/idle-breakout/index.html",
    rating: 4.3, playCount: 320000, featured: false,
    description: "Idle game meets brick breaker - upgrade balls to smash blocks.",
    tags: ["idle", "clicker", "breakout", "relaxing"]
  },
  {
    title: "Red Ball 4", slug: "red-ball-4", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/red-ball-4/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/red-ball-4/index.html",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Roll and jump through 75 physics levels as Red Ball.",
    tags: ["platformer", "physics", "adventure", "classic"]
  },
  {
    title: "Color Tunnel", slug: "color-tunnel", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/color-tunnel/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/color-tunnel/index.html",
    rating: 4.2, playCount: 215000, featured: false,
    description: "Speed through a colorful tunnel maze at high velocity.",
    tags: ["tunnel", "speed", "reflex", "colorful"]
  },
  {
    title: "Dino Run", slug: "dino-run", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/dino-run/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/dino-run/index.html",
    rating: 4.0, playCount: 230000, featured: false,
    description: "Run as a dinosaur through apocalyptic landscapes.",
    tags: ["dinosaur", "running", "survival", "pixel"]
  },
  {
    title: "Age of War", slug: "age-of-war", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/age-of-war/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/age-of-war/index.html",
    rating: 4.4, playCount: 290000, featured: false,
    description: "Evolve your civilization through ages from cavemen to the future.",
    tags: ["evolution", "base-defense", "war", "ages"]
  },

  // ===== STRATEGY (13 games) =====
  {
    title: "Chess", slug: "chess", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/chess-free/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/chess/index.html",
    rating: 4.5, playCount: 310000, featured: false,
    description: "Classic chess against AI or a friend.",
    tags: ["chess", "strategy", "board", "classic"]
  },
  {
    title: "Checkers", slug: "checkers", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/checkers-online/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/checkers/index.html",
    rating: 4.0, playCount: 160000, featured: false,
    description: "Classic checkers board game for 2 players.",
    tags: ["checkers", "board", "classic", "2-player"]
  },
  {
    title: "Solitaire", slug: "solitaire", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/classic-solitaire/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/solitaire/index.html",
    rating: 4.3, playCount: 280000, featured: false,
    description: "The timeless Klondike Solitaire card game.",
    tags: ["solitaire", "cards", "classic", "relaxing"]
  },
  {
    title: "Reversi", slug: "reversi", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/reversi/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/reversi/index.html",
    rating: 4.1, playCount: 130000, featured: false,
    description: "Classic Othello/Reversi board game.",
    tags: ["reversi", "othello", "board", "strategy"]
  },
  {
    title: "Kingdom Rush Frontiers", slug: "kingdom-rush", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/kingdom-rush-frontiers/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/kingdom-rush-frontiers/index.html",
    rating: 4.7, playCount: 240000, featured: true,
    description: "Award-winning tower defense game with fantasy heroes.",
    tags: ["tower-defense", "strategy", "fantasy", "medieval"]
  },
  {
    title: "Bloons Tower Defense 5", slug: "bloons-tower-defense-5", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/bloons-tower-defense-5/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/bloons-tower-defense-5/index.html",
    rating: 4.7, playCount: 520000, featured: true,
    description: "Pop bloons with monkey towers across dozens of maps.",
    tags: ["tower-defense", "monkeys", "bloons", "upgrade"]
  },
  {
    title: "Plants vs Zombies", slug: "plants-vs-zombies", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/plants-vs-zombies/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/plants-vs-zombies/index.html",
    rating: 4.6, playCount: 450000, featured: false,
    description: "Defend your garden from zombies using plant warriors.",
    tags: ["tower-defense", "zombies", "plants", "casual"]
  },
  {
    title: "Lordz io", slug: "lordz-io", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/lordz-io/cover_16x9-1.png",
    iframeUrl: "https://lordz.io/",
    rating: 4.1, playCount: 170000, featured: false,
    description: "Build your army and castle in real-time multiplayer strategy.",
    tags: ["io", "multiplayer", "army", "real-time"]
  },
  {
    title: "Tic Tac Toe", slug: "tic-tac-toe", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/tic-tac-toe/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/tic-tac-toe/index.html",
    rating: 4.0, playCount: 200000, featured: false,
    description: "The classic X and O board game.",
    tags: ["tic-tac-toe", "classic", "board", "2-player"]
  },
  {
    title: "Connect 4", slug: "connect-4", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/connect-4/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/connect4.html",
    rating: 4.1, playCount: 155000, featured: false,
    description: "Classic Connect Four - be first to connect 4 in a row.",
    tags: ["connect4", "board", "classic", "2-player"]
  },
  {
    title: "Classic Solitaire", slug: "classic-solitaire", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/classic-solitaire/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/classic-solitaire/index.html",
    rating: 4.3, playCount: 260000, featured: false,
    description: "Clean and simple Klondike Solitaire with no distractions.",
    tags: ["solitaire", "cards", "classic", "relaxing"]
  },
  {
    title: "Factory Idle", slug: "factory-idle", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/factory-idle/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/factory-idle/index.html",
    rating: 4.2, playCount: 175000, featured: false,
    description: "Build and optimize factories to maximize production.",
    tags: ["idle", "factory", "management", "clicker"]
  },
  {
    title: "Minesweeper Pro", slug: "minesweeper-strategy", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/minesweeper/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/minesweeper.html",
    rating: 4.2, playCount: 175000, featured: false,
    description: "Flag mines and reveal safe squares using deductive logic.",
    tags: ["minesweeper", "logic", "classic", "grid"]
  },

  // ===== ARCADE (13 games) =====
  {
    title: "Slither io", slug: "slither-io", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/slitherio/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/slitherio/index.html",
    rating: 4.4, playCount: 560000, featured: true,
    description: "Grow your snake by eating orbs and trap other snakes.",
    tags: ["io", "snake", "multiplayer", "competitive"]
  },
  {
    title: "Agar io", slug: "agar-io", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/agario/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/agario/index.html",
    rating: 4.3, playCount: 480000, featured: false,
    description: "Grow your cell by eating smaller cells and avoid bigger ones.",
    tags: ["io", "multiplayer", "classic", "grow"]
  },
  {
    title: "Diep io", slug: "diep-io", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/diep-io/cover_16x9-1.png",
    iframeUrl: "https://diep.io/",
    rating: 4.2, playCount: 290000, featured: false,
    description: "Control a tank, shoot shapes and enemies, and level up.",
    tags: ["io", "tanks", "multiplayer", "upgrade"]
  },
  {
    title: "Flappy Bird", slug: "flappy-bird", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/flappy-bird/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/flappy-bird/index.html",
    rating: 4.0, playCount: 550000, featured: false,
    description: "Tap to flap through pipes. Infamously difficult!",
    tags: ["flappy", "challenging", "tap", "addictive"]
  },
  {
    title: "Helix Jump", slug: "helix-jump", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/helix-jump/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/helix-jump/index.html",
    rating: 4.3, playCount: 340000, featured: false,
    description: "Bounce your ball down through a rotating helix tower.",
    tags: ["bouncing", "3d", "casual", "satisfying"]
  },
  {
    title: "Tunnel Rush", slug: "tunnel-rush", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/tunnel-rush/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/tunnel-rush/index.html",
    rating: 4.3, playCount: 270000, featured: false,
    description: "Navigate through a colorful tunnel at high speed.",
    tags: ["reflex", "speed", "3d", "arcade"]
  },
  {
    title: "Snake io", slug: "snake-io", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/snake-io/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/snake-io/index.html",
    rating: 4.1, playCount: 180000, featured: false,
    description: "Grow your snake by eating orbs in this multiplayer arena.",
    tags: ["io", "snake", "multiplayer", "casual"]
  },
  {
    title: "Run 3", slug: "run-3", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/run-3/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/run-3/index.html",
    rating: 4.5, playCount: 420000, featured: false,
    description: "Run through an endless space tunnel, jumping over gaps.",
    tags: ["runner", "space", "reflex", "arcade"]
  },
  {
    title: "Short Life", slug: "short-life", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/short-life/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/short-life/index.html",
    rating: 4.2, playCount: 210000, featured: false,
    description: "Guide a ragdoll through brutal obstacle courses.",
    tags: ["ragdoll", "obstacle", "physics", "funny"]
  },
  {
    title: "Doodle Jump", slug: "doodle-jump", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/doodle-jump/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/doodle-jump/index.html",
    rating: 4.2, playCount: 310000, featured: false,
    description: "Bounce up on platforms jumping from level to level.",
    tags: ["jumping", "casual", "classic", "arcade"]
  },
  {
    title: "Crossy Road", slug: "crossy-road", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/crossy-road/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/crossy-road/index.html",
    rating: 4.4, playCount: 325000, featured: false,
    description: "Hop through traffic, rivers, and train tracks endlessly.",
    tags: ["arcade", "endless", "casual", "pixel"]
  },
  {
    title: "Worm Hunt", slug: "worm-hunt", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/worm-hunt/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/worm-hunt/index.html",
    rating: 4.2, playCount: 265000, featured: false,
    description: "Grow your worm by eating dots and defeating other worms.",
    tags: ["io", "snake", "multiplayer", "grow"]
  },
  {
    title: "Eggy Car", slug: "eggy-car", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/eggy-car/cover_16x9-1.png",
    iframeUrl: "https://games.crazygames.com/en_US/eggy-car/index.html",
    rating: 4.4, playCount: 370000, featured: false,
    description: "Drive a car with an egg on top over crazy hilly terrain.",
    tags: ["physics", "driving", "casual", "funny"]
  },
];
