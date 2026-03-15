<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col md:flex-row justify-between mt-[43px] lg:mt-[68px] gap-8">
    <!-- ========== LEFT DIV ========== -->
    <div class="flex flex-col gap-8 md:gap-[76px] w-full">

      <!-- ======= UPPER CONTAINER ======= -->
      <div class="flex flex-col gap-10 w-full">
        <!-- ======= ARTICLE HEADER CARD ======= -->
        <div
          class="flex flex-col gap-2.5 w-full h-fit bg-white rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] px-3 md:px-[46px] py-8">
          <div class="flex flex-col gap-5 w-full mx-auto">
            <!-- ====== TITLE + SHARE SECTION ====== -->
            <div class="flex flex-col gap-4 w-full h-fit">
              <div class="flex flex-col gap-3 w-full h-fit">
                <!-- Top Row: Tag + Share -->
                <div class="flex justify-between w-full h-fit items-center">
                  <!-- Tag -->
                  <div
                    class="flex items-center justify-center gap-2.5 rounded-full px-[26px] bg-[#D9E3FF] w-[150px] h-[33px]">
                    <span class="font-medium text-[14px] text-[#0101FD]">Etkinlik</span>
                  </div>

                  <!-- Share Buttons (for Larger Screens) -->
                  <div class="hidden md:flex items-center gap-[18px] w-[301px] h-fit">
                    <!-- Share Text + Icon -->
                    <div class="flex items-center gap-[8px] w-[75px] h-[21px]">
                      <img class="w-fit h-fit" src="/icons/Share-red.svg" />
                      <span class="font-poppins font-[400] text-[14px] text-[#000] tracking-[0.25px]">Paylaş</span>
                    </div>

                    <!-- Social Icons -->
                    <div class="flex items-center gap-[20px] w-[202px] h-[19px]">
                      <!-- Facebook -->
                      <img class="w-fit h-fit" src="/icons/Facebook.svg" />

                      <!-- Twitter -->
                      <img class="w-fit h-fit" src="/icons/Twitter.svg" />

                      <!-- LinkedIn -->
                      <img class="w-fit h-fit" src="/icons/LinkedIn.svg" />

                      <!-- Instagram -->
                      <img class="w-fit h-fit" src="/icons/Instagram.svg" />

                      <!-- YouTube -->
                      <img class="w-fit h-fit" src="/icons/YouTube.svg" />

                      <!-- WhatsApp -->
                      <img class="w-fit h-fit" src="/icons/Whatsapp.svg" />
                    </div>
                  </div>
                </div>

                <!-- Title -->
                <h1 class="font-bold text-2xl md:text-[32px] text-black">
                  Brand Week Istanbul, 10–14 Kasım 2025 Tarihlerinde İzleyicileriyle Buluşacak.
                </h1>
              </div>

              <!-- Author + Date -->
              <div
                class="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full h-fit gap-3 md:gap-0">
                <div class="flex items-center gap-[8px] w-fit h-fit">
                  <img src="/avatar-charlene.png" class="w-fit h-fit rounded-full" />
                  <span class="font-poppins font-[600] text-[16px] tracking-[0.5px] text-[#464646]">
                    Charlene Jacobson
                  </span>
                  <span class="font-poppins font-[400] text-[16px] tracking-[0.5px] text-[#464646]">
                    | 7 min read
                  </span>
                </div>
                <span class="font-poppins font-[500] text-[14px] tracking-[0.1px] text-right text-[#464646]">
                  02 May, 25
                </span>
              </div>
            </div>

            <!-- Share Buttons (for Smaller Screens) -->
            <div class="flex md:hidden items-center gap-[18px] w-[301px] h-fit">
              <!-- Share Text + Icon -->
              <div class="flex items-center gap-[8px] w-[75px] h-[21px]">
                <img class="w-fit h-fit" src="/icons/Share-red.svg" />
                <span class="font-poppins font-[400] text-[14px] text-[#000] tracking-[0.25px]">Paylaş</span>
              </div>

              <!-- Social Icons -->
              <div class="flex items-center gap-[20px] w-[202px] h-[19px]">
                <!-- Facebook -->
                <img class="w-fit h-fit" src="/icons/Facebook.svg" />

                <!-- Twitter -->
                <img class="w-fit h-fit" src="/icons/Twitter.svg" />

                <!-- LinkedIn -->
                <img class="w-fit h-fit" src="/icons/LinkedIn.svg" />

                <!-- Instagram -->
                <img class="w-fit h-fit" src="/icons/Instagram.svg" />

                <!-- YouTube -->
                <img class="w-fit h-fit" src="/icons/YouTube.svg" />

                <!-- WhatsApp -->
                <img class="w-fit h-fit" src="/icons/Whatsapp.svg" />
              </div>
            </div>

            <!-- ====== FEATURE IMAGE ====== -->
            <img src="/brand-week-main.png" class="w-full max-h-[359px] h-fit rounded-[12px] object-cover" />
          </div>
        </div>

        <!-- ===== Başlıklar Card ===== -->
        <div
          class="w-full h-fit rounded-[20px] border border-[#D9D9D9] bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.1)] p-[20px_26px] md:hidden flex flex-col gap-3">
          <!-- Heading -->
          <h3 class="font-bold text-[16px] md:text-[20px] tracking-[0.15px] text-[#333333]">
            Başlıklar
          </h3>

          <!-- Inner Content -->
          <div class="flex w-[367px] gap-[17px]">
            <!-- Blue Left Bar -->
            <div class="w-[2px] rounded-full bg-[#668CFF]"></div>

            <!-- Text List -->
            <div class="flex flex-col gap-[12px]">
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#333333]">
                Yepyeni bir dünyanın eşiğinde buluşma
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                İlham veren yıldızlar İstanbul’da
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                Sadece bir etkinlik değil, bir ekosistem
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                Yeni Dünyada Yeni Sağlık
              </span>
            </div>
          </div>
        </div>

        <!-- ======= ARTICLE BODY ======= -->
        <div class="flex flex-col gap-12 w-full h-fit text-black">
          <!-- Intro -->
          <p class="text-[16px] md:text-[18px] lg:text-xl">
            Yaratıcı endüstrilerin ve iş dünyasının en parlak zihinlerini bir araya getiren
            <b>BrandWeek Istanbul</b>, bu yıl 13’üncü kez, 10–14 Kasım tarihleri arasında
            <b>Haliç Kongre Merkezi</b>’nde gerçekleşiyor. “<b>Brand New World</b>” temasıyla düzenlenecek etkinlik,
            ilham verici konuşmalar, çağır açan projeler ve geleceğin haritasını çizen içeriklerle izleyicisini
            karşılayacak.
          </p>

          <!-- Subsection -->
          <div class="flex flex-col gap-[16px]">
            <h6 class="font-bold text-xl md:text-[22px] lg:text-2xl">Yepyeni bir dünyanın eşiğinde buluşma</h6>
            <p class="text-[16px] md:text-[18px] lg:text-xl">
              Ekonomik belirsizlikler, teknolojik sıçramalar, yapay zekânın ivmelendirdiği dönüşüm ve hızla değişen
              küresel ilişkiler... İşte tam bu geçiş döneminde, <b>BrandWeek Istanbul</b> bir çağrı yapıyor:
              <b>Yeni düzeni sadece anlamaya değil, şekillendirmeye gelin.</b>
            </p>
          </div>

          <!-- Long content -->
          <div class="flex flex-col gap-[16px]">
            <h2 class="font-bold text-xl md:text-[22px] lg:text-2xl">İlham veren yıldızlar İstanbul’da</h2>
            <p class="text-[16px] md:text-[18px] lg:text-xl">
              Bu yıl da dünya çapında ses getiren konuşmacılar İstanbul’da bir araya gelecek. İlham verici hikayeleri,
              analitik yaklaşımları ve disiplinsiz düşünce yapılarıyla öne çıkan dünyaca ünlü isimler Brand Week
              Istanbul’da buluşacak.
            </p>
            <ul class="list-disc flex flex-col ml-6 text-[16px] md:text-[18px] lg:text-xl gap-8">
              <li><b>Stefan Sagmeister</b>, tasarım dünyasının efsane ismi, Grammy ödüllü sanatçı,
                yaratıcılığın
                geleceğine dair benzersiz içgörülerini paylaşacak.</li>
              <li><b>Adam Morgan</b>, “Büyük Balığı Yutmak” kitabının yazarı, “meydan okuyan marka”
                kavramının
                yaratıcısı, cesur stratejilerin yeni dünyada nasıl fark yarattığını anlatacak.</li>
              <li><b>Sonita Alizadeh</b>, Afgan aktivist ve sanatçı, bireysel bir hikayenin küresel bir
                harekete nasıl
                dönüştüğünü etkileyici yaşam öyküsüyle aktaracak.</li>
              <li>Institute for Real Growth Direktörü <b>Mariana Peneva</b>, yapay zekâ çağında markalar ve
                liderler
                için “insani” bir büyüme modelinin nasıl inşa edilebileceğine dair öncü çalışmalarını Brand Week
                Istanbul’da paylaşacak.</li>
              <li><b>Prof. Hakan Kara</b>, küresel belirsizlik çağında ekonomik istikrar, para
                politikasındaki yeni
                yaklaşımları ve Türkiye’nin sürdürülebilir büyüme rotasını Brand Week Istanbul’da anlatacak.</li>
              <li><b>Özge Öner</b>, kent ekonomisti ve yazar olarak, küresel ekonomik ve politik
                değişimlerin
                şehirlerimizi, sokaklarımızı ve tüketim alışkanlıklarımızı nasıl dönüştürdüğünü Brand Week Istanbul’da
                paylaşacak.</li>
            </ul>
          </div>

          <!-- Ecosystem -->
          <div class="flex flex-col gap-[16px]">
            <h2 class="font-bold text-xl md:text-[22px] lg:text-2xl">Sadece bir etkinlik değil, bir ekosistem</h2>
            <p class="text-[16px] md:text-[18px] lg:text-xl">
              Brand Week Istanbul; <b>Felis Ödülleri</b>, <b>Lovemarks</b>, <b>Fark Yaratan Kadınlar</b> gibi sektörün
              en prestijli ödül programlarının yanı sıra her yıl olduğu gibi bu yıl eğitimi de merkezine alıyor.
            </p>
            <ul class="list-disc flex flex-col ml-6 text-[16px] md:text-[18px] lg:text-xl gap-8">
              <li><b>Insight Academy</b> ilk kez katılımcılarla buluşacak. Bekir Ağırdır tarafından
                tasarlanan bu üç
                günlük program, veriyi anlamak ve eyleme dönüştürmek isteyen profesyoneller için kaçırılmayacak bir
                fırsat.</li>
              <li>İhsan Özçatak’ın küratörlüğünde yeniden tasarlanan <b>Brand Academy</b> ve Berkant
                Avcı’nın stratejik
                vizyonuyla güncellenen <b>Strateji Akademisi</b>, Brand Week Istanbul’un vazgeçilmez yapı taşları olarak
                bu yıl da yaratıcı profesyonellere ilham verecek dopdolu programlarla festival kapsamında yerini alıyor.
              </li>
              <li>Kültürün sadece bir parçası değil, yaratıcısı olmak isteyen herkes için bu sene WPP Media
                iş birliği
                ile <b>Medya Akademisi</b>’ni yine ve yepyeni programıyla sizlerle buluşturuyoruz.</li>
              <li>Bu yıl da <b>Creative Society</b> iş birliği ile geleceğin yaratıcı yetenekleri,
                <b>Portfolyo
                  Buluşmaları</b> ile Brand Week Istanbul’da sektörün önde gelen yaratıcı profesyonelleriyle buluşacak.
              </li>
            </ul>
          </div>

          <!-- Final Section -->
          <div class="flex flex-col gap-[16px]">
            <h2 class="font-bold text-xl md:text-[22px] lg:text-2xl">Yeni Dünyada Yeni Sağlık</h2>
            <div class="flex flex-col gap-8">
              <p class="text-[16px] md:text-[18px] lg:text-xl">
                Brand Week Istanbul’un sağlık ve iyileşmeye odaklanan özel alanı <b>Healing Hall</b>, bu yıl “Yeni
                Dünyada
                Yeni Sağlık” mottosuyla dördüncü kez izleyiciyle buluşacak. Tüketiciyle doğrudan etkileşim kuran ilk ve
                tek sağlık organizasyonu Healing Hall; bilim, teknoloji ve insan odaklı yaklaşımlarla sağlığın
                geleceğine
                ev sahipliği yapacak.
              </p>
              <p class="text-[16px] md:text-[18px] lg:text-xl">
                <b>10–14 Kasım</b> tarihlerinde 13’üncüsü gerçekleşecek olan Brand Week Istanbul’a dair detaylı
                bilgilere
                buradan ulaşabilirsiniz.
              </p>
              <a href="https://brandweekistanbul.com/" target="_blank"
                class="text-[14px] md:text-[18px] lg:text-xl font-bold underline">
                https://brandweekistanbul.com/
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ======= PREV/NEXT NAVIGATION ======= -->
      <div class="flex flex-col items-center md:flex-row md:justify-between w-full h-fit gap-3">
        <div class="flex items-center gap-[6px] w-full md:w-fit h-fit">
          <img src="/icons/Chevron-left.svg" class="w-fit h-fit">
          <span class="font-poppins font-[700] text-[16px] text-[#0101FD]">Previous:</span>
          <span class="font-poppins font-[400] text-[16px] text-[#333333]">
            20 Best Apps Like TikTok (2025)
          </span>
        </div>

        <div class="flex items-center gap-[6px] w-full md:w-fit h-fit">
          <img src="/icons/Chevron-left.svg" class="block md:hidden w-fit h-fit rotate-180">
          <span class="font-poppins font-[700] text-[16px] text-[#0101FD]">Next:</span>
          <span class="font-poppins font-[400] text-[16px] text-[#333333]">
            Why Can’t I Skip Ads on YouTube...
          </span>
          <img src="/icons/Chevron-left.svg" class="hidden md:block w-fit h-fit rotate-180">
        </div>
      </div>
    </div>

    <!-- == RIGHT DIV == -->
    <div class="w-full md:w-fit h-fit bg-[#F9F9FF] rounded-[12px] flex flex-col items-center gap-10 text-[#999]">
      <div class="flex flex-col gap-8">
        <!-- ===== Başlıklar Card ===== -->
        <div
          class="w-full h-fit rounded-[20px] border border-[#D9D9D9] bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.1)] p-[20px_26px] hidden md:flex flex-col gap-3">
          <!-- Heading -->
          <h3 class="font-bold text-[16px] md:text-[20px] tracking-[0.15px] text-[#333333]">
            Başlıklar
          </h3>

          <!-- Inner Content -->
          <div class="flex w-[367px] gap-[17px]">
            <!-- Blue Left Bar -->
            <div class="w-[2px] rounded-full bg-[#668CFF]"></div>

            <!-- Text List -->
            <div class="flex flex-col gap-[12px]">
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#333333]">
                Yepyeni bir dünyanın eşiğinde buluşma
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                İlham veren yıldızlar İstanbul’da
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                Sadece bir etkinlik değil, bir ekosistem
              </span>
              <span class="font-medium md:font-normal text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
                Yeni Dünyada Yeni Sağlık
              </span>
            </div>
          </div>
        </div>

        <!-- Icons Section (For smaller screens) -->
        <div class="md:hidden flex items-center gap-[18px] w-fit h-fit">
          <!-- Share Text + Icon -->
          <div class="flex items-center gap-[8px] w-full h-fit">
            <img class="w-fit h-fit" src="/icons/Share-red.svg" />
            <span class="font-poppins font-[400] text-[14px] text-[#000] tracking-[0.25px]">Paylaş</span>
          </div>

          <!-- Social Icons -->
          <div class="flex items-center gap-[20px] w-full h-fit">
            <!-- Facebook -->
            <img class="w-fit h-fit" src="/icons/Facebook.svg" />

            <!-- Twitter -->
            <img class="w-fit h-fit" src="/icons/Twitter.svg" />

            <!-- LinkedIn -->
            <img class="w-fit h-fit" src="/icons/LinkedIn.svg" />

            <!-- Instagram -->
            <img class="w-fit h-fit" src="/icons/Instagram.svg" />

            <!-- YouTube -->
            <img class="w-fit h-fit" src="/icons/YouTube.svg" />

            <!-- WhatsApp -->
            <img class="w-fit h-fit" src="/icons/Whatsapp.svg" />
          </div>
        </div>
        <AgencyCard title="Clock work" imgSrc="/agency-card/clock-work.png" />
        <AgencyCard imgSrc="/agency-card/poligon.png" />
      </div>

      <!-- Ajanslardan Card -->
      <div
        class="w-full lg:w-[424px] flex items-center justify-center bg-white px-5 md:px-10 py-10 shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[60px] border border-[#0101FD]">
        <div class="w-full h-fit flex flex-col justify-between gap-[26px]">
          <div class="flex flex-col gap-[4px]">
            <h2 class="text-[24px] font-bold text-[#0101FD]">
              Ajanslardan Ücretsiz Teklif Alın.
            </h2>
            <p class="text-[14px] font-normal text-[#333333] tracking-[0.15px]">
              Ajans mı arıyorsunuz? İhtiyacınıza uygun ajanslardan ücretsiz teklifler alın.
            </p>
          </div>
          <div>
            <Button variant="Secondary" state="Default" size="Medium">Teklif Al - Ücretsiz</Button>
          </div>
        </div>
      </div>

      <!-- Icons Section -->
      <div class="hidden md:flex items-center gap-[18px] w-[301px] h-fit">
        <!-- Share Text + Icon -->
        <div class="flex items-center gap-[8px] w-[75px] h-[21px]">
          <img class="w-fit h-fit" src="/icons/Share-red.svg" />
          <span class="font-poppins font-[400] text-[14px] text-[#000] tracking-[0.25px]">Paylaş</span>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-[20px] w-[202px] h-[19px]">
          <!-- Facebook -->
          <img class="w-fit h-fit" src="/icons/Facebook.svg" />

          <!-- Twitter -->
          <img class="w-fit h-fit" src="/icons/Twitter.svg" />

          <!-- LinkedIn -->
          <img class="w-fit h-fit" src="/icons/LinkedIn.svg" />

          <!-- Instagram -->
          <img class="w-fit h-fit" src="/icons/Instagram.svg" />

          <!-- YouTube -->
          <img class="w-fit h-fit" src="/icons/YouTube.svg" />

          <!-- WhatsApp -->
          <img class="w-fit h-fit" src="/icons/Whatsapp.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue';
import Button from '../../components/Button/Button.vue';
</script>
