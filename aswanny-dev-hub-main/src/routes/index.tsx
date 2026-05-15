import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-coding.jpg";
import workEs3efnny from "@/assets/work-es3efnny.png";
import { Code2, FileText, ShoppingBag, Layout, Facebook, MessageCircle, Sparkles, ArrowLeft, PenTool, ExternalLink, Construction } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Code2, title: "تطوير المواقع", desc: "مواقع سريعة، متجاوبة، ومصممة بمعايير احترافية تواكب أحدث التقنيات." },
  { icon: FileText, title: "إنشاء CV احترافي", desc: "سير ذاتية مميزة تبرز مهاراتك وتفتح لك أبواب الفرص." },
  { icon: ShoppingBag, title: "متاجر إلكترونية", desc: "متاجر متكاملة بتجربة شراء سلسة وإدارة سهلة لمنتجاتك." },
  { icon: Layout, title: "صفحات بورتفوليو", desc: "صفحات شخصية تحكي قصتك وتعرض أعمالك بأسلوب جذاب." },
  { icon: PenTool, title: "تصميم الشعارات (لوجوهات)", desc: "هويات بصرية وشعارات مميزة تعكس شخصية مشروعك وتترك انطباعاً لا يُنسى." },
];

const team = [
  { name: "حمزة محمد حسام", role: "Front-End & UI Developer", initials: "ح م", tag: "تصميم وتطوير واجهات" },
  { name: "محمد عبد العزيز محمود", role: "Full-Stack Developer", initials: "م ع", tag: "تطوير متاجر و حلول متكاملة" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-extrabold text-lg">Aswanny <span className="text-gradient">Programer</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">خدماتنا</a>
            <a href="#works" className="hover:text-foreground transition-colors">أعمالنا</a>
            <a href="#team" className="hover:text-foreground transition-colors">الفريق</a>
            <a href="#contact" className="hover:text-foreground transition-colors">تواصل</a>
          </nav>
          <a
            href="https://www.facebook.com/share/1KQTn54X1M/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-accent-foreground text-sm font-bold shadow-accent hover:scale-105 transition-transform"
          >
            <Facebook className="w-4 h-4" /> صفحتنا
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              متاحون لاستقبال مشاريعك
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.1] mb-6">
              نحوّل أفكارك إلى
              <span className="block text-gradient mt-2">منتجات رقمية</span>
              تلهم وتُحقّق نتائج
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              فريق <strong className="text-accent">Aswanny Programer</strong> — متخصصون في تطوير المواقع، المتاجر الإلكترونية، وصفحات البورتفوليو، وإنشاء السير الذاتية الاحترافية.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-accent-foreground font-bold shadow-accent hover:scale-105 transition-transform">
                ابدأ مشروعك <ArrowLeft className="w-4 h-4" />
              </a>
              <a href="#team" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/30 text-primary-foreground font-bold backdrop-blur-sm hover:bg-white/20 transition-colors">
                تعرّف على الفريق
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["+50", "مشروع"], ["2", "مطوّرون"], ["100%", "رضا العملاء"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-black text-accent">{n}</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-accent rounded-3xl opacity-30 blur-3xl" />
            <img src={heroImg} alt="مطور Aswanny Programer" className="relative rounded-3xl shadow-glow w-full" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold mb-4">خدماتنا</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">كل ما تحتاجه لحضور رقمي قوي</h2>
            <p className="text-muted-foreground text-lg">نقدّم باقة متكاملة من الخدمات المصمّمة خصيصاً لتنمية مشروعك وتعزيز هويتك على الإنترنت.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative bg-gradient-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute top-6 left-6 font-display text-5xl font-black text-muted/40 group-hover:text-accent/30 transition-colors">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold mb-4">أعمالنا</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">من <span className="text-gradient">إنجازاتنا</span></h2>
            <p className="text-muted-foreground text-lg">أول مشروع نُطلقه لأحد عملائنا — والقادم أجمل بإذن الله.</p>
          </div>

          {/* Under construction notice */}
          <div className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl border border-accent/30 bg-accent/10 flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent">
              <Construction className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="text-sm md:text-base">
              <p className="font-display font-bold text-foreground mb-1">المنصّة لا تزال تحت الإنشاء</p>
              <p className="text-muted-foreground leading-relaxed">
                فكرة <strong className="text-foreground">Aswanny Programer</strong> ما زالت في طور التطوير ولم تكتمل بعد. حتى الآن قمنا بتنفيذ موقع واحد لأحد العملاء، وأعمالنا القادمة في الطريق.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <a
              href="https://es3efnnyy.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-gradient-hero">
                <img
                  src={workEs3efnny}
                  alt="موقع إسعفني — رفيقك الصحي"
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">موقع طبي</span>
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold">عميل حقيقي</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black mb-1">إسعفني — رفيقك الصحي</h3>
                  <p className="text-muted-foreground text-sm">إرشادات طبية سريعة، نصائح للإسعافات الأولية، ودعم الطوارئ في متناول يدك.</p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-accent text-accent-foreground text-sm font-bold shadow-accent group-hover:scale-105 transition-transform shrink-0">
                  زيارة الموقع <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">فريق العمل</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">العقول وراء <span className="text-gradient">Aswanny Programer</span></h2>
            <p className="text-muted-foreground text-lg">شغف بالكود، حرص على التفاصيل، والتزام بمواعيد التسليم.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="group bg-card p-8 rounded-3xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-accent rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-black text-2xl shadow-glow shrink-0">
                    {m.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-black mb-1">{m.name}</h3>
                    <p className="text-accent font-bold text-sm mb-3">{m.role}</p>
                    <p className="text-muted-foreground text-sm">{m.tag}</p>
                  </div>
                </div>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {["React", "Next.js", "TailwindCSS", "Node.js", "UI/UX"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative bg-gradient-hero rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden shadow-glow">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              عندك فكرة؟ <span className="text-gradient">خلّينا ننفّذها</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              تواصل معانا على واتساب أو على صفحتنا على فيسبوك واحصل على استشارة مجانية لمشروعك القادم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/201505235820" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-accent text-accent-foreground font-bold shadow-accent hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" /> واتساب: 01505235820
              </a>
              <a href="https://www.facebook.com/share/1KQTn54X1M/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/30 text-primary-foreground font-bold backdrop-blur-sm hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" /> صفحتنا على فيسبوك
              </a>
            </div>
            <p className="text-primary-foreground/60 text-xs mt-6">للتواصل عبر واتساب فقط — لا توجد مكالمات.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-hero flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">Aswanny Programer</span>
          </div>
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة — حمزة محمد و محمد عبد العزيز</p>
        </div>
      </footer>
    </div>
  );
}
