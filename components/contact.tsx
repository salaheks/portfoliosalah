"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation supplémentaire
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }

    // Ici vous pouvez ajouter l'intégration avec un service d'email (EmailJS, Resend, etc.)
    // Pour l'instant, on simule l'envoi
    try {
      // Exemple avec mailto: (fallback)
      const mailtoLink = `mailto:salahelkihel1710@gmail.com?subject=Contact depuis portfolio&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`
      window.location.href = mailtoLink
      
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    }
  }

  return (
    <section id="contact" className="px-6 md:px-16 py-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Prenons contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou une opportunité intéressante ? N'hésitez pas à me contacter. Je suis toujours
            ouvert à des discussions enrichissantes sur la technologie et les nouvelles collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background border border-border rounded-lg p-8 text-center smooth-transition hover-lift animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 smooth-transition group-hover:scale-110">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Email</h3>
            <a
              href="mailto:salahelkihel1710@gmail.com"
              className="text-lg text-muted-foreground hover:text-primary smooth-transition break-all"
            >
              salahelkihel1710@gmail.com
            </a>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 text-center smooth-transition hover-lift animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 smooth-transition group-hover:scale-110">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Téléphone</h3>
            <a href="tel:+212628836995" className="text-lg text-muted-foreground hover:text-primary smooth-transition">
              +212 6 28 83 69 95
            </a>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 text-center smooth-transition hover-lift animate-fade-in-up group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 smooth-transition group-hover:scale-110">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Localisation</h3>
            <p className="text-lg text-muted-foreground">Safi, Maroc</p>
          </div>
        </div>

        <div className="bg-background border border-border rounded-lg p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Envoyez-moi un message</h3>
          
          {submitted ? (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-primary font-semibold">Message envoyé avec succès!</p>
              <p className="text-muted-foreground mt-2">Je vous répondrai dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={1000}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition resize-none"
                  placeholder="Votre message..."
                ></textarea>
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {formData.message.length}/1000 caractères
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium smooth-transition hover-lift inline-flex items-center justify-center gap-2 group"
              >
                <span>Envoyer le message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-center text-foreground font-semibold mb-6">Connectons-nous sur les réseaux</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium smooth-transition hover:bg-primary hover:text-primary-foreground hover-lift"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium smooth-transition hover:bg-primary hover:text-primary-foreground hover-lift"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium smooth-transition hover:bg-primary hover:text-primary-foreground hover-lift"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Disponible pour des discussions et collaborations • Réponse garantie sous 48h
          </p>
        </div>
      </div>
    </section>
  )
}
