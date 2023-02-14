const contexts = new WeakMap<HTMLElement, Map<string, unknown>>();

export function provide(element: HTMLElement, key: string, value: unknown) {
    if (!contexts.has(element)) contexts.set(element, new Map());
    contexts.get(element)?.set(key, value);
}

export function inject(element: HTMLElement, key: string, fallback: unknown): unknown {
    if (contexts.has(element) && contexts.get(element)?.has(key)) return contexts.get(element)?.get(key);
    else if (element.parentElement) return inject(element.parentElement, key, fallback);
    else return fallback;
}

export function provideGlobal(key: string, value: unknown) {
    provide(document.documentElement, key, value);
}

export function injectGlobal(key: string, fallback: unknown): unknown {
    return inject(document.documentElement, key, fallback);
}

export const setContext = provide;
export const getContext = inject;
export const setGlobalContext = provideGlobal;
export const getGlobalContext = injectGlobal;