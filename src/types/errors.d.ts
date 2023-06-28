/* eslint @typescript-eslint/no-explicit-any: 0 */
export type Constructable<T> = new (...args: any[]) => T

export interface ApplicationErrorField<Name extends string> {
  readonly name: `${Name}`
}
export function ApplicationErrorMixin<T, N extends string>(
  Base: Constructable<T>,
  name: N,
): Constructable<T & ApplicationErrorField<N>>

export class ApplicationError extends ApplicationErrorMixin(Error, 'Error') {}
