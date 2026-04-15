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

// ============================================================
// ALL iframeUrls are verified embeddable — NO CrazyGames CDN.
// Sources:
//   /games/*        → self-hosted in public/games/ (same-origin, zero restrictions)
//   own .io/.com    → game runs on its own domain, no parent-check possible
//   GitHub Pages    → CORS *, no XFO
//   playpager.com   → no XFO, open embed
//   mathsisfun.com  → no XFO
//   curvefever.pro  → own domain, no XFO
//   nebez/ageofwar  → GitHub Pages, no XFO
//   slope-game.com  → own domain, no XFO
// ============================================================

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
    description: "Eat food, grow huge, and trap other worms to win.",
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
    title: "Pac-Man", slug: "pacman", category: "Action",
    thumbnail: "https://imgs.crazygames.com/games/pac-man/cover_16x9-1.png",
    iframeUrl: "/games/pacman/index.html",
    rating: 4.5, playCount: 450000, featured: true,
    description: "The legendary Pac-Man maze game. Eat all the dots while avoiding ghosts.",
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

  // ===== RACING (10 games) =====
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
    description: "New Moto X3M levels and obstacles to conquer.",
    tags: ["motorcycle", "stunts", "obstacles", "racing"]
  },
  {
    title: "Slope", slug: "slope-game", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/slope/cover_16x9-1.png",
    iframeUrl: "https://slope-game.com/",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Roll a ball down an endless slope avoiding obstacles.",
    tags: ["slope", "ball", "endless", "reflex"]
  },
  {
    title: "Curve Fever Pro", slug: "curve-fever-pro", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/curve-fever-pro/cover_16x9-1.png",
    iframeUrl: "https://curvefever.pro/",
    rating: 4.2, playCount: 200000, featured: false,
    description: "Draw curves and trap opponents in this multiplayer racing game.",
    tags: ["multiplayer", "battle", "curve", "io"]
  },
  {
    title: "Flappy Wings", slug: "flappy-bird", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/flappy-bird/cover_16x9-1.png",
    iframeUrl: "/games/flappy/index.html",
    rating: 4.0, playCount: 550000, featured: false,
    description: "Tap to flap through pipes. Infamously addictive!",
    tags: ["flappy", "challenging", "tap", "addictive"]
  },
  {
    title: "Brick Breaker", slug: "brick-break", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/breakout/cover_16x9-1.png",
    iframeUrl: "/games/breakout/index.html",
    rating: 4.3, playCount: 220000, featured: false,
    description: "Break bricks with a bouncing ball across 10 levels.",
    tags: ["breakout", "bricks", "ball", "arcade"]
  },
  {
    title: "Sky Jumper", slug: "sky-jumper", category: "Racing",
    thumbnail: "https://imgs.crazygames.com/games/doodle-jump/cover_16x9-1.png",
    iframeUrl: "/games/jumper/index.html",
    rating: 4.3, playCount: 270000, featured: false,
    description: "Bounce up on platforms as far as you can go.",
    tags: ["jumping", "casual", "doodle", "arcade"]
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
    title: "Tetris", slug: "tetris", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "/games/tetris/index.html",
    rating: 4.6, playCount: 600000, featured: false,
    description: "The legendary block-stacking puzzle game.",
    tags: ["blocks", "classic", "puzzle", "retro"]
  },
  {
    title: "Hextris", slug: "hextris", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "https://hextris.io/",
    rating: 4.6, playCount: 600000, featured: false,
    description: "Rotate a hexagon to catch falling colored blocks.",
    tags: ["blocks", "hexagon", "puzzle", "reflex"]
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
    title: "Minesweeper", slug: "minesweeper", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/minesweeper/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/minesweeper.html",
    rating: 4.2, playCount: 220000, featured: false,
    description: "Clear the minefield using logic.",
    tags: ["minesweeper", "logic", "classic", "deduction"]
  },
  {
    title: "Memory Match", slug: "memory-match", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/memory/cover_16x9-1.png",
    iframeUrl: "/games/memory/index.html",
    rating: 4.3, playCount: 290000, featured: false,
    description: "Flip emoji cards to find matching pairs in as few moves as possible.",
    tags: ["memory", "cards", "match", "brain"]
  },
  {
    title: "Space Invaders", slug: "space-invaders", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/space-invaders/cover_16x9-1.png",
    iframeUrl: "/games/invaders/index.html",
    rating: 4.4, playCount: 320000, featured: false,
    description: "Destroy alien waves before they reach Earth.",
    tags: ["classic", "shooting", "aliens", "retro"]
  },
  {
    title: "Bubble Pop", slug: "bubble-pop", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/bubble-shooter-classic/cover_16x9-1.png",
    iframeUrl: "/games/bubble/index.html",
    rating: 4.3, playCount: 290000, featured: false,
    description: "Shoot colored bubbles — match 3 or more to pop them.",
    tags: ["bubble", "shooter", "match-3", "casual"]
  },
  {
    title: "Connect 4", slug: "connect-4", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/connect-4/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/connect4.html",
    rating: 4.1, playCount: 155000, featured: false,
    description: "Classic Connect Four - be first to connect 4 in a row.",
    tags: ["connect4", "board", "classic", "2-player"]
  },
  {
    title: "Word Search", slug: "word-search", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/word-search/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/wordsearch.html",
    rating: 4.4, playCount: 310000, featured: true,
    description: "Find hidden words in a grid of letters.",
    tags: ["word", "search", "brain", "letters"]
  },
  {
    title: "Mahjong Classic", slug: "mahjong-classic", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/mahjong-classic/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/mahjong/index.html",
    rating: 4.3, playCount: 350000, featured: false,
    description: "Match pairs of identical tiles to clear the board.",
    tags: ["mahjong", "matching", "classic", "tiles"]
  },
  {
    title: "Snake Classic", slug: "snake-bite", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/snake-io/cover_16x9-1.png",
    iframeUrl: "/games/snake/index.html",
    rating: 4.1, playCount: 180000, featured: false,
    description: "Grow your snake by eating food — avoid walls and yourself.",
    tags: ["io", "snake", "classic", "casual"]
  },
  {
    title: "Reversi", slug: "reversi", category: "Puzzle",
    thumbnail: "https://imgs.crazygames.com/games/reversi/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/reversi/index.html",
    rating: 4.1, playCount: 130000, featured: false,
    description: "Classic Othello/Reversi board game.",
    tags: ["reversi", "othello", "board", "strategy"]
  },

  // ===== SHOOTING (11 games) =====
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
    title: "Flappy Wings (Original)", slug: "flappy-original", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/flappy-bird/cover_16x9-1.png",
    iframeUrl: "https://nebez.github.io/floppybird/",
    rating: 4.0, playCount: 320000, featured: false,
    description: "The original open-source Floppy Bird — tap to survive.",
    tags: ["flappy", "arcade", "tap", "classic"]
  },
  {
    title: "Age of War", slug: "age-of-war", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/age-of-war/cover_16x9-1.png",
    iframeUrl: "https://ageofwar.io/",
    rating: 4.4, playCount: 290000, featured: false,
    description: "Evolve your civilization through ages from cavemen to the future.",
    tags: ["evolution", "base-defense", "war", "ages"]
  },
  {
    title: "Tower Defense", slug: "tower-defense", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/kingdom-rush-frontiers/cover_16x9-1.png",
    iframeUrl: "/games/tower/index.html",
    rating: 4.5, playCount: 240000, featured: true,
    description: "Place towers to defend against waves of enemies.",
    tags: ["tower-defense", "strategy", "waves", "defense"]
  },
  {
    title: "Space Shootout", slug: "space-shootout", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/space-invaders/cover_16x9-1.png",
    iframeUrl: "https://masonicgit.github.io/pacman/",
    rating: 4.3, playCount: 200000, featured: false,
    description: "Classic arcade action — navigate mazes and outsmart opponents.",
    tags: ["classic", "arcade", "maze", "action"]
  },
  {
    title: "Idle Empire", slug: "idle-empire", category: "Shooting",
    thumbnail: "https://imgs.crazygames.com/games/adventure-capitalist/cover_16x9-1.png",
    iframeUrl: "/games/idle/index.html",
    rating: 4.3, playCount: 240000, featured: false,
    description: "Click gems and automate your empire. Upgrade to earn millions!",
    tags: ["idle", "clicker", "upgrade", "relaxing"]
  },

  // ===== SPORTS (12 games) =====
  {
    title: "Penalty Shootout", slug: "penalty-shooters-2", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/penalty-shooters-2/cover_16x9-1.png",
    iframeUrl: "/games/soccer/index.html",
    rating: 4.3, playCount: 175000, featured: false,
    description: "Aim and shoot 5 penalties — outsmart the goalkeeper!",
    tags: ["football", "soccer", "sports", "penalty"]
  },
  {
    title: "Hoop Shot", slug: "basketball-stars", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/basketball-stars/cover_16x9-1.png",
    iframeUrl: "/games/basketball/index.html",
    rating: 4.3, playCount: 195000, featured: true,
    description: "Drag and shoot basketballs — score as many hoops as you can!",
    tags: ["basketball", "sports", "drag", "casual"]
  },
  {
    title: "Mini Golf", slug: "mini-golf-club", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/mini-golf-club/cover_16x9-1.png",
    iframeUrl: "/games/golf/index.html",
    rating: 4.4, playCount: 200000, featured: false,
    description: "Putt through 5 challenging holes — power and angle are everything.",
    tags: ["golf", "mini-golf", "physics", "casual"]
  },
  {
    title: "Soccer Random", slug: "soccer-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/soccer-random/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/soccer/index.html",
    rating: 4.4, playCount: 310000, featured: false,
    description: "One-button soccer with crazy physics.",
    tags: ["soccer", "random", "funny", "physics"]
  },
  {
    title: "Chess", slug: "chess", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/chess-free/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/chess/index.html",
    rating: 4.5, playCount: 310000, featured: false,
    description: "Classic chess against AI or a friend.",
    tags: ["chess", "strategy", "board", "classic"]
  },
  {
    title: "Checkers", slug: "checkers", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/checkers-online/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/checkers/index.html",
    rating: 4.0, playCount: 160000, featured: false,
    description: "Classic checkers board game for 2 players.",
    tags: ["checkers", "board", "classic", "2-player"]
  },
  {
    title: "Solitaire", slug: "solitaire", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/classic-solitaire/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/solitaire/index.html",
    rating: 4.3, playCount: 280000, featured: false,
    description: "The timeless Klondike Solitaire card game.",
    tags: ["solitaire", "cards", "classic", "relaxing"]
  },
  {
    title: "Solitaire Time", slug: "solitaire-time", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/classic-solitaire/cover_16x9-1.png",
    iframeUrl: "https://www.solitairetime.com/",
    rating: 4.3, playCount: 260000, featured: false,
    description: "Beat the clock in timed Solitaire challenges.",
    tags: ["solitaire", "cards", "timed", "casual"]
  },
  {
    title: "Chess 247", slug: "chess-247", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/chess-free/cover_16x9-1.png",
    iframeUrl: "https://www.247chess.com/",
    rating: 4.5, playCount: 340000, featured: false,
    description: "Full-featured chess with AI difficulty levels.",
    tags: ["chess", "ai", "strategy", "competitive"]
  },
  {
    title: "Tic Tac Toe", slug: "tic-tac-toe", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/tic-tac-toe/cover_16x9-1.png",
    iframeUrl: "/games/tictactoe/index.html",
    rating: 4.0, playCount: 200000, featured: false,
    description: "Classic X and O with unbeatable AI opponent.",
    tags: ["tic-tac-toe", "classic", "board", "ai"]
  },
  {
    title: "Volley Random", slug: "volley-random", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/volley-random/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/volleyball/index.html",
    rating: 4.2, playCount: 185000, featured: false,
    description: "Wacky volleyball with physics that changes each round.",
    tags: ["volleyball", "random", "physics", "funny"]
  },
  {
    title: "Table Tennis", slug: "table-tennis", category: "Sports",
    thumbnail: "https://imgs.crazygames.com/games/table-tennis-world-tour/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/tabletennis/index.html",
    rating: 4.1, playCount: 140000, featured: false,
    description: "Compete in table tennis tournaments.",
    tags: ["table-tennis", "ping-pong", "sports", "tournament"]
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
    title: "Generals io", slug: "generals-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/generals-io/cover_16x9-1.png",
    iframeUrl: "https://generals.io/",
    rating: 4.3, playCount: 195000, featured: false,
    description: "Conquer the map in real-time multiplayer strategy battles.",
    tags: ["io", "real-time", "conquest", "multiplayer"]
  },
  {
    title: "Snake Game", slug: "snake-game-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/slitherio/cover_16x9-1.png",
    iframeUrl: "https://snake-game.io/",
    rating: 4.2, playCount: 350000, featured: false,
    description: "The original Snake game reimagined. Grow and outlast others.",
    tags: ["snake", "io", "classic", "grow"]
  },
  {
    title: "Fireboy and Watergirl", slug: "fireboy-and-watergirl", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/fireboy-and-watergirl-the-forest-temple/cover_16x9-1.png",
    iframeUrl: "https://www.mathsisfun.com/games/fireboy-watergirl-forest.html",
    rating: 4.6, playCount: 440000, featured: true,
    description: "Team up to solve puzzles in the Forest Temple.",
    tags: ["cooperative", "2-player", "puzzle", "adventure"]
  },
  {
    title: "Paper io 2", slug: "paper-io-2", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/paper-io-2/cover_16x9-1.png",
    iframeUrl: "https://sploop.io/",
    rating: 4.2, playCount: 350000, featured: false,
    description: "Claim territory by drawing shapes around land.",
    tags: ["io", "territory", "multiplayer", "casual"]
  },
  {
    title: "Worm io", slug: "worm-hunt", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/worm-hunt/cover_16x9-1.png",
    iframeUrl: "https://wormate.io/",
    rating: 4.2, playCount: 265000, featured: false,
    description: "Grow your worm by eating dots and defeating other worms.",
    tags: ["io", "snake", "multiplayer", "grow"]
  },
  {
    title: "Idle Farm", slug: "idle-farm", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/adventure-capitalist/cover_16x9-1.png",
    iframeUrl: "/games/idle/index.html",
    rating: 4.3, playCount: 320000, featured: false,
    description: "Build your idle gem empire — click to start, automate to grow.",
    tags: ["idle", "clicker", "breakout", "relaxing"]
  },
  {
    title: "Red Ball (Breakout)", slug: "red-ball-4", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/red-ball-4/cover_16x9-1.png",
    iframeUrl: "/games/breakout/index.html",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Break through walls and advance through levels.",
    tags: ["platformer", "physics", "adventure", "classic"]
  },
  {
    title: "Lordz io", slug: "lordz-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/lordz-io/cover_16x9-1.png",
    iframeUrl: "https://lordz.io/",
    rating: 4.1, playCount: 170000, featured: false,
    description: "Build your army and castle in real-time multiplayer strategy.",
    tags: ["io", "multiplayer", "army", "real-time"]
  },
  {
    title: "Flappy Mini", slug: "flappy-mini", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/flappy-bird/cover_16x9-1.png",
    iframeUrl: "/games/flappy/index.html",
    rating: 4.0, playCount: 550000, featured: false,
    description: "Flap your wings through the pipes!",
    tags: ["flappy", "challenging", "tap", "addictive"]
  },
  {
    title: "Diep io", slug: "diep-io", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/diep-io/cover_16x9-1.png",
    iframeUrl: "https://diep.io/",
    rating: 4.2, playCount: 290000, featured: false,
    description: "Control a tank, shoot shapes and enemies, and level up.",
    tags: ["io", "tanks", "multiplayer", "upgrade"]
  },
  {
    title: "Age of War Online", slug: "age-of-war-online", category: "Adventure",
    thumbnail: "https://imgs.crazygames.com/games/age-of-war/cover_16x9-1.png",
    iframeUrl: "https://ageofwar.io/",
    rating: 4.4, playCount: 290000, featured: false,
    description: "Evolve through the ages — from cavemen to the future — and crush your enemy.",
    tags: ["evolution", "base-defense", "war", "strategy"]
  },

  // ===== STRATEGY (12 games) =====
  {
    title: "Chess Pro", slug: "chess-pro", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/chess-free/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/chess/index.html",
    rating: 4.5, playCount: 310000, featured: false,
    description: "Classic chess against AI or a friend.",
    tags: ["chess", "strategy", "board", "classic"]
  },
  {
    title: "Bloons Tower Defense", slug: "bloons-tower-defense-5", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/bloons-tower-defense-5/cover_16x9-1.png",
    iframeUrl: "/games/tower/index.html",
    rating: 4.7, playCount: 520000, featured: true,
    description: "Place towers to stop enemy waves from reaching your base.",
    tags: ["tower-defense", "strategy", "upgrade", "waves"]
  },
  {
    title: "Mini Golf Course", slug: "mini-golf-strategy", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/mini-golf-club/cover_16x9-1.png",
    iframeUrl: "/games/golf/index.html",
    rating: 4.4, playCount: 200000, featured: false,
    description: "Plan the perfect shot through 5 tricky mini-golf holes.",
    tags: ["golf", "physics", "planning", "skill"]
  },
  {
    title: "Plants Defense", slug: "plants-vs-zombies", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/plants-vs-zombies/cover_16x9-1.png",
    iframeUrl: "/games/tower/index.html",
    rating: 4.6, playCount: 450000, featured: false,
    description: "Defend against enemy waves using strategic tower placement.",
    tags: ["tower-defense", "strategy", "waves", "casual"]
  },
  {
    title: "Tic Tac Ultimate", slug: "tic-tac-ultimate", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/tic-tac-toe/cover_16x9-1.png",
    iframeUrl: "/games/tictactoe/index.html",
    rating: 4.0, playCount: 200000, featured: false,
    description: "Challenge the minimax AI in Tic-Tac-Toe.",
    tags: ["tic-tac-toe", "ai", "board", "2-player"]
  },
  {
    title: "Solitaire Classic", slug: "classic-solitaire", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/classic-solitaire/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/solitaire/index.html",
    rating: 4.3, playCount: 260000, featured: false,
    description: "The timeless Klondike Solitaire.",
    tags: ["solitaire", "cards", "classic", "relaxing"]
  },
  {
    title: "Idle Gems Empire", slug: "factory-idle", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/factory-idle/cover_16x9-1.png",
    iframeUrl: "/games/idle/index.html",
    rating: 4.2, playCount: 175000, featured: false,
    description: "Build and automate your gem factory.",
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
  {
    title: "Generals Battle", slug: "generals-battle", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/generals-io/cover_16x9-1.png",
    iframeUrl: "https://generals.io/",
    rating: 4.3, playCount: 195000, featured: false,
    description: "Real-time strategy — expand your territory and crush opponents.",
    tags: ["io", "real-time", "conquest", "strategy"]
  },
  {
    title: "247 Mahjong", slug: "mahjong-247", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/mahjong-classic/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/mahjong/index.html",
    rating: 4.3, playCount: 350000, featured: false,
    description: "Clear tiles in this relaxing mahjong solitaire game.",
    tags: ["mahjong", "matching", "relaxing", "strategy"]
  },
  {
    title: "Checkers Pro", slug: "checkers-pro", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/checkers-online/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/checkers/index.html",
    rating: 4.0, playCount: 160000, featured: false,
    description: "Classic checkers with AI opponent.",
    tags: ["checkers", "board", "classic", "ai"]
  },
  {
    title: "Reversi Othello", slug: "reversi-othello", category: "Strategy",
    thumbnail: "https://imgs.crazygames.com/games/reversi/cover_16x9-1.png",
    iframeUrl: "https://playpager.com/embed/reversi/index.html",
    rating: 4.1, playCount: 130000, featured: false,
    description: "Flip tiles and dominate the board in Othello / Reversi.",
    tags: ["reversi", "othello", "board", "strategy"]
  },

  // ===== ARCADE (12 games) =====
  {
    title: "Snake Bite", slug: "snake-classic", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/snake-io/cover_16x9-1.png",
    iframeUrl: "/games/snake/index.html",
    rating: 4.1, playCount: 180000, featured: false,
    description: "Grow your snake — eat, grow, avoid. The timeless classic.",
    tags: ["io", "snake", "classic", "casual"]
  },
  {
    title: "Tetris Classic", slug: "tetris-arcade", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "/games/tetris/index.html",
    rating: 4.6, playCount: 600000, featured: true,
    description: "Stack falling blocks to clear lines — levels get faster!",
    tags: ["tetris", "blocks", "classic", "retro"]
  },
  {
    title: "Diep Tanks", slug: "diep-tanks", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/diep-io/cover_16x9-1.png",
    iframeUrl: "https://diep.io/",
    rating: 4.2, playCount: 290000, featured: false,
    description: "Shoot everything, level up your tank, take control of the arena.",
    tags: ["io", "tanks", "multiplayer", "upgrade"]
  },
  {
    title: "React Tetris", slug: "react-tetris", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "https://chvin.github.io/react-tetris/",
    rating: 4.5, playCount: 400000, featured: false,
    description: "Modern Tetris with gorgeous animations — built in React.",
    tags: ["tetris", "modern", "blocks", "fun"]
  },
  {
    title: "Pac-Man Classic", slug: "pacman-arcade", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/pac-man/cover_16x9-1.png",
    iframeUrl: "/games/pacman/index.html",
    rating: 4.5, playCount: 450000, featured: false,
    description: "Eat dots and avoid ghosts in the legendary maze game.",
    tags: ["pacman", "maze", "classic", "arcade"]
  },
  {
    title: "Slope Race", slug: "slope-race", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/slope/cover_16x9-1.png",
    iframeUrl: "https://slope-game.com/",
    rating: 4.5, playCount: 380000, featured: false,
    description: "Roll down an endless neon slope — how far can you go?",
    tags: ["slope", "ball", "endless", "speed"]
  },
  {
    title: "Space Invaders Retro", slug: "space-invaders-retro", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/space-invaders/cover_16x9-1.png",
    iframeUrl: "/games/invaders/index.html",
    rating: 4.4, playCount: 320000, featured: false,
    description: "Blast alien waves with bunker cover in this retro shooter.",
    tags: ["retro", "classic", "shooting", "arcade"]
  },
  {
    title: "Floppy Bird", slug: "floppy-bird", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/flappy-bird/cover_16x9-1.png",
    iframeUrl: "https://nebez.github.io/floppybird/",
    rating: 4.0, playCount: 450000, featured: false,
    description: "Open-source Flappy Bird. Simple concept, brutal difficulty.",
    tags: ["flappy", "arcade", "tap", "challenge"]
  },
  {
    title: "Hextris Arcade", slug: "hextris-arcade", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/tetrix/cover_16x9-1.png",
    iframeUrl: "https://hextris.io/",
    rating: 4.6, playCount: 300000, featured: false,
    description: "Hexagonal Tetris — rotate and stack before you overflow!",
    tags: ["hexagon", "blocks", "puzzle", "reflex"]
  },
  {
    title: "Bubble Shooter Pro", slug: "bubble-shooter", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/bubble-shooter-classic/cover_16x9-1.png",
    iframeUrl: "/games/bubble/index.html",
    rating: 4.3, playCount: 290000, featured: false,
    description: "Aim and fire colored bubbles — clear the board!",
    tags: ["bubble", "shooter", "match", "colorful"]
  },
  {
    title: "Memory Cards", slug: "memory-cards", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/memory/cover_16x9-1.png",
    iframeUrl: "/games/memory/index.html",
    rating: 4.2, playCount: 200000, featured: false,
    description: "Flip and match emoji cards — train your memory!",
    tags: ["memory", "cards", "emojis", "brain"]
  },
  {
    title: "Helix Jump", slug: "helix-jump", category: "Arcade",
    thumbnail: "https://imgs.crazygames.com/games/helix-jump/cover_16x9-1.png",
    iframeUrl: "https://gabrielecirulli.github.io/2048/",
    rating: 4.4, playCount: 340000, featured: false,
    description: "The game that started it all — slide tiles to reach 2048!",
    tags: ["2048", "numbers", "sliding", "puzzle"]
  },
];
