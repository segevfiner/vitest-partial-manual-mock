import { vi } from 'vitest';

const mod = vi.createMockFromModule<typeof import('../foo')>('../foo');
// Doesn't work, infinite loop
// const mod = vi.importMock<typeof import('../foo')>('../foo');
mod.hello = vi.fn(() => 'TEST');
export = mod;
