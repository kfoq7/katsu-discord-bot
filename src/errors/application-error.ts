/* eslint @typescript-eslint/no-explicit-any: 0 */
import type { Constructable } from '../types'

function makeApplicationError<T extends Constructable<object>>(Base: T) {
  return class ApplicationError extends Base {
    constructor(...args: any[]) {
      super(String(args))
      Error.captureStackTrace?.(this, ApplicationError)
    }
  }
}

export const ApplicationError = makeApplicationError(Error)
