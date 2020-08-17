export function padLeft(nr: number, n: number, str?: string) {
    return Array(n - String(nr).length + 1).join(str || "0") + nr;
}
