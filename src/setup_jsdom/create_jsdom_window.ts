import { DOMWindow, JSDOM } from 'jsdom'

type CustumHtmlStringParam = {
  customHtmlElementStartString?: string
  customBodyElementStartString?: string
}

export function createJsDomWindow(
  bodyChildrenString: string,
  param?: CustumHtmlStringParam,
): DOMWindow {
  const html = param?.customHtmlElementStartString ?? '<html>'
  const body = param?.customBodyElementStartString ?? '<body>'
  const { window } = new JSDOM(
    `<!DOCTYPE html>${html}<head></head>${body}${bodyChildrenString}</body></html>`,
  )

  return window
}
