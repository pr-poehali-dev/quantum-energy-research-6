import { useState } from "react";
import Icon from "@/components/ui/icon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border/50">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground">Единство народов</span>
          <span className="hidden sm:inline text-primary font-serif text-lg">России</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">О проекте</a>
          <a href="#peoples" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Народы</a>
          <a href="#traditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Традиции</a>
          <a href="#stories" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Истории</a>
          <a href="#calendar" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Календарь</a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity duration-300"
        >
          Написать нам
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Открыть меню"
        >
          {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">О проекте</a>
            <a href="#peoples" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Народы</a>
            <a href="#traditions" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Традиции</a>
            <a href="#stories" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Истории</a>
            <a href="#calendar" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Календарь</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full text-center">
              Написать нам
            </a>
          </div>
        </div>
      )}
    </header>
  );
}