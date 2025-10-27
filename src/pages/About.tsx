import { ArrowLeft, MapPin, Users, Award, Trophy, FileText, Download, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const documents = [
    {
      title: 'Godišnji izveštaji 2024-2025',
      href: `${import.meta.env.BASE_URL}docs/godisnji-izvestaji-2024-25-novi.doc`,
      type: 'DOC',
    },
    {
      title: 'Izveštaji o radu direktora 2024-2025',
      href: `${import.meta.env.BASE_URL}docs/izvestaj-o-radu-dir-24-25.doc`,
      type: 'DOC',
    },
    {
      title: 'Statut OMŠ Prijepolje',
      href: `${import.meta.env.BASE_URL}docs/statut-oms-prijepolje.docx`,
      type: 'DOCX',
    },
  ];


  const navigateHome = () => {
    navigate("/");
  };

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
            <Button 
              onClick={navigateHome}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Nazad na početnu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">O školi</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Osnovna muzička škola Prijepolje - tradicija, kvalitet i izvrsnost
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* History Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="h-8 w-8 text-blue-600 mr-3" />
                  Istorijat škole
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Osnovna muzička škola Prijepolje osnovana je 1971. godine pri Radničkom
                    univerzitetu „Sreten Vukosavljević", a od 1979. godine radila je u sastavu Doma kulture.
                    Odlukom Vlade Republike Srbije krajem 1995. godine škola dobija status samostalne
                    specijalne vaspitno obrazovne ustanove.
                  </p>
                  <p>
                    Pri samom osamostaljivanju školi je pripojeno Izdvojeno odeljenje u Priboju,
                    a novembra 2002. godine odlukom Ministarstva prosvete osnovano je i Izdvojeno
                    odeljenje u Novoj Varoši. Tako sada škola pokriva teritoriju tri opštine: Prijepolje,
                    Priboj i Nova Varoš.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  Lokacija i saradnja
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Matična škola je smeštena u prostoru Doma kulture. Nalazi se na ušću
                    Mileševke u reku Lim. Povezana je mrežom ulica i tako je dostupna učenicima koji
                    nastavu pohađaju u njoj. Većina učenika ne koristi prevoz. Kako je škola smeštena u
                    Domu kulture ima dobru saradnju sa istim po pitanju aktivnosti značajnih za muzički
                    život grada: Svečane akademije, Dan Svetog Save, Dečija nedelja i dr.
                  </p>
                  <p>
                    U neposrednoj blizini škole nalazi se Osnovna škola „Vladimir Perić Valter"
                    koju pohađa 90% naših učenika. Nedaleko od škole nalazi se Dečiji vrtić „Miša
                    Cvijović" sa kojim škola sarađuje. U blizini škole nalaze se dve privatne radio
                    stanice kao i jedna privatna televizija koje informišu javnost o aktivnostima škole.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Departments Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  Izdvojena odeljenja
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Prostorije u kojima radi Izdvojeno odeljenje Priboj su u sklopu Osnovne škole
                    „Branko Radičević", a nedaleko od Doma kulture. Odeljenje svojim radom daje svoj
                    doprinos na svim kulturnim manifestacijama na nivou grada.
                  </p>
                  <p>
                    Nastava u Izdvojenom odeljenju Nova Varoš se najpre odvijala u prostorijama
                    Dečijeg vrtića „Paša i Nataša", a potom je dodeljen adekvatan prostor u prostoru
                    OŠ „Živko Ljuić". Sticajem okolnosti ostvaruje izuzetnu saradnju sa istom Osnovnom
                    školom kao i sa Domom kulture.
                  </p>
                  <p>
                    Sastav učenika i radnika škole je višeenacionalan, a međuljudski odnosi su
                    na visokom nivou.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Trophy className="h-8 w-8 text-blue-600 mr-3" />
                  Uspesi i rezultati
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Savesnim radom nastavnika i odgovornim zalaganjem učenika, škola postiže
                    izuzetne rezultate na takmičenjima kao što su: Festival muzičkih škola Srbije,
                    Akordeon-art, Zvezdane staze, Takmičenje klavirskih dueta, Mali virtouz, Dani
                    harmonike-Smederevo, Pijanističko takmičenje u Užicu, Muzika u centru, Meh-fest,
                    Međunarodni festival-Ub i dr.
                  </p>
                  <p>
                    Svršeni učenici nisu zaboravili školu i na adekvatan način pomažu radu škole kroz
                    donatorstva i sponzorstva, kao i svojim koncertima.
                  </p>
                  <p>
                    Škola sa izdvojenim odeljenjima ima 235 učenika koji izučavaju: klavir, harmoniku i
                    flautu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">235</h3>
                  <p className="text-gray-600">Učenika u sve tri opštine</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
                  <p className="text-gray-600">Opštine koje pokrivamo</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
                  <p className="text-gray-600">Godina tradicije</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  Dokumenta
                </h2>

                <ul className="divide-y divide-gray-100">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl border bg-white p-3">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{doc.title}</p>
                          <p className="text-sm text-gray-500">{doc.type} fajl</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          asChild
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          title="Preuzmi dokument"
                        >
                          <a href={doc.href} download>
                            <Download className="h-4 w-4 mr-2" />
                            Preuzmi
                          </a>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>



            {/* Call to Action */}
            <div className="text-center animate-fade-in">
              <Button 
                onClick={navigateHome}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Povratak na početnu stranicu
              </Button>
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
                <button onClick={navigateHome} className="block text-gray-400 hover:text-white transition-colors">Početna</button>
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

export default About;
