import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "./footer"
import { AboutChecksum } from "./header"
import { BloggingTheology, PodcastVideo, Quranjs } from "./sources"

export default function AboutPage() {
  return (
    <Tabs defaultValue="English" className="font-mono">
      <TabsList>
        <TabsTrigger value="English">English</TabsTrigger>
        <TabsTrigger value="Bahasa">Bahasa</TabsTrigger>
      </TabsList>
      <TabsContent value="English" className="space-y-6 px-2">
        <AboutChecksum />
        <section className="space-y-4">
          <article>
            <p>
              Inspired by Amin Lessan, a PhD candidate in AI-Enabled Healthcare
              at University College London, I developed this site after viewing
              his discussion on mathematical patterns in the Qur'an on the{" "}
              <BloggingTheology /> channel, hosted by Paul Williams. In that
              discussion, Lessan explored the concept of parity within the
              Qur'an, which you can watch <PodcastVideo language="en" />.
            </p>
          </article>
          <article>
            <p>
              Motivated by a shared curiosity about the intersection of
              mathematics and the universe, I sought to replicate Lessan's
              findings using JavaScript and the <Quranjs /> API. From a young
              age, I have believed that mathematics serves as a foundational
              'template' for the universe. This belief stems from scriptural
              references stating that God created the universe in six days
              (Genesis, Exodus, Al-Qur'an), implying the pre-existence of the
              number six and, by extension, the entire numerical system.
            </p>
          </article>
          <article>
            <p>
              In his analysis, Lessan observed that summing each Surah's order
              number with its total verses and examining the parity (odd or
              even) of these sums reveals a remarkable balance:
            </p>
            <ul>
              <li>
                The cumulative sum of Surah order numbers (1 through 114) equals
                6,555, which matches the sum of all odd results from the
                aforementioned calculations.
              </li>
              <li>
                The total number of verses in the Qur'an is 6,236, identical to
                the sum of all even results from these calculations.
              </li>
            </ul>
          </article>
          <article>
            <p>
              Building upon this, I - accidently - discovered that certain
              Surahs undergo a parity shift when their order number and verse
              count are summed—transitioning from odd to even or vice versa.
              According to parity rules, the sum of two odd or two even numbers
              is even, while the sum of an odd and an even number is odd.
            </p>
            <p>
              To identify which Surahs experience this parity shift, I developed
              a program that highlights these transitions. On the site, by
              toggling the <Switch /> in the Surah column, you can observe that
              Surahs with parity shifts are interspersed among those without
              such changes, presenting a captivating pattern.
            </p>
          </article>
          <article>
            <p>
              Discovering these signs of divine mathematical design fills me
              with profound gratitude. The term 'syukur' (gratitude) originates
              from 'syakara,' meaning to reveal; thus, sharing these insights is
              a form of appreciation for the opportunity granted. This site's
              purpose is to present these findings and seek validation from Mr.
              Amin Lessan and other scholars to determine if this phenomenon has
              been previously documented. Engaging with the Blogging Theology
              podcast has inspired a deeper contemplation of the Qur'an's
              mathematical intricacies as a means of meditation between a
              servant and the Creator.
            </p>
          </article>
          <Footer />
        </section>
      </TabsContent>
      <TabsContent value="Bahasa" className="space-y-4 px-2">
        <AboutChecksum />
        <section className="space-y-4">
          <article>
            <p>
              Terinspirasi oleh Amin Lessan, kandidat PhD dalam AI-Enabled
              Healthcare di University College London, saya mengembangkan situs
              ini setelah menyaksikan diskusinya tentang pola matematika dalam
              Al-Qur'an di kanal <BloggingTheology /> yang dipandu oleh Paul
              Williams. Dalam diskusi tersebut, Lessan membahas konsep paritas
              dalam Al-Qur'an, yang dapat Anda tonton{" "}
              <PodcastVideo language="id" />.
            </p>
          </article>
          <article>
            <p>
              Didorong oleh rasa ingin tahu tentang keterkaitan antara
              matematika dan alam semesta, saya berupaya mereplikasi temuan
              Lessan menggunakan JavaScript dan API <Quranjs />. Sejak kecil,
              saya meyakini bahwa matematika adalah 'template' dasar bagi alam
              semesta, keyakinan yang berasal dari pernyataan dalam kitab suci
              bahwa Tuhan menciptakan alam semesta dalam enam hari (Genesis,
              Exodus, Al-Qur'an), yang mengindikasikan eksistensi angka enam dan
              sistem numerik sebelum penciptaan alam semesta.
            </p>
          </article>
          <article>
            <p>
              Dalam analisisnya, Lessan mengamati bahwa menjumlahkan nomor urut
              setiap surah dengan jumlah ayatnya dan memeriksa paritas (ganjil
              atau genap) dari hasil penjumlahan tersebut mengungkap
              keseimbangan yang luar biasa:
            </p>
            <ul>
              <li>
                Jumlah kumulatif nomor urut surah (1 hingga 114) adalah 6.555,
                dimana sama dengan jumlah semua hasil penjumlahan yang ganjil.
              </li>
              <li>
                Total jumlah ayat dalam Al-Qur'an adalah 6.236, identik dengan
                jumlah semua hasil penjumlahan yang genap.
              </li>
            </ul>
          </article>
          <article>
            <p>
              Melanjutkan penelitian ini, saya - secara tak sengaja - menemukan
              bahwa beberapa surah mengalami perubahan paritas ketika nomor urut
              dan jumlah ayatnya dijumlahkan—berubah dari ganjil ke genap atau
              sebaliknya. Menurut aturan paritas, penjumlahan dua angka ganjil
              atau dua angka genap menghasilkan angka genap, sementara
              penjumlahan angka ganjil dan genap menghasilkan angka ganjil.
            </p>
            <p>
              Untuk mengidentifikasi surah-surah yang mengalami perubahan
              paritas ini, saya mengembangkan program yang menyoroti transisi
              tersebut. Di situs ini, dengan mengaktifkan tombol <Switch /> pada
              kolom Surah, Anda dapat melihat bahwa surah-surah dengan perubahan
              paritas tersebar di antara surah-surah tanpa perubahan, membentuk
              pola yang menarik.
            </p>
          </article>
          <p>
            Menemukan tanda-tanda desain matematis ilahi ini membuat saya sangat
            bersyukur. Istilah 'syukur' berasal dari 'syakara,' yang berarti
            menampakkan; oleh karena itu, membagikan wawasan ini adalah bentuk
            apresiasi atas kesempatan yang diberikan. Tujuan situs ini adalah
            untuk mempresentasikan temuan ini dan mencari validasi dari Saudara
            Amin Lessan serta para cendekiawan lainnya untuk menentukan apakah
            fenomena ini telah didokumentasikan sebelumnya. Berinteraksi dengan
            podcast Blogging Theology telah menginspirasi kontemplasi yang lebih
            mendalam terhadap keunikan matematika dalam Al-Qur'an, berfungsi
            sebagai sarana meditasi antara seorang hamba dan Penciptanya.
          </p>
        </section>
        <Footer />
      </TabsContent>
    </Tabs>
  )
}
