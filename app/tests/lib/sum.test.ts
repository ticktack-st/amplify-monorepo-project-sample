import { sum } from '@/lib/sum'
import { describe, expect, it } from 'vitest'

describe('sum function', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should return 0 when adding -1 and 1', () => {
    expect(sum(-1, 1)).toBe(0)
  })

  it('should return a negative number when adding two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5)
  })
})
