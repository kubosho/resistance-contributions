import { DOMWindow } from 'jsdom'

type CleanUpFunc = () => void

export function replaceGlobalThisWithJsDom(win: DOMWindow): CleanUpFunc {
  globalThis.window = win as unknown as Window & typeof globalThis

  const propList = Object.getOwnPropertyNames(win).filter(
    (prop) => !Object.prototype.hasOwnProperty.call(globalThis, prop),
  )

  propList.forEach((prop) => {
    // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Global & typeof globalThis'.
    globalThis[prop] = win[prop]
  })

  return () => {
    propList.forEach((prop) => {
      // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Global & typeof globalThis'.
      delete globalThis[prop]
    })

    // @ts-expect-error: Type 'DOMWindow' is not assignable to type 'Window & typeof globalThis'.
    delete globalThis.window
  }
}
