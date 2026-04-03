const stories = [
  {
    year: "1612",
    title: "Ополчение Минина и Пожарского",
    text: "В Смутное время представители разных народов объединились, чтобы освободить Москву от интервентов. Это стало вечным символом народного единства.",
    emoji: "⚔️",
  },
  {
    year: "1970–1980-е",
    title: "Дружба народов на стройке БАМа",
    text: "Тысячи молодых людей со всей страны приехали строить Байкало-Амурскую магистраль. В суровых условиях они поддерживали друг друга и делились традициями.",
    emoji: "🛤️",
  },
  {
    year: "2012",
    title: "Помощь после наводнения в Крымске",
    text: "Волонтёры из разных регионов России приехали помогать пострадавшим. Они не делили людей по национальности — просто помогали.",
    emoji: "🤝",
  },
  {
    year: "Сегодня",
    title: "Семья — мост между культурами",
    text: "Муж — русский, жена — чеченка. Они отмечают и Масленицу, и Курбан-байрам, учат детей уважать обе традиции. Таких семей в России миллионы.",
    emoji: "❤️",
  },
];

export function Pricing() {
  return (
    <section id="stories" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Истории единства</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Когда мы вместе
          </h2>
          <p className="text-muted-foreground text-lg">Страницы истории, которые объединяют нас по сей день.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{story.emoji}</span>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-widest">{story.year}</span>
                  <h3 className="font-serif text-xl text-foreground mt-0.5">{story.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
