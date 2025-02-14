import * as _ from 'radashi'

describe('series function', () => {
  const sut = _.series([
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday'
  ] as const)

  describe('min method', () => {
    test('correctly returns min', () => {
      const result = sut.min('monday', 'tuesday')
      expect(result).toBe('monday')
    })
    test('correctly returns min when second arg', () => {
      const result = sut.min('tuesday', 'monday')
      expect(result).toBe('monday')
    })
  })

  describe('max method', () => {
    test('correctly returns max', () => {
      const result = sut.max('thursday', 'tuesday')
      expect(result).toBe('thursday')
    })
    test('correctly returns max when second arg', () => {
      const result = sut.max('tuesday', 'thursday')
      expect(result).toBe('thursday')
    })
  })

  describe('first method', () => {
    test('returns first item', () => {
      const result = sut.first()
      expect(result).toBe('monday')
    })
  })

  describe('last method', () => {
    test('returns last item', () => {
      const result = sut.last()
      expect(result).toBe('friday')
    })
  })

  describe('next method', () => {
    test('returns next item', () => {
      const result = sut.next('wednesday')
      expect(result).toBe('thursday')
    })
    test('returns first given last exhausted', () => {
      const result = sut.next('friday')
      expect(result).toBe('monday')
    })
    test('returns the given default when the last is exhausted', () => {
      const result = sut.next('friday', 'wednesday')
      expect(result).toBe('wednesday')
    })
  })

  describe('previous method', () => {
    test('returns previous item', () => {
      const result = sut.previous('wednesday')
      expect(result).toBe('tuesday')
    })
    test('returns last given first exhausted', () => {
      const result = sut.previous('monday')
      expect(result).toBe('friday')
    })
    test('returns the given default when the first is exhausted', () => {
      const result = sut.previous('monday', 'wednesday')
      expect(result).toBe('wednesday')
    })
  })

  describe('spin method', () => {
    test('returns current given zero', () => {
      const result = sut.spin('wednesday', 0)
      expect(result).toBe('wednesday')
    })
    test('returns friday given -3 starting at wednesday', () => {
      const result = sut.spin('wednesday', -3)
      expect(result).toBe('friday')
    })
    test('returns monday given 3 starting at wednesday', () => {
      const result = sut.spin('wednesday', 3)
      expect(result).toBe('monday')
    })
    test('returns monday given 13 starting at wednesday', () => {
      const result = sut.spin('wednesday', 13)
      expect(result).toBe('monday')
    })
  })
})
