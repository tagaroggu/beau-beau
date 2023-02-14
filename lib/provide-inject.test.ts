import { provide, inject, provideGlobal, injectGlobal } from "./provide-inject";
import { it, expect, beforeEach } from 'vitest';

it('Global document is defined', () => {
    expect(document).not.toBe(undefined);
});