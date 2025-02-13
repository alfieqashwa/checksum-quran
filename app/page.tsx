import { QuranList } from "@/components/quran-list";
import { QuranSummary } from "@/components/quran-summary";
import { quran } from "@quranjs/api";

export default async function Home() {
  const chapters = await quran.v4.chapters.findAll();
  return (
    <div className="p-12">
      <QuranSummary chapters={chapters} />
      <QuranList chapters={chapters} />
    </div>
  );
}
