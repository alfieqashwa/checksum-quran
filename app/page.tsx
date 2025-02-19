import { Wrapper } from "@/components/wrapper"
import { cn } from "@/lib/utils"
import { quran } from "@quranjs/api"

export default async function Home() {
  const chapters = await quran.v4.chapters.findAll()
  const alfajr3 = await quran.v4.verses.findByKey("89:3", {
    fields: {
      textImlaei: true,
    },
    words: true,
  })

  const verseKey319 = await quran.v4.verses.findByKey("3:19", {
    fields: {
      textImlaei: true,
    },
    words: true,
  })

  // console.log(JSON.stringify(alfajr3, null, 2))

  return (
    <div>
      <section className="text-center font-bold">
        <h2 className="bg-gradient-to-t from-amber-400 to-emerald-400 bg-clip-text text-4xl tracking-wide text-transparent">
          {alfajr3.textImlaei}
        </h2>
        <article className="mt-2 flex justify-center space-x-1 text-xl tracking-wider text-muted-foreground">
          {alfajr3.words
            ?.filter((word) => word.charTypeName === "word")
            .map((word, i) => (
              <p
                key={i}
                className={cn(
                  "italic",
                  word.position === 1
                    ? "text-emerald-500"
                    : word.position === 2
                      ? "text-amber-500"
                      : "",
                )}
              >
                {word.translation.text}
              </p>
            ))}
        </article>
        <p className="text-muted-foreground">(Al-Fajr:3)</p>
      </section>

      <Wrapper chapters={chapters} verseKey={verseKey319} />
    </div>
  )
}
