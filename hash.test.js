const hash = require('./hash.js')

describe('Cesar encrypt to work', () => {
  test('with default 3 step', () => {
    expect(hash.cesarEncrypt('a ligeira raposa marrom saltou sobre o cachorro cansadoz', 3))
      .toBe('d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc')
  })

  test('with 0 step, same text', () => {
    expect(hash.cesarEncrypt('lucas', 0)).toBe('lucas')
  })

  test('with 25 step, without loop', () => {
    expect(hash.cesarEncrypt('lucas', 25)).toBe('ktbzr')
  })

  test('with 27 step, with one loop', () => {
    expect(hash.cesarEncrypt('lucas', 27)).toBe('mvdbt')
  })

  test('with 79 step, with two loops', () => {
    expect(hash.cesarEncrypt('lucas', 79)).toBe('mvdbt')
  })
})

describe('Cesar decrypt to work', () => {
  test('with default 3 step', () => {
    expect(hash.cesarDecrypt('d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc', 3))
      .toBe('a ligeira raposa marrom saltou sobre o cachorro cansadoz')
  })

  test('with 0 step, same text', () => {
    expect(hash.cesarDecrypt('lucas', 0)).toBe('lucas')
  })

  test('with 25 step, without loop', () => {
    expect(hash.cesarDecrypt('ktbzr', 25)).toBe('lucas')
  })

  test('with 27 step, with one loop', () => {
    expect(hash.cesarDecrypt('mvdbt', 27)).toBe('lucas')
  })

  test('with 79 step, with two loops', () => {
    expect(hash.cesarDecrypt('mvdbt', 79)).toBe('lucas')
  })
})
