import pair from '.'

test('creates array pair from arguments', () => {
  expect(pair('a', 'b')).toEqual(['a', 'b'])
  expect(pair('a')('b')).toEqual(['a', 'b'])
})
