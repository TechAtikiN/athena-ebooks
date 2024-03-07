// named imports
import { mailTemplate } from './template'

// default imports
import * as handlebars from 'handlebars'

export function compileMailTemplate(name: string, message: string, body: string) {
  const template = handlebars.compile(mailTemplate)
  const htmlBody = template({ name, message, body })
  return htmlBody
}