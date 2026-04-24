'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import Icon from '@/components/ui/AppIcon';

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supabase = createClient()
    
    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setDropdownOpen(false)
    window.location.href = '/homepage'
  }

  if (loading) {
    return (
      <div className="w-10 h-10 glass-card rounded-full animate-pulse" />
    )
  }

  if (!user) {
    return (
      <Link
        href="/auth/login"
        className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover:neon-border-cyan transition-all duration-300 group"
      >
        <Icon
          name="UserIcon"
          size={18}
          className="text-foreground group-hover:text-primary transition-colors duration-300"
        />
        <span className="hidden sm:block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          Giriş Yap
        </span>
      </Link>
    )
  }

  const userInitial = user.email?.charAt(0).toUpperCase() || 'U'

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center w-10 h-10 glass-card rounded-full hover:neon-border-cyan transition-all duration-300 group"
        aria-label="Kullanıcı menüsü"
      >
        <span className="font-display text-sm font-bold text-primary group-hover:text-foreground transition-colors duration-300">
          {userInitial}
        </span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 glass-card rounded-xl border border-border overflow-hidden animate-fade-in-down z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium text-foreground truncate">
              {user.email}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Hoş geldiniz
            </p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              href="/hesabim"
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              <Icon name="UserIcon" size={16} />
              Hesabım
            </Link>
            <Link
              href="/siparislerim"
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              <Icon name="ShoppingBagIcon" size={16} />
              Siparişlerim
            </Link>
          </div>

          {/* Sign Out */}
          <div className="border-t border-border py-2">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
            >
              <Icon name="ArrowRightStartOnRectangleIcon" size={16} />
              Çıkış Yap
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
