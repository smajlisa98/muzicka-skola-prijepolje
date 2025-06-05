
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

  const navigateToGallery = () => {
    navigate("/gallery");
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Muzička škola Prijepolje</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Početna</button>
              <button onClick={navigateToAbout} className="text-gray-600 hover:text-blue-600 transition-colors">O školi</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-blue-600 transition-colors">Programi</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-600 hover:text-blue-600 transition-colors">Vesti</button>
              <button onClick={navigateToGallery} className="text-gray-600 hover:text-blue-600 transition-colors">Galerija</button>
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
            backgroundImage: `url('/lovable-uploads/c1deecac-499e-44dd-a005-5aa7e3601b35.png')`,
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
                duration: '4-8 godina'
              },
              {
                title: 'Harmonika',
                description: 'Učenje harmonike kroz različite stilove i tehnike sviranja.',
                icon: '🪗',
                duration: '4-8 godina'
              },
              {
                title: 'Flauta',
                description: 'Duvački instrumenti sa naglaskom na klasičnu muziku.',
                icon: '🎵',
                duration: '4-6 godina'
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
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Vesti</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pratite najnovije vesti o koncertima, nagradama i aktivnostima naše škole
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Uspešan koncert učenika',
                date: '15. decembar 2024',
                description: 'Naši učenici su održali izvanredan koncert u gradskom pozorištu pred brojnom publikom.',
                category: 'Koncert'
              },
              {
                title: 'Prva nagrada na republičkom takmičenju',
                date: '10. decembar 2024',
                description: 'Ana Marić, učenica klavira, osvojila je prvo mesto na republičkom takmičenju mladih muzičara.',
                category: 'Nagrada'
              },
              {
                title: 'Otvorene prijave za novu školsku godinu',
                date: '5. decembar 2024',
                description: 'Počele su prijave za upis novih učenika u školsku 2024/25 godinu. Pridružite nam se!',
                category: 'Upis'
              },
              {
                title: 'Novi instrumenti u školi',
                date: '28. novembar 2024',
                description: 'Zahvaljujući donaciji grada, škola je obogaćena novim klavirima i violinama.',
                category: 'Oprema'
              },
              {
                title: 'Muzički workshop za decu',
                date: '20. novembar 2024',
                description: 'Organizovali smo besplatan workshop za decu uzrasta 5-8 godina.',
                category: 'Događaj'
              },
              {
                title: 'Jubilej škole - 57 godina rada',
                date: '15. novembar 2024',
                description: 'Obeležili smo 57 godina uspešnog rada i obrazovanja mladih muzičara.',
                category: 'Jubilej'
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
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
                  <p className="text-gray-600 leading-relaxed">{news.description}</p>
                </CardContent>
              </Card>
            ))}
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
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Pošaljite nam poruku</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Ime i prezime</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Vaše ime i prezime"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email adresa</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="vaš@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Poruka</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Vaša poruka..."
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Pošaljite poruku</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-in space-y-8">
              <Card className="shadow-lg">
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
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Radno vreme</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ponedeljak - Petak</span>
                      <span className="font-semibold text-gray-800">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subota</span>
                      <span className="font-semibold text-gray-800">09:00 - 15:00</span>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">Muzička škola Prijepolje</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Odgajamo nove generacije muzičara kroz kvalitetno obrazovanje i kreativno učenje.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Brze veze</h4>
              <div className="space-y-2">
                <button onClick={navigateToAbout} className="block text-gray-400 hover:text-white transition-colors">O školi</button>
                <button onClick={() => scrollToSection('programs')} className="block text-gray-400 hover:text-white transition-colors">Programi</button>
                <button onClick={() => scrollToSection('news')} className="block text-gray-400 hover:text-white transition-colors">Vesti</button>
                <button onClick={navigateToGallery} className="block text-gray-400 hover:text-white transition-colors">Galerija</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Kontakt</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Pratite nas</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Muzička škola Prijepolje. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
