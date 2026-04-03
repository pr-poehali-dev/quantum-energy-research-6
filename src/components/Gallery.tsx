const albums = [
  {
    title: "Национальные костюмы",
    desc: "Коллекция фотографий представителей разных народов в традиционных нарядах",
    emoji: "👘",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    title: "Народные праздники",
    desc: "Кадры с Сабантуя, Ысыаха, Масленицы и других народных мероприятий",
    emoji: "🎊",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Регионы России",
    desc: "Пейзажи и архитектура разных уголков необъятной страны",
    emoji: "🏔️",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Совместные мероприятия",
    desc: "Фото с фестивалей, форумов, волонтёрских акций и культурных обменов",
    emoji: "🤝",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

const videos = [
  { title: "Интервью с этнографами", emoji: "🎙️" },
  { title: "Фестиваль «Цветы России»", emoji: "🌸" },
  { title: "Мастер-классы по народным промыслам", emoji: "🎨" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Галерея</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Лица и традиции России
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {albums.map((album, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${album.bg} ${album.border} hover:shadow-md transition-all duration-300 cursor-pointer group`}
            >
              <span className="text-4xl block mb-4">{album.emoji}</span>
              <h3 className="font-serif text-base text-foreground mb-2 group-hover:text-primary transition-colors">{album.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{album.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">Видеоматериалы</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {videos.map((video, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-2xl">{video.emoji}</span>
                <span className="text-sm text-foreground font-medium">{video.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
