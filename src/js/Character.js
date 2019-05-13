export default function Character(name, type) {
  // TODO: add logic here
  const allowedTypes = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Daemon: {
      attack: 25,
      defence: 25,
    },
    Undead: {
      attack: 40,
      defence: 10,
    },
    Zombie: {
      attack: 10,
      defence: 40,
    },
  };
  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
    throw new Error('имя персонажа не корректно');
  }
  if (Object.keys(allowedTypes).indexOf(type) === -1) {
    throw new Error('неизвестный тип персонажа');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = allowedTypes[type].attack;
  this.defence = allowedTypes[type].defence;
}
