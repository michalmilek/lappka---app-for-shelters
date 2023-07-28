/* function addDollarSignToCustomProps<
  T extends Record<string, any>,
  U extends Record<string, any>
>(
  props: T,
  filter: U
): {
  [K in keyof T as K extends keyof U
    ? K
    : `$${Extract<keyof T, string>}`]: T[K];
} {
  const enhancedProps = {} as {
    [K in keyof T as K extends keyof U
      ? K
      : `$${Extract<keyof T, string>}`]: T[K];
  };

  for (const key in props) {
    if (props.hasOwnProperty(key) && !(key in filter)) {
      enhancedProps[`$${key}` as `$${Extract<keyof T, string>}`] = props[key];
    }
  }

  return enhancedProps;
}
 */

export function test() {}
