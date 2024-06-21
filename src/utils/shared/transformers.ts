//

export function transformSnakeCaseToCamelCase<T>(input: T): T {
  if (typeof input !== "object" || input === null) {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => transformSnakeCaseToCamelCase(item)) as T;
  }

  const newObj = {} as T;

  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      const newKey = key.replace(/([-_][a-z])/g, (group) =>
        group.toUpperCase().replace("-", "").replace("_", "")
      ) as keyof T;
      newObj[newKey] = transformSnakeCaseToCamelCase(input[key]);
    }
  }

  return newObj;
}
