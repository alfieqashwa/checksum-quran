import React from "react"

const AboutPage = () => {
  return (
    <div>
      <h1>About Checksum Quran</h1>
      <p>
        Checksum Quran is a project aimed at verifying the integrity of Quranic
        texts using checksums.
      </p>
      <p>
        Our mission is to ensure the accuracy and authenticity of Quranic texts
        available online.
      </p>
      <h2>English</h2>
      <p>
        Inspired by Amin Lessan, a PhD candidate in AI-Enabled Healthcare at
        University College London, I developed this site after viewing his
        discussion on mathematical patterns in the Qur'an on the{" "}
        <a href="https://www.youtube.com/@BloggingTheology">
          Blogging Theology
        </a>{" "}
        channel, hosted by Paul Williams. In that discussion, Lessan explored
        the concept of parity within the Qur'an, which you can watch{" "}
        <a href="https://www.youtube.com/watch?v=QC3sDbVcAbw">here</a>.
      </p>
      <p>
        Motivated by a shared curiosity about the intersection of mathematics
        and the universe, I sought to replicate Lessan's findings using
        JavaScript and the <a href="https://quranjs.com/">Quranjs</a> API. From
        a young age, I have believed that mathematics serves as a foundational
        'template' for the universe. This belief stems from scriptural
        references stating that God created the universe in six days, implying
        the pre-existence of the number six and, by extension, the entire
        numerical system.
      </p>
      <p>
        In his analysis, Lessan observed that summing each Surah's order number
        with its total verses and examining the parity (odd or even) of these
        sums reveals a remarkable balance:
      </p>
      <ul>
        <li>
          The cumulative sum of Surah order numbers (1 through 114) equals
          6,555, which matches the sum of all odd results from the
          aforementioned calculations.
        </li>
        <li>
          The total number of verses in the Qur'an is 6,236, identical to the
          sum of all even results from these calculations.
        </li>
      </ul>
      <p>
        Building upon this, I discovered that certain Surahs undergo a parity
        shift when their order number and verse count are summed—transitioning
        from odd to even or vice versa. According to parity rules, the sum of
        two odd or two even numbers is even, while the sum of an odd and an even
        number is odd.
      </p>
      <p>
        To identify which Surahs experience this parity shift, I developed a
        program that highlights these transitions. On the site, by toggling the
        switch in the Surah column, you can observe that Surahs with parity
        shifts are interspersed among those without such changes, presenting a
        captivating pattern.
      </p>
      <p>
        Discovering these signs of divine mathematical design fills me with
        profound gratitude. The term 'syukur' (gratitude) originates from
        'syakara,' meaning to reveal; thus, sharing these insights is a form of
        appreciation for the opportunity granted. This site's purpose is to
        present these findings and seek validation from Mr. Amin Lessan and
        other scholars to determine if this phenomenon has been previously
        documented. Engaging with the Blogging Theology podcast has inspired a
        deeper contemplation of the Qur'an's mathematical intricacies, serving
        as a meditative conduit between a servant and the Creator.
      </p>
      <p>Alfie Qashwa from Ciputat, Indonesia</p>
      <h2>Bahasa</h2>
      <p>
        Terinspirasi oleh Amin Lessan, kandidat PhD dalam AI-Enabled Healthcare
        di University College London, saya mengembangkan situs ini setelah
        menyaksikan diskusinya tentang pola matematika dalam Al-Qur'an di kanal{" "}
        <a href="https://www.youtube.com/@BloggingTheology">
          Blogging Theology
        </a>{" "}
        yang dipandu oleh Paul Williams. Dalam diskusi tersebut, Lessan membahas
        konsep paritas dalam Al-Qur'an, yang dapat Anda tonton{" "}
        <a href="https://www.youtube.com/watch?v=QC3sDbVcAbw">di sini</a>.
      </p>
      <p>
        Didorong oleh rasa ingin tahu tentang keterkaitan antara matematika dan
        alam semesta, saya berupaya mereplikasi temuan Lessan menggunakan
        JavaScript dan API <a href="https://quranjs.com/">Quranjs</a>. Sejak
        kecil, saya meyakini bahwa matematika adalah 'template' dasar bagi alam
        semesta, keyakinan yang berasal dari pernyataan dalam kitab suci bahwa
        Tuhan menciptakan alam semesta dalam enam hari, yang mengindikasikan
        eksistensi angka enam dan sistem numerik sebelum penciptaan alam
        semesta.
      </p>
      <p>
        Dalam analisisnya, Lessan mengamati bahwa menjumlahkan nomor urut setiap
        surah dengan jumlah ayatnya dan memeriksa paritas (ganjil atau genap)
        dari hasil penjumlahan tersebut mengungkap keseimbangan yang luar biasa:
      </p>
      <ul>
        <li>
          Jumlah kumulatif nomor urut surah (1 hingga 114) adalah 6.555, yang
          sama dengan jumlah semua hasil penjumlahan yang ganjil.
        </li>
        <li>
          Total jumlah ayat dalam Al-Qur'an adalah 6.236, identik dengan jumlah
          semua hasil penjumlahan yang genap.
        </li>
      </ul>
      <p>
        Melanjutkan penelitian ini, saya menemukan bahwa beberapa surah
        mengalami perubahan paritas ketika nomor urut dan jumlah ayatnya
        dijumlahkan—berubah dari ganjil ke genap atau sebaliknya. Menurut aturan
        paritas, penjumlahan dua angka ganjil atau dua angka genap menghasilkan
        angka genap, sementara penjumlahan angka ganjil dan genap menghasilkan
        angka ganjil.
      </p>
      <p>
        Untuk mengidentifikasi surah-surah yang mengalami perubahan paritas ini,
        saya mengembangkan program yang menyoroti transisi tersebut. Di situs
        ini, dengan mengaktifkan tombol pada kolom Surah, Anda dapat melihat
        bahwa surah-surah dengan perubahan paritas tersebar di antara
        surah-surah tanpa perubahan, membentuk pola yang menarik.
      </p>
      <p>
        Menemukan tanda-tanda desain matematis ilahi ini membuat saya sangat
        bersyukur. Istilah 'syukur' berasal dari 'syakara,' yang berarti
        menampakkan; oleh karena itu, membagikan wawasan ini adalah bentuk
        apresiasi atas kesempatan yang diberikan. Tujuan situs ini adalah untuk
        mempresentasikan temuan ini dan mencari validasi dari Bapak Amin Lessan
        serta para cendekiawan lainnya untuk menentukan apakah fenomena ini
        telah didokumentasikan sebelumnya. Berinteraksi dengan podcast Blogging
        Theology telah menginspirasi kontemplasi lebih dalam terhadap keunikan
        matematika dalam Al-Qur'an, berfungsi sebagai sarana meditasi antara
        seorang hamba dan Penciptanya.
      </p>
      <p>Alfie Qashwa dari Ciputat, Indonesia</p>
    </div>
  )
}

export default AboutPage
