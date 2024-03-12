import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCase(str: string) {
  const formatterStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  return formatterStr
}

export function formatDate(date: string) {
  return new Date(Number(date)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function truncateText(text: string, length: number) {
  return text.length > length ? `${text.slice(0, length)}...` : text
}