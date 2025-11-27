"use client"

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2025 Salah Eddine Elkihel. Tous droits réservés.</p>
          <div className="flex gap-6 items-center flex-wrap justify-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          nav, button, .no-print {
            display: none !important;
          }
          body {
            background: white;
            color: black;
          }
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </footer>
  )
}
