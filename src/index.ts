export function loader(name: string, options: any = {}) {
    const loader = name.includes('-loader') ? name : `${name}-loader`;
    return { loader, options };
}
