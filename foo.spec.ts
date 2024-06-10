import { vi, test, expect } from 'vitest'
import { hello, foo } from './foo';

vi.mock('/foo');

test('hello', () => {
    expect(hello("Bla")).toBe("TEST");
})

test('foo', () => {
    expect(foo(1)).toBe(2);
})
