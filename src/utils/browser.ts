export function classNames(...names: (number | string | boolean | null | undefined)[]) {
  return names.filter((it) => it !== null && it !== undefined).join(' ');
}
