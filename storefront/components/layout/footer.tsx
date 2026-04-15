'use client'

import Link from 'next/link'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'
import { Instagram, Mail } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Brownies', href: '/products' },
    { label: 'Signature Box', href: '/products' },
    { label: 'Bundle & Save', href: '/products' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'Our Story', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-foreground text-primary-foreground">
      <div className="container-custom py-section-sm">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold text-primary-foreground">
                Amboras
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Handcrafted brownies baked in small batches with premium ingredients. Every bite tells a story.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary-foreground/70" />
              </a>
              <a
                href="/contact"
                className="p-2 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/60 transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4 text-primary-foreground/70" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/40">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Amboras Bakery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-primary-foreground/30">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
