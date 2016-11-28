/* globals __DEV__ */
import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}
  preload () {
      this.game.load.tilemap('level', './assets/level/level_map.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('tiles', './assets/level/tile_map.png');
      this.game.load.spritesheet('player', './assets/images/betty2.png', 16, 16);
  }

  create () {
    this.game.stage.backgroundColor = '#787878';

    //  The 'mario' key here is the Loader key given in game.load.tilemap
    let map = this.game.add.tilemap('level');

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('tile_map', 'tiles');
    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    let layer = map.createLayer('Tile Layer 1');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
  }

  render () {}
}
