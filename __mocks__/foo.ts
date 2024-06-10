import { vi } from 'vitest';

// Doesn't exist
const mod = vi.createMockFromModule<typeof import('../foo')>('../foo');
// Doesn't work, infinite loop
// const mod = vi.importMock<typeof import('../foo')>('../foo');
mod.hello = vi.fn(() => 'TEST');
export = mod;
