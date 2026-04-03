export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-serif text-xl tracking-tight text-foreground text-center md:text-left">
            Единство народов <span className="text-primary">России</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors duration-300">О проекте</a>
            <a href="#peoples" className="hover:text-foreground transition-colors duration-300">Народы</a>
            <a href="#traditions" className="hover:text-foreground transition-colors duration-300">Традиции</a>
            <a href="#stories" className="hover:text-foreground transition-colors duration-300">Истории</a>
            <a href="#calendar" className="hover:text-foreground transition-colors duration-300">Календарь</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">Контакты</a>
          </div>

          <p className="text-sm text-muted-foreground">© 2026 Все права защищены.</p>
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-4xl md:text-6xl text-border/50 select-none tracking-widest italic">
            Мы разные — мы вместе!
          </p>
        </div>
      </div>
    </footer>
  );
}