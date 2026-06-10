'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from '@/app/actions'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setResult(null)
    const data = new FormData(e.currentTarget)
    const res = await submitContactForm(data)
    setResult(res)
    setPending(false)
    if (res.success) {
      (e.target as HTMLFormElement).reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your Name *</Label>
          <Input id="name" name="name" placeholder="Raj Sharma" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" placeholder="raj@example.com" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="court_name">Court / Venue (optional)</Label>
        <Input id="court_name" name="court_name" placeholder="e.g. Brilliant Convention Court" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help..."
          className="resize-none"
          rows={4}
        />
      </div>

      {result?.error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{result.error}</p>
      )}

      {result?.success ? (
        <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-lg px-4 py-3">
          <CheckCircle size={18} />
          <span className="text-sm font-medium">Thanks! We&apos;ll be in touch soon.</span>
        </div>
      ) : (
        <Button
          type="submit"
          disabled={pending}
          className="w-full bg-orange-600 hover:bg-orange-700"
        >
          {pending ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      )}
    </form>
  )
}
