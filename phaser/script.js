var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: {
        key: 'main',
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);
var map;
var player;
var cursors;
var groundLayer, coinLayer;
var text;
function preload() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    // tiles in spritesheet
    this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
    // simple coin image
    this.load.image('coin', 'assets/coinGold.png');
    // player animations
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');
}
function create() {
  // load the map
  map = this.make.tilemap({key: 'map'});

  // tiles for the ground layer
  var groundTiles = map.addTilesetImage('tiles');
  // create the ground layer
  groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);
  // the player will collide with this layer
  groundLayer.setCollisionByExclusion([-1]);
  // set the boundaries of our game world
  this.physics.world.bounds.width = groundLayer.width;
  this.physics.world.bounds.height = groundLayer.height;
}
function update() {
}
