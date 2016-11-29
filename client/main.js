import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import MapState from './states/Map'

    console.log('Test_test3');

class Game extends Phaser.Game {

  constructor () {
    let width = 480;
    let height = 416;

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Map', MapState, false);
    //this.state.add('Boot', BootState, false)
    //this.state.add('Splash', SplashState, false)
    //this.state.add('Game', GameState, false)

    this.state.start('Map')
  }
}

window.game = new Game()
