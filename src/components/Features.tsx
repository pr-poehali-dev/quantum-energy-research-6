const peoples = [
  {
    name: "Русские",
    emoji: "🇷🇺",
    description: "Самый многочисленный народ России. Традиции гостеприимства, богатая литература, музыка и живопись.",
    notable: "А. С. Пушкин, П. И. Чайковский, Ю. А. Гагарин",
    color: "bg-red-50 border-red-100",
    accent: "text-red-700",
  },
  {
    name: "Татары",
    emoji: "🌙",
    description: "Второй по численности народ России. Богатая литературная традиция, праздник Сабантуй, кулинарные шедевры.",
    notable: "Габдулла Тукай, Рудольф Нуриев, Алсу",
    color: "bg-green-50 border-green-100",
    accent: "text-green-700",
  },
  {
    name: "Чеченцы",
    emoji: "🏔️",
    description: "Народ с богатой историей и традициями. Ценности: уважение к старшим, гостеприимство, честь.",
    notable: "Традиции нохчалла — кодекс чести",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-700",
  },
  {
    name: "Башкиры",
    emoji: "🍯",
    description: "Традиционное занятие — коневодство и бортничество. Знаменитый башкирский мёд, эпос «Урал-батыр».",
    notable: "Салават Юлаев, Земфира",
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-700",
  },
  {
    name: "Буряты",
    emoji: "☸️",
    description: "Народ, сочетающий буддийские и шаманские традиции. Праздник Сагаалган (Новый год по лунному календарю).",
    notable: "Даши Намдаков — скульптор мирового уровня",
    color: "bg-yellow-50 border-yellow-100",
    accent: "text-yellow-700",
  },
  {
    name: "Якуты (саха)",
    emoji: "❄️",
    description: "Народ Севера, сохранивший уникальную культуру. Ысыах — праздник встречи лета, якутские украшения из серебра.",
    notable: "Сергей Зверев, традиции оленеводства",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-700",
  },
];

export function Features() {
  return (
    <section id="peoples" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Народы России</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance mb-4">
            Многообразие традиций
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            В России проживают более 190 народов — каждый вносит свой вклад в общее культурное наследие страны.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {peoples.map((people, index) => (
            <div
              key={index}
              className={`group p-7 rounded-2xl border ${people.color} hover:shadow-md transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{people.emoji}</div>
              <h3 className={`font-serif text-xl mb-2 ${people.accent}`}>{people.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{people.description}</p>
              <p className="text-xs text-muted-foreground/70 italic">Известные представители: {people.notable}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          И ещё более 184 народов: якуты, калмыки, осетины, карелы, адыгейцы, ненцы, эвенки...
        </p>
      </div>
    </section>
  );
}
