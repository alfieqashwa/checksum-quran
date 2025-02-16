import { Verse } from "@quranjs/api"

export function VerseKey319({ verseKey }: { verseKey: Verse }) {
  return (
    <section className="my-12 text-center font-bold">
      <h2 className="text-xl tracking-wide">{verseKey.textImlaei}</h2>
      <article className="hidden justify-center space-x-1 text-sm xl:flex">
        {verseKey.words
          ?.filter((word) => word.position < 19)
          .map((word) => (
            <p
              key={word.position}
              className="whitespace-nowrap italic text-muted-foreground"
            >
              {word.translation.text}
            </p>
          ))}
      </article>
      <article className="hidden justify-center space-x-1 text-sm xl:flex">
        {verseKey.words
          ?.filter((word) => word.position >= 19 && word.charTypeName !== "end")
          .map((word) => (
            <p
              key={word.position}
              className="whitespace-nowrap italic text-muted-foreground"
            >
              {word.translation.text}
            </p>
          ))}
      </article>
      <p className="text-muted-foreground">({verseKey.verseKey})</p>
    </section>
  )
}
