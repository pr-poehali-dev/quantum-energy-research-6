const peoples = [
  {
    name: "Русские",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/c76db15a-4a80-434c-862e-cb9c696d034a.jpg",
    description: "Самый многочисленный народ России. Традиции гостеприимства, богатая литература, музыка и живопись.",
    notable: "А. С. Пушкин, П. И. Чайковский, Ю. А. Гагарин",
    accent: "text-red-700",
    tag: "bg-red-100 text-red-700",
  },
  {
    name: "Татары",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/7471148d-6531-4919-9e52-7517bc31f881.jpg",
    description: "Второй по численности народ России. Богатая литературная традиция, праздник Сабантуй, кулинарные шедевры.",
    notable: "Габдулла Тукай, Рудольф Нуриев, Алсу",
    accent: "text-green-700",
    tag: "bg-green-100 text-green-700",
  },
  {
    name: "Чеченцы",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/76438aa5-7efd-4f80-bdb5-95488a2ac090.jpg",
    description: "Народ с богатой историей и традициями. Ценности: уважение к старшим, гостеприимство, честь.",
    notable: "Традиции нохчалла — кодекс чести",
    accent: "text-amber-700",
    tag: "bg-amber-100 text-amber-700",
  },
  {
    name: "Башкиры",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/91c639eb-b4a8-47c4-a48d-39a3737040dc.jpg",
    description: "Традиционное занятие — коневодство и бортничество. Знаменитый башкирский мёд, эпос «Урал-батыр».",
    notable: "Салават Юлаев, Земфира",
    accent: "text-orange-700",
    tag: "bg-orange-100 text-orange-700",
  },
  {
    name: "Буряты",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/9a3108a6-ee25-45c3-8f9e-fbe6029c2b1f.jpg",
    description: "Народ, сочетающий буддийские и шаманские традиции. Праздник Сагаалган (Новый год по лунному календарю).",
    notable: "Даши Намдаков — скульптор мирового уровня",
    accent: "text-yellow-700",
    tag: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Якуты (саха)",
    photo: "https://cdn.poehali.dev/projects/58d633b0-32fa-4b43-a4e5-b8d42ff845da/files/5d548489-e3d9-4532-8674-6973ef35e982.jpg",
    description: "Народ Севера, сохранивший уникальную культуру. Ысыах — праздник встречи лета, якутские украшения из серебра.",
    notable: "Сергей Зверев, традиции оленеводства",
    accent: "text-blue-700",
    tag: "bg-blue-100 text-blue-700",
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
              className="group rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={people.photo}
                  alt={people.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className={`font-serif text-xl ${people.accent}`}>{people.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${people.tag}`}>народ России</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{people.description}</p>
                <p className="text-xs text-muted-foreground/70 italic">Известные представители: {people.notable}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          И ещё более 184 народов: калмыки, осетины, карелы, адыгейцы, ненцы, эвенки...
        </p>
      </div>
    </section>
  );
}
