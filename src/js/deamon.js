import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defens = 40;
  }
}
