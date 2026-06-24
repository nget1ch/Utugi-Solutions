import * as React from "react"

interface FloatingWhatsAppProps {
  /**
   * Phone number in international format, digits only (e.g. "254742799481").
   * Defaults to the Utugi business line from the footer.
   */
  phoneNumber?: string
  /**
   * Pre-filled chat message.
   */
  message?: string
  /**
   * Accessible label for screen readers.
   */
  label?: string
}

/**
 * Floating WhatsApp button — fixed to the bottom-right of the viewport.
 * Renders a bright green circular button with the WhatsApp glyph,
 * matching the brand's recognizable FAB style.
 */
export function FloatingWhatsApp({
  phoneNumber = "254742799481",
  message = "Hello Utugi! I'd like to make an enquiry.",
  label = "Chat with us on WhatsApp",
}: FloatingWhatsAppProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={
        "group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center " +
        "rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 " +
        "ring-1 ring-black/5 transition-transform duration-200 ease-out " +
        "hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] " +
        "md:bottom-6 md:right-6 md:h-16 md:w-16"
      }
    >
      {/* Soft pulsing halo to draw the eye, without changing the button itself */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping"
        style={{ animationDuration: "2.4s" }}
      />
      {/* WhatsApp glyph (official path) */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.013.852.243 1.733.674 2.465.846 1.426 1.82 2.683 3.1 3.716.49.39 1.04.717 1.59 1.044.673.4 1.39.702 2.166.83.387.06 1.16.23 1.51.23.28 0 .57-.05.83-.13.85-.27 2.07-.93 2.27-1.83.04-.18.06-.36.06-.55 0-.27-.78-.71-1.05-.86-.34-.2-.7-.4-1.06-.58-.18-.09-.36-.13-.54-.13z" />
        <path d="M16.005 0C7.16 0 .001 7.158.001 16.005c0 2.81.734 5.454 2.018 7.76L0 32l8.395-2.205a15.94 15.94 0 0 0 7.61 1.936h.005C24.85 31.731 32 24.573 32 16.005 32 7.158 24.85 0 16.005 0zm.001 29.198a13.2 13.2 0 0 1-6.717-1.84l-.482-.286-4.987 1.31 1.332-4.86-.314-.5a13.16 13.16 0 0 1-2.018-7.027c0-7.272 5.916-13.187 13.197-13.187 3.527 0 6.842 1.375 9.336 3.868a13.13 13.13 0 0 1 3.864 9.328c0 7.272-5.916 13.194-13.196 13.194z" />
      </svg>
    </a>
  )
}
