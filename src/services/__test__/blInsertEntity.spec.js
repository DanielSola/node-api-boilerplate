import blInserEntity from '../blInsertEntity';

test('Returns entity', async () => {
  const entity = { id: 123, message: 'foo' };

  const result = await blInserEntity({ entity });

  expect(result).toStrictEqual({ entity, success: true });
})