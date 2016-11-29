/* globals __DEV__ */
import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}
  preload () {
      this.game.load.tilemap('level', './assets/level/level_map.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('tiles', './assets/level/tile_map.png');
      this.game.load.spritesheet('player', './assets/images/boy.png', 30, 30);
  }

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#787878';

    let map = this.game.add.tilemap('level');
    map.addTilesetImage('tile_map', 'tiles');
    map.setCollision([2]);
    map.setCollisionByExclusion([ 1 ]);

    this.layer = map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.player = game.add.sprite(32, 32, 'player');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.bounce.y = 0.2;
    this.player.body.collideWorldBounds = true;
  

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.layer);
    this.game.physics.arcade.overlap(this.player, this.layer);

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -100;
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 100;
    }
    else if (this.cursors.up.isDown)
    {
        this.player.body.velocity.y = -100;
    }
     else if (this.cursors.down.isDown)
    {
        this.player.body.velocity.y = 100;
    }
     else {
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
    }

  }

  render () {}
}
