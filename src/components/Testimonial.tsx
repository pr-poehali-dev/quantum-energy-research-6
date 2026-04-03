const traditions = [
  {
    category: "Праздники",
    emoji: "🎉",
    items: [
      { name: "Сабантуй", desc: "Татары и башкиры — праздник плуга. Конные скачки, борьба куреш, народные игры." },
      { name: "Ысыах", desc: "Якуты — праздник встречи лета, обряды благословения природы." },
      { name: "День оленевода", desc: "Народы Севера — гонки на оленьих упряжках, национальные костюмы." },
      { name: "Масленица", desc: "Русские — проводы зимы. Блины, гуляния, сжигание чучела." },
    ],
  },
  {
    category: "Национальная кухня",
    emoji: "🍽️",
    items: [
      { name: "Осетинские пироги", desc: "Осетины — символ гостеприимства и праздника." },
      { name: "Бешбармак", desc: "Казахи, киргизы — блюдо из мяса с лапшой, «пять пальцев»." },
      { name: "Позы (буузы)", desc: "Буряты — паровые пельмени, национальная гордость." },
      { name: "Чак-чак", desc: "Татары и башкиры — сладкое лакомство из теста и мёда." },
    ],
  },
  {
    category: "Народное искусство",
    emoji: "🎨",
    items: [
      { name: "Хохлома", desc: "Нижегородская область — роспись деревянной посуды золотом на чёрном." },
      { name: "Гжель", desc: "Московская область — голубая керамика с неповторимым орнаментом." },
      { name: "Дымковская игрушка", desc: "Кировская область — яркие глиняные фигурки с росписью." },
      { name: "Якутское серебро", desc: "Якутия — украшения с тонким орнаментом, символами природы." },
    ],
  },
];

export function Testimonial() {
  return (
    <section id="traditions" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Традиции и культура</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Богатство народных традиций
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {traditions.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{section.emoji}</span>
                <h3 className="font-serif text-xl text-foreground">{section.category}</h3>
              </div>
              <div className="space-y-5">
                {section.items.map((item, ii) => (
                  <div key={ii} className="border-l-2 border-primary/20 pl-4">
                    <p className="font-medium text-foreground text-sm mb-1">{item.name}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
