import Link from 'next/link'
import AppLogo from '@/components/ui/AppLogo'

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center justify-center gap-2 mb-8 group">
          <AppLogo size={40} />
          <span className="font-display text-xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
            LUMINA<span className="text-primary">TECH</span>
          </span>
        </Link>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 neon-border-cyan animate-fade-in-up text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow-cyan">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Kayıt Başarılı!
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            E-posta adresinize bir doğrulama bağlantısı gönderdik. Lütfen e-postanızı kontrol edin ve hesabınızı doğrulayın.
          </p>

          <div className="space-y-3">
            <Link
              href="/auth/login"
              className="block w-full py-3 px-4 bg-primary text-primary-foreground font-display font-bold rounded-xl neon-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Giriş Sayfasına Git
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
