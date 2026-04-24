import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default async function HesabimPage() {
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
              Hesabım
            </h1>
            <p className="text-muted-foreground">
              Hesap bilgilerinizi görüntüleyin ve yönetin
            </p>
          </div>

          {/* User Info Card */}
          <div className="glass-card rounded-2xl p-8 neon-border-cyan mb-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow-cyan">
                <span className="font-display text-3xl font-bold text-primary">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Hoş Geldiniz
                </h2>
                <p className="text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">E-posta</p>
                <p className="text-foreground font-medium">{user.email}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Hesap Durumu</p>
                <p className="text-primary font-medium">
                  {user.email_confirmed_at ? 'Doğrulanmış' : 'Doğrulanmamış'}
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Kayıt Tarihi</p>
                <p className="text-foreground font-medium">
                  {new Date(user.created_at).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Son Giriş</p>
                <p className="text-foreground font-medium">
                  {user.last_sign_in_at 
                    ? new Date(user.last_sign_in_at).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : 'Bilinmiyor'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/siparislerim" 
              className="glass-card rounded-xl p-6 hover:neon-border-cyan transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:neon-glow-cyan transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Siparişlerim
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sipariş geçmişinizi görüntüleyin
                  </p>
                </div>
              </div>
            </Link>

            <Link 
              href="/homepage" 
              className="glass-card rounded-xl p-6 hover:neon-border-purple transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:neon-glow-purple transition-all duration-300">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    Alışverişe Devam Et
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ürünleri keşfedin
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
