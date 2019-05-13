import Character from '../src/js/Character';

test('Character incorrect min length name', () => {
  function newCharacter() {
    return new Character('л', 'Bowman');
  }
  expect(newCharacter).toThrowError('имя персонажа не корректно');
});

test('Character incorrect max lenth name', () => {
  function newCharacter() {
    return new Character('лучниклучник', 'Bowman');
  }
  expect(newCharacter).toThrowError('имя персонажа не корректно');
});

test('Character incorrect type name', () => {
  function newCharacter() {
    return new Character(1, 'Bowman');
  }
  expect(newCharacter).toThrowError('имя персонажа не корректно');
});

test('Character unknown type', () => {
  function newCharacter() {
    return new Character('лучник', 'Archer');
  }
  expect(newCharacter).toThrowError('неизвестный тип персонажа');
});

test('Character Bowman', () => {
  const bowman = new Character('лучник', 'Bowman');
  const expected = {
    name: 'лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});
