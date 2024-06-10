import { vi, test, expect } from 'vitest'
import { hello } from './foo';

vi.mock('/foo');

test('hello', () => {
    expect(hello("Bla")).toBe("TEST");
})
