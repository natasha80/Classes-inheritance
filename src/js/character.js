export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('The name must be a string!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('The name must be between 2 and 10 characters!');
    }

    const listOfTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!listOfTypes.includes(type)) {
      throw new Error('The type must be selected from the list of suggested types!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
