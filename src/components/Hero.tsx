import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/3b047e72-cc24-4803-9930-ea0132cd291b.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white" />
        <div className="absolute top-1.5 left-0 right-0 h-1.5 bg-primary" />
        <div className="absolute top-3 left-0 right-0 h-1.5 bg-[hsl(220,60%,30%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium">190+ народов · одна страна</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-6">
          Единство народов —
          <br />
          <span className="italic text-primary">сила России</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-4">
          Мы разные — мы вместе!
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Россия — многонациональная страна, где веками живут в мире и согласии более 190 народов.
          Каждый привносит свою уникальную традицию, язык и обычаи — создавая неповторимую мозаику российской цивилизации.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#peoples"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300"
          >
            <Icon name="Users" size={16} />
            Узнать о народах
          </a>
          <a
            href="#traditions"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:border-primary/40 transition-all duration-300"
          >
            <Icon name="Sparkles" size={16} />
            Традиции и культура
          </a>
          <a
            href="#calendar"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:border-primary/40 transition-all duration-300"
          >
            <Icon name="Calendar" size={16} />
            Календарь событий
          </a>
          <a
            href="#stories"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:border-primary/40 transition-all duration-300"
          >
            <Icon name="Heart" size={16} />
            Истории единства
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}