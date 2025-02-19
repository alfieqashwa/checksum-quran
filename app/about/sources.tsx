export const BloggingTheology = () => (
  <a
    href="https://www.youtube.com/@BloggingTheology"
    target="_blank"
    rel="noopener"
    className="text-amber-400 underline"
  >
    Blogging Theology
  </a>
)
export const PodcastVideo = ({ language }: { language: "en" | "id" }) => {
  return (
    <a
      href="https://www.youtube.com/watch?v=QC3sDbVcAbw&t=2566s"
      target="_blank"
      rel="noopener"
      className="text-amber-400 underline"
    >
      {language === "en" ? "here" : "disini"}
    </a>
  )
}

export const Quranjs = () => (
  <a
    href="https://quranjs.com/"
    target="_blank"
    rel="noopener"
    className="text-amber-400 underline"
  >
    QuranJS
  </a>
)
