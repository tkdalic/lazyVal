/**
 * lazy val
 *
 * @export
 * @returns {*}
 */
export function lazy(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): any {
  const propertyValue = propertyKey + "Value";
  const propertyIsEvaluated = propertyKey + "IsEvaluated";
  Object.defineProperty(target, propertyValue, {
    value: null,
    writable: true,
    enumerable: false,
    configurable: false
  });
  Object.defineProperty(target, propertyIsEvaluated, {
    value: false,
    writable: true,
    enumerable: false,
    configurable: false
  });

  const propertyFunction = descriptor.value;

  descriptor.value = (...args: any[]) => {
    if (target[propertyIsEvaluated] === false) {
      target[propertyValue] = propertyFunction(...args);
      target[propertyIsEvaluated] = true;
    }
    return target[propertyValue];
  };
}
