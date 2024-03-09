import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCase(str: string) {
  return str.trim().toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())
}

export function formatDate(date: string) {
  return new Date(Number(date)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}