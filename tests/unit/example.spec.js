import { describe, it, expect } from 'vitest'

describe('Example test', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2)
  })
  
  it('should test something vue related', () => {
    const message = 'Hello Vue'
    expect(message).toBe('Hello Vue')
  })
})
