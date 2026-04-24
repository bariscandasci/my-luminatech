import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-background to-background" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center justify-center gap-2 mb-8 group">
          <AppLogo size={40} />
          <span className="font-display text-xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
            LUMINA<span className="text-primary">TECH</span>
          </span>
        </Link>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 border border-red-500/30 animate-fade-in-up text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Bir Hata Oluştu
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {params?.error 
              ? `Hata kodu: ${params.error}`
              : 'Kimlik doğrulama sırasında beklenmeyen bir hata oluştu.'
            }
          </p>

          <div className="space-y-3">
            <Link
              href="/auth/login"
              className="block w-full py-3 px-4 bg-primary text-primary-foreground font-display font-bold rounded-xl neon-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Tekrar Deneyin
            </Link>
            <Link
              href="/homepage"
              className="block w-full py-3 px-4 glass-card border border-border text-foreground font-medium rounded-xl hover:neon-border-cyan transition-all duration-300"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
