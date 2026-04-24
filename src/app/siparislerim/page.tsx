import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function SiparislerimPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siparişlerim
            </h1>
            <p className="text-muted-foreground">
              Sipariş geçmişinizi görüntüleyin
            </p>
          </div>

          {/* Empty State */}
          <div className="glass-card rounded-2xl p-12 neon-border-cyan text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">
              Henüz Siparişiniz Yok
            </h2>
            <p className="text-muted-foreground mb-8">
              İlk siparişinizi verin ve burada takip edin!
            </p>
            <Link
              href="/homepage#products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display font-bold rounded-xl neon-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Alışverişe Başla
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link 
              href="/hesabim" 
              className="text-primary hover:underline font-medium"
            >
              Hesabıma Dön
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
