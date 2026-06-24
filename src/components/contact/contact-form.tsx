"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const interests = [
  "Cosmetics & Beauty",
  "Office Supplies",
  "Branding & Custom Merchandise",
  "Corporate Gifts",
  "General Inquiry",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold">Thank you</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your message has been received. Our team will get back to you with a tailored response soon.
        </p>
        <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="interest">I&apos;m interested in</Label>
        <Select name="interest">
          <SelectTrigger id="interest">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {interests.map((interest) => (
              <SelectItem key={interest} value={interest}>
                {interest}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your needs, quantities or branding requirements..."
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  )
}
