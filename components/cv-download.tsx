"use client"

import { Download } from 'lucide-react'

export default function CVDownload() {
  const handleDownload = (language: 'fr' | 'en') => {
    const filename = language === 'fr' 
      ? 'CV ELKIHEL SALAH-EDDINE-FR.pdf'
      : 'CV ELKIHEL SALAH-EDDINE-AN.pdf'
    
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    const link = document.createElement('a')
    link.href = `${basePath}/${encodeURIComponent(filename)}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="py-12 px-6 md:px-16 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h3 className="text-2xl font-bold text-foreground mb-4">Télécharger mon CV</h3>
        <p className="text-muted-foreground mb-8">Disponible en français et en anglais</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleDownload('fr')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium smooth-transition hover-lift inline-flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 smooth-transition" />
            <span>CV Français (PDF)</span>
          </button>
          
          <button
            onClick={() => handleDownload('en')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium smooth-transition hover-lift inline-flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 smooth-transition" />
            <span>English CV (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  )
}
