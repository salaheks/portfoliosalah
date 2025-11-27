import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export function getAssetPath(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash if basePath already has one
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}
