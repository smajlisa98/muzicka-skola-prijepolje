
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Music, Users, Award, Send, Facebook, Instagram, Twitter, Calendar, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Vaša poruka je uspešno poslata! Kontaktiraćemo vas uskoro.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // const navigateToGallery = () => {
  //   navigate("/gallery");
  // };

  const navigateToAbout = () => {
    navigate("/about");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      url: `${import.meta.env.BASE_URL}20250722_175935.jpg`,
      title: 'Donacija Udruženja Vivarta',
    },
    {
      url: `${import.meta.env.BASE_URL}20250722_180009.jpg`,
      title: 'Donacija Udruženja Vivarta',
    },
    {
      url: `${import.meta.env.BASE_URL}20250722_180003.jpg`,
      title: 'Donacija predsednika opštine',
    },
    {
      url: `${import.meta.env.BASE_URL}20250722_180015.jpg`,
      title: 'Dodela plakete školi za 20 godina uspešnog rada IO Nova Varoš',
    },
    {
      url: `${import.meta.env.BASE_URL}20250722_180021.jpg`,
      title: 'Dodela plakete školi za 20 godina uspešnog rada IO Nova Varoš',
    },
  ];

  const [selectedNews, setSelectedNews] = useState<null | typeof newsList[0]>(null);

  const newsList = [
    {
      title: 'Otvorene prijave za novu školsku godinu',
      date: '22. maj 2025',
      short: 'Počele su prijave za upis novih učenika u 2025/26...',
      full: `Pozivamo sve zainteresovane učenike i roditelje da se prijave za novu školsku godinu. Prijave su otvorene za sledeće instrumente: klavir, harmonika, flauta, gitara, kao i za teorijske predmete.
      
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

      Pored odličnog koncerta, učenici su tokom godine osvojili brojne nagrade na domaćim i međunarodnim takmičenjima.

      Više detalja možete pročitati u celoj vesti: [Pogledaj više](https://varoske.net/vesti/2640/veche-klasike-za-pamcenje-koncert-polaznika-muzichke-shkole)`,
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

      Ova oprema će omogućiti još kvalitetnije izvođenje nastave i dodatnu motivaciju za učenike i nastavnike.`
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={`${import.meta.env.BASE_URL}muzicka-skola-pp-logo.png`}
                alt="Logo Muzičke škole"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-800">Muzička škola Prijepolje</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Početna</button>
              <button onClick={navigateToAbout} className="text-gray-600 hover:text-blue-600 transition-colors">O školi</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-blue-600 transition-colors">Programi</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-600 hover:text-blue-600 transition-colors">Vesti</button>
              {/* <button onClick={navigateToGallery} className="text-gray-600 hover:text-blue-600 transition-colors">Galerija</button> */}
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
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">
            Otkrivamo talente, razvijamo kreativnost i stvaramo budućnost kroz moć muzike
          </p>
          <Button 
            onClick={navigateToAbout}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Osnovna muzička škola Prijepolje osnovana je 1971. godine i ima bogatu tradiciju muzičkog obrazovanja mladih.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Kroz decenije rada, naša škola je odgojila brojne talentovane muzičare koji danas 
                  nastavljaju svoje karijere u prestižnim institucijama širom sveta.
                </p>
                <Button 
                  onClick={navigateToAbout}
                  variant="outline"
                  className="hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Otkrijte savršen program za vaš muzički put
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Klavir',
                description: 'Osnove klavira do naprednih tehnika. Individualni pristup svakom učeniku.',
                icon: '🎹',
                duration: '6 godina'
              },
              {
                title: 'Harmonika',
                description: 'Učenje harmonike kroz različite stilove i tehnike sviranja.',
                icon: '🪗',
                duration: '6 godina'
              },
              {
                title: 'Flauta',
                description: 'Duvački instrumenti sa naglaskom na klasičnu muziku.',
                icon: '🎵',
                duration: '6 godina'
              },
              {
                title: 'Muzička teorija',
                description: 'Solfeggio, harmonija i osnove muzičke teorije.',
                icon: '📚',
                duration: '1 godina'
              },
              {
                title: 'Horsko pevanje',
                description: 'Razvoj glasa kroz horsko pevanje i muzičko izražavanje.',
                icon: '🎤',
                duration: '6-7 godina'
              }
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    Trajanje: {program.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Vesti</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pratite najnovije vesti o koncertima, nagradama i aktivnostima naše škole
            </p>
          </div>

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
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{news.short}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal za detalje */}
        {selectedNews && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedNews(null)}
          >
            <div
              className="bg-white rounded-lg max-w-screen-sm w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelectedNews(null)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedNews.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {selectedNews.date} — {selectedNews.category}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedNews.full}</p>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pogledajte trenutke iz naše škole
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {galleryImages.map((image, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="rounded-lg shadow-lg bg-white">
                    <div className="flex items-center justify-center h-[400px] bg-white">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="max-w-full max-h-full object-contain bg-transparent"
                      />
                    </div>
                    <div className="p-4 bg-gray-100 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0}>
              ← Prethodna
            </Button>
            <Button onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, galleryImages.length - 1))} disabled={currentIndex === galleryImages.length - 1}>
              Sledeća →
            </Button>
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
            {/* Contact Info */}
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
                      <p className="text-gray-600">Санџачких бригада бр.2</p>
                      <p className="text-gray-600">31300 Пријепоље, Србија</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
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
                {/* <button onClick={navigateToGallery} className="block text-gray-400 hover:text-white transition-colors">Galerija</button> */}
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
