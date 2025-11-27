"use client"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg no-print"
      title="Télécharger en PDF"
    >
      Télécharger PDF
    </button>
  )
}
