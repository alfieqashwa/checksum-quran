import { Wrapper } from "@/components/wrapper";
import { quran } from "@quranjs/api";

export default async function Home() {
  const chapters = await quran.v4.chapters.findAll();
  const alfajr3 = await quran.v4.verses.findByKey("89:3", {
    fields: {
      textImlaei: true,
    },
    words: true,
  });

  const verseKey319 = await quran.v4.verses.findByKey("3:19", {
    fields: {
      textImlaei: true,
    },
    words: true,
  });

  return (
    <div className="p-4 my-4 xl:p-12">
      <section className="text-center font-bold">
        <h2 className="text-3xl tracking-wide">{alfajr3.textImlaei}</h2>
        <article className="flex tracking-wider text-xl mt-2 text-muted-foreground justify-center space-x-1">
          {alfajr3.words
            ?.filter((_, i) => i !== 2)
            .map((word, i) => (
              <p key={i} className="italic">
                {word.translation.text}
              </p>
            ))}
        </article>
        <p className="text-muted-foreground">(Al-Fajr:3)</p>
      </section>

      <Wrapper chapters={chapters} verseKey={verseKey319} />
    </div>
  );
}
