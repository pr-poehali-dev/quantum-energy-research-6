import Icon from "@/components/ui/icon";

const events = [
  {
    date: "4 ноября",
    name: "День народного единства",
    desc: "Мероприятия по всей стране: концерты, выставки, лекции об истории единства.",
    emoji: "🇷🇺",
    highlight: true,
  },
  {
    date: "Февраль–март",
    name: "Масленица",
    desc: "Гуляния в парках, угощение блинами, проводы зимы — традиция русского народа.",
    emoji: "🥞",
    highlight: false,
  },
  {
    date: "Июнь",
    name: "Сабантуй",
    desc: "Праздники в Татарстане, Башкортостане и других регионах. Состязания, музыка, угощения.",
    emoji: "🐎",
    highlight: false,
  },
  {
    date: "Февраль",
    name: "Ысыах",
    desc: "Якутский Новый год по лунному календарю. Обряды, конкурсы, традиционные блюда.",
    emoji: "🌕",
    highlight: false,
  },
  {
    date: "Ежемесячно",
    name: "Лекции о культуре народов",
    desc: "Открытые встречи и лекции об этносах России. Анонсы публикуются в социальных сетях.",
    emoji: "📚",
    highlight: false,
  },
];

export function Calendar() {
  return (
    <section id="calendar" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary mb-4 block">Календарь событий</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Праздники и фестивали
          </h2>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex gap-5 p-6 rounded-2xl border transition-all duration-300 ${
                event.highlight
                  ? "bg-primary/5 border-primary/25"
                  : "bg-background border-border hover:border-primary/20"
              }`}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{event.emoji}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${event.highlight ? "text-primary" : "text-muted-foreground"}`}>
                    {event.date}
                  </span>
                  {event.highlight && (
                    <span className="text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full">
                      Государственный праздник
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">{event.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Icon name="Bell" size={16} />
          <span>Следите за анонсами в наших социальных сетях</span>
        </div>
      </div>
    </section>
  );
}
