import { Verse } from "@quranjs/api";

export function VerseKey319({ verseKey }: { verseKey: Verse }) {
  return (
    <section className="text-center font-bold my-12">
      <h2 className="text-xl tracking-wide">{verseKey.textImlaei}</h2>
      <article className="hidden text-sm xl:flex justify-center space-x-1">
        {verseKey.words
          ?.filter((word) => word.position < 19)
          .map((word) => (
            <p
              key={word.position}
              className="italic text-muted-foreground whitespace-nowrap"
            >
              {word.translation.text}
            </p>
          ))}
      </article>
      <article className="text-sm hidden xl:flex justify-center space-x-1">
        {verseKey.words
          ?.filter((word) => word.position >= 19 && word.charTypeName !== "end")
          .map((word) => (
            <p
              key={word.position}
              className="italic whitespace-nowrap text-muted-foreground"
            >
              {word.translation.text}
            </p>
          ))}
      </article>
      <p className="text-muted-foreground">({verseKey.verseKey})</p>
    </section>
  );
}
