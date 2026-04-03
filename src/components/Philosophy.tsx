export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/3b047e72-cc24-4803-9930-ea0132cd291b.jpg"
              alt="Народы России"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «В истории России было немало испытаний, которые народы страны преодолевали вместе.»
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О проекте</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              «Единство народов России»
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Этот сайт создан, чтобы показать богатство культур народов России и подчеркнуть наше общее наследие.
                Мы верим, что знание традиций друг друга укрепляет дружбу и взаимопонимание.
              </p>
              <ul className="space-y-2">
                {[
                  "Познакомить с культурой и обычаями народов России",
                  "Показать примеры многовекового мирного сосуществования",
                  "Вдохновить на уважение к традициям всех национальностей",
                  "Создать площадку для обмена опытом и идеями",
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/15">
              <p className="text-sm text-foreground leading-relaxed">
                Сегодня, как и прежде, наше единство — залог стабильности и процветания.
                <strong className="block mt-2">Присоединяйтесь к нашему сообществу — вместе мы сила!</strong>
              </p>
            </div>
            <div className="pt-2">
              <a href="#peoples" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Познакомиться с народами</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}