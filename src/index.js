export default function extractArray(character) {
  const array = [];

  for (const attack of character.special) {
    const {
      id, name, description, icon,
    } = attack;
    array.push({
      id,
      name,
      description: description !== undefined ? description : 'Описание недоступно',
      icon,
    });
  }

  return array;
}
