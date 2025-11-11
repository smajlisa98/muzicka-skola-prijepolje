import { useEffect, useMemo, useState } from 'react';
import { Phone, Mail, MapPin, Music, Users, Award, Facebook, Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const newsList = [
  {
    title: 'Seminar na Zlatiboru – stručno usavršavanje nastavnika',
    date: '25. oktobar 2025',
    category: 'Seminar',
    short:
      'Nastavnici naše škole učestvovali su na seminaru Zajednice muzičkih i baletskih škola Srbije na Zlatiboru (22–25. oktobar) sa akcentom na metodiku nastave, evaluaciju i savremene pristupe.',
    full: `Nastavnici Osnovne muzičke škole Prijepolje prisustvovali su seminaru održanom na Zlatiboru u organizacijiZajednice muzičkih i baletskih škola Srbije od 22. do 25. oktobra 2025. godine.

  Tokom četiri dana obuhvaćene su teme: 
  • savremeni pristupi u nastavi instrumenta i solfeđa,  
  • metodika vežbanja i motivacija učenika,  
  • evaluacija postignuća i priprema za takmičenja,  
  • inkluzivni pristupi i diferencirana nastava,  
  • upotreba digitalnih alata i notacionog softvera u nastavi.

  Učesnici su razmenili iskustva i primere dobre prakse sa kolegama iz škola širom Srbije. Stečena znanja biće implementirana u nastavi kroz unapređene planove časa, nove materijale i još veću podršku učenicima u pripremi javnih nastupa i takmičenja.

  Zahvaljujemo organizatorima na kvalitetnom programu i inspirativnim predavanjima.`,
  },
  {
    title: 'Dečija nedelja u našoj školi — posete i radionice',
    date: '20. oktobar 2025',
    category: 'Posete',
    short:
      'Školu su posetili predškolci vrtića „Maslačak“, učenici drugog razreda OŠ „Boško Buha“ iz Ivanja, deca iz vrtića „Paša i Nataša“ iz Nove Varoši i deca sa smetnjama u razvoju u okviru projekta „Zajedno za Polimlje“.',
    full: `U okviru obeležavanja Dečije nedelje, Osnovna muzička škola Prijepolje bila je domaćin nizu inspirativnih poseta i muzičkih radionica.

  🎵 Predškolska grupa vrtića „Maslačak“ — Mališani su uživali u kratkim nastupima i imali priliku da isprobaju osnovne zvuke na klaviru, harmonici i udaraljkama. Poseban akcenat bio je na igri kroz ritam i pesmu.

  🎶 Učenici drugog razreda OŠ „Boško Buha“ iz Ivanja — Kroz interaktivne mini-časove i kratke koncerte, đaci su se upoznali sa instrumentima, pravilnim držanjem i osnovama muzikalnosti, uz mnoštvo pitanja i osmeha.

  🎵 Deca iz vrtića „Paša i Nataša“ iz Nove Varoši posetila su izdvojeno odeljenje škole — tokom posete imali su priliku da slušaju nastupe učenika, upoznaju se sa instrumentima i uživaju u zajedničkom muziciranju i pesmi.

  🤝 Deca sa smetnjama u razvoju u okviru projekta „Zajedno za Polimlje“ — Održane su inkluzivne aktivnosti prilagođene učesnicima, sa fokusom na zajedništvo, senzornu igru zvukom i kreativno muzičko izražavanje.

  Atmosfera tokom cele nedelje bila je ispunjena radoznalošću, pesmom i dobrim raspoloženjem — hvala svim posetiocima, roditeljima i vaspitačima/učiteljima na podršci!

  📸 Fotografije sa poseta možete pogledati u sekciji Galerija.`,
  },
  {
    title: 'Nova školska godina u Muzičkoj školi u Prijepolju – više đaka, bolji uslovi i velika očekivanja',
    date: '1. septembar 2025',
    category: 'Škola',
    short:
      'Početak školske godine: 166 učenika u šest razreda + 50 u pripremnom, dobra opremljenost, izdvojena odeljenja u Priboju i Novoj Varoši.',
    full: `Kao što je 1. septembra zvono označilo početak nastave u svim osnovnim školama, tako je i u Osnovnoj muzičkoj školi u Prijepolju svečano započela nova školska godina. U klupe je selo 166 učenika raspoređenih u šest razreda, dok će u pripremni, predškolski razred narednih dana biti upisano još pedeset mališana.

    “Nova školska godina u našoj školi počela je spremno i organizovano... Naša matična škola već dugi niz godina uspešno funkcioniše u okviru Doma kulture u Prijepolju”, navodi direktorka Dragana Tomašević.

    Najviše učenika upisano je na odsek klavira – 87, harmonike – 75, dok je odsek flaute upisalo četvoro đaka. Škola ima 17 nastavnika; instrumenti su servisirani, a prethodnih godina stigle su i vredne donacije (pianina i specijalna harmonika sa konvertor basovima).

    Učenici redovno učestvuju na takmičenjima u zemlji i inostranstvu, sa zapaženim rezultatima. Tokom godine organizuju se koncerti i javni nastupi — od “Moj prvi koncert” do polugodišnjih i godišnjih koncerata.`,
    sourceUrl:
      'https://listpolimlje.info/2025/09/01/nova-skolska-godina-u-muzickoj-skoli-u-prijepolju-vise-djaka-bolji-uslovi-i-velika-ocekivanja/',
  },
  {
    title: 'Otvorene prijave za novu školsku godinu',
    date: '22. maj 2025',
    short: 'Počele su prijave za upis novih učenika u 2025/26...',
    full: `Pozivamo sve zainteresovane učenike i roditelje da se prijave za novu školsku godinu. Prijave su otvorene za sledeće instrumente: klavir, harmonika, flauta, kao i za teorijske predmete.

    Upis je 16.06. Testiranje kandidata biće organizovano u prostorijama škole od 11 do 14 časova.`,
    category: 'Upis',
  },
  {
    title: 'Veče klasike za pamćenje – koncert polaznika Muzičke škole',
    date: '18. jun 2025',
    category: 'Koncert',
    short: 'Učenički koncert u Domu kulture oduševio publiku — učestvovalo 49 učenika i učenica. Izvedeno 27 numera, od solo nastupa do klavirskih dua.',
    full: `Tradicionalni junski koncert Muzičke škole u Novoj Varoši održan je u Domu kulture. Na sceni se predstavilo 49 učenika sa 27 izvođenja, od solističkih nastupa do klavirskih dua. Program su pripremili profesori Igor Miljković, Srđan Brzaković i Jelena Slović.

    Koncert je obeležio i jubilej – 23 godine rada izdvojenog odeljenja u Novoj Varoši, a direktorka škole Dragana Tomašević naglasila je značaj kontinuiranog rada uprkos izazovima.

    Pored odličnog koncerta, učenici su tokom godine osvojili brojne nagrade na domaćim i međunarodnim takmičenjima.`,
  sourceUrl:
    'https://www.varoske.net/vesti/2640/veche-klasike-za-pamcenje-koncert-polaznika-muzichke-shkole/',
  },
  {
    title: 'Donacije za unapređenje nastave u muzičkoj školi',
    date: '16. decembar 2024',
    category: 'Oprema',
    short: 'Udruženje Vivarta doniralo školi četiri harmonike. Stigli i laptop i električni pianino Yamaha.',
    full: `Muzička škola u Prijepolju obogatila je svoj instrumentar i tehničku opremu zahvaljujući značajnim donacijama.

    Udruženje Vivarta iz Beograda doniralo je školi četiri harmonike, koje će koristiti učenici u svakodnevnoj nastavi.

    Pored toga, škola je dobila i novi laptop, donaciju predsednika opštine Prijepolje, koji će služiti za administrativne i pedagoške potrebe nastavnika.

    Zahvaljujući zajedničkoj donaciji Zajednice muzičkih škola Srbije i Opštine Nova Varoš, za izdvojeno odeljenje u Novoj Varoši kupljen je i električni pianino Yamaha, vrednosti 220.000 dinara.

    Ova oprema će omogućiti još kvalitetnije izvođenje nastave i dodatnu motivaciju za učenike i nastavnike.`,
  },
] as const;

/** Responsivno: koliko kartica staje u “stranicu” */
function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3);
      else if (w >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return itemsPerView;
}

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  const navigateToAbout = () => navigate('/about');

  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { url: `${import.meta.env.BASE_URL}predskolska-grupa-maslacak.jpg`, title: 'Predškolska grupa vrtića „Maslačak“' },
    { url: `${import.meta.env.BASE_URL}pasa-i-natasa-muzicka.jpg`, title: 'Deca iz vrtića „Paša i Nataša“ iz Nove Varoši' },
    { url: `${import.meta.env.BASE_URL}ucenici-OS-Bosko-Buha.jpg`, title: 'Učenici drugog razreda OŠ „Boško Buha“ iz Ivanja' },
    { url: `${import.meta.env.BASE_URL}zajedno-za-Polimlje.jpg`, title: 'Deca sa smetnjama u razvoju u okviru projekta „Zajedno za Polimlje“' },
    { url: `${import.meta.env.BASE_URL}20250722_175935.jpg`, title: 'Donacija Udruženja Vivarta' },
    { url: `${import.meta.env.BASE_URL}20250722_180009.jpg`, title: 'Donacija Udruženja Vivarta' },
    { url: `${import.meta.env.BASE_URL}20250722_180003.jpg`, title: 'Donacija predsednika opštine' },
    { url: `${import.meta.env.BASE_URL}20250722_180015.jpg`, title: 'Dodela plakete školi za 20 godina uspešnog rada IO Nova Varoš' },
    { url: `${import.meta.env.BASE_URL}20250722_180021.jpg`, title: 'Dodela plakete školi za 20 godina uspešnog rada IO Nova Varoš' },
  ];

  // NEWS state
  const [selectedNews, setSelectedNews] = useState<null | typeof newsList[number]>(null);

  // Carousel bez horizontalnog skrola (samo dugmad)
  const itemsPerView = useItemsPerView();
  const shouldUseCarousel = newsList.length > 3;

  // Podeli vesti u “stranice”
  const pages = useMemo(() => {
    const totalPages = Math.ceil(newsList.length / itemsPerView);
    return Array.from({ length: totalPages }, (_, i) =>
      newsList.slice(i * itemsPerView, (i + 1) * itemsPerView)
    );
  }, [itemsPerView]);

  // drži currentPage u granicama posle resize-a
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    setCurrentPage((p) => Math.min(p, Math.max(0, pages.length - 1)));
  }, [pages.length]);

  const canLeft = currentPage > 0;
  const canRight = currentPage < pages.length - 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={`${import.meta.env.BASE_URL}muzicka-skola-pp-logo.png`} alt="Logo Muzičke škole" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-800">Muzička škola Prijepolje</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Početna</button>
              <button onClick={navigateToAbout} className="text-gray-600 hover:text-blue-600 transition-colors">O školi</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-blue-600 transition-colors">Programi</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-600 hover:text-blue-600 transition-colors">Vesti</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hero-image-muzicka.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Muzička škola
            <span className="block text-yellow-300">Prijepolje</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Tamo gde muzika počinje</p>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">Otkrivamo talente, razvijamo kreativnost i stvaramo budućnost kroz moć muzike</p>
          <Button onClick={navigateToAbout} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Saznajte više
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O nama</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Naša misija</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Osnovna muzička škola Prijepolje osnovana je 1971. godine i ima bogatu tradiciju muzičkog obrazovanja mladih.</p>
                <p className="text-gray-600 mb-6 leading-relaxed">Kroz decenije rada, naša škola je odgojila brojne talentovane muzičare koji danas nastavljaju svoje karijere u prestižnim institucijama širom sveta.</p>
                <Button onClick={navigateToAbout} variant="outline" className="hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Detaljnije o školi
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 animate-fade-in">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">235</h4>
                    <p className="text-gray-600">Učenika</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">50+</h4>
                    <p className="text-gray-600">Godina tradicije</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Music className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">3</h4>
                    <p className="text-gray-600">Odeljenja</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">100+</h4>
                    <p className="text-gray-600">Nagrada</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Naši programi</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Otkrijte savršen program za vaš muzički put</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Klavir', description: 'Osnove klavira do naprednih tehnika. Individualni pristup svakom učeniku.', icon: '🎹', duration: '6 godina' },
              { title: 'Harmonika', description: 'Učenje harmonike kroz različite stilove i tehnike sviranja.', icon: '🪗', duration: '6 godina' },
              { title: 'Flauta', description: 'Duvački instrumenti sa naglaskom na klasičnu muziku.', icon: '🎵', duration: '6 godina' },
              { title: 'Muzička teorija', description: 'Solfeggio, harmonija i osnove muzičke teorije.', icon: '📚', duration: '1 godina' },
              { title: 'Horsko pevanje', description: 'Razvoj glasa kroz horsko pevanje i muzičko izražavanje.', icon: '🎤', duration: '6-7 godina' },
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <div className="text-sm text-blue-600 font-medium">Trajanje: {program.duration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section (bez horizontalnog scroll-a; samo dugmad za prelaz) */}
      <section id="news" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Vesti</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pratite najnovije vesti o koncertima, nagradama i aktivnostima naše škole</p>
          </div>

          {!shouldUseCarousel ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {newsList.map((news, index) => (
                <Card
                  key={index}
                  onClick={() => setSelectedNews(news)}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-xs text-gray-500">{news.date}</span>
                      {news.category && (
                        <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-[10px]">{news.category}</span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{news.short}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="relative max-w-6xl mx-auto">
              {/* Dugmad za navigaciju (bez skrola) */}
              <button
                aria-label="prethodno"
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={!canLeft}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white shadow hover:shadow-md disabled:opacity-40"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="sledeće"
                onClick={() => setCurrentPage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={!canRight}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white shadow hover:shadow-md disabled:opacity-40"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Track sa “stranicama”; nema horizontalnog skrola */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                  {pages.map((items, pageIdx) => (
                    <div key={pageIdx} className="min-w-full">
                      <div
                        className="grid gap-8"
                        style={{ gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` }}
                      >
                        {items.map((news, i) => (
                          <div key={i} className="w-full">
                            <Card
                              onClick={() => setSelectedNews(news)}
                              className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in group cursor-pointer"
                            >
                              <CardContent className="p-6 h-full flex flex-col">
                                <div className="flex items-center mb-3">
                                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                                  <span className="text-xs text-gray-500">{news.date}</span>
                                  {news.category && (
                                    <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-[10px]">
                                      {news.category}
                                    </span>
                                  )}
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                  {news.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                                  {news.short}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Indikatori stranica */}
              <div className="mt-6 flex justify-center gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`h-2 w-2 rounded-full ${i === currentPage ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`idi na stranu ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal za detalje (manji tekst + link na dnu) */}
        {selectedNews && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedNews(null)}
          >
            <div
              className="bg-white rounded-lg max-w-screen-sm w-full p-6 md:p-7 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelectedNews(null)}
                aria-label="zatvori"
              >
                ✕
              </button>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{selectedNews.title}</h2>
              <p className="text-xs md:text-sm text-gray-500 mb-4">
                {selectedNews.date} {selectedNews.category ? `— ${selectedNews.category}` : ''}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{selectedNews.full}</p>

              {'sourceUrl' in selectedNews && (selectedNews as any).sourceUrl && (
                <div className="mt-5">
                  <a
                    href={(selectedNews as any).sourceUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 underline"
                  >
                    Pročitaj vest
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Galerija</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pogledajte trenutke iz naše škole</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {galleryImages.map((image, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="rounded-lg shadow-lg bg-white">
                    <div className="flex items-center justify-center h-[400px] bg-white">
                      <img src={image.url} alt={image.title} className="max-w-full max-h-full object-contain bg-transparent" />
                    </div>
                    <div className="p-4 bg-gray-100 text-center">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0}>← Prethodna</Button>
            <Button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, galleryImages.length - 1))} disabled={currentIndex === galleryImages.length - 1}>Sledeća →</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Kontakt</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Spremni smo da odgovorimo na sva vaša pitanja</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informacije o kontaktu</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Telefon</h4>
                      <p className="text-gray-600">033/712-860</p>
                      <p className="text-gray-600">033/710-150</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">muzskola@mts.rs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Adresa</h4>
                      <p className="text-gray-600">Sandžačkih brigada br.2</p>
                      <p className="text-gray-600">31300 Prijepolje, Srbija</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Radno vreme</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ponedeljak - Petak</span>
                    <span className="font-semibold text-gray-800">07:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subota</span>
                    <span className="font-semibold text-gray-800">Zatvoreno</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nedelja</span>
                    <span className="font-semibold text-gray-800">Zatvoreno</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}muzicka-skola-pp-logo.png`}
                  alt="Logo Muzičke škole"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">Muzička škola Prijepolje</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Odgajamo nove generacije muzičara kroz kvalitetno obrazovanje i kreativno učenje.
              </p>
            </div>

            <div>
              <div className="space-y-2">
                <button onClick={navigateToAbout} className="block text-gray-400 hover:text-white transition-colors">O školi</button>
                <button onClick={() => scrollToSection('programs')} className="block text-gray-400 hover:text-white transition-colors">Programi</button>
                <button onClick={() => scrollToSection('news')} className="block text-gray-400 hover:text-white transition-colors">Vesti</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Kontakt</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Pratite nas</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/muzickaskolaprijepolje/" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform" target="_blank">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 DEVNINE. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
