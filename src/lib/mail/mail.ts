import * as handlebars from 'handlebars'
import { mailTemplate } from './template'

export function compileMailTemplate(name: string, message: string, body: string) {
  const template = handlebars.compile(mailTemplate)
  const htmlBody = template({ name, message, body })
  return htmlBody
}