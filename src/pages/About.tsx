
import React from 'react';
import { ArrowLeft, Music, MapPin, Users, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const navigateHome = () => {
    window.location.href = '/';
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
                    Основна музичка школа Пријепоље основана је 1971. године при Радничком
                    универзитету „Сретен Вукосављевић", а од 1979. године радила је у саставу Дома културе.
                    Одлуком Владе Републике Србије крајем 1995. године школа добија статус самосталне
                    специјалне васпитно образовне установе.
                  </p>
                  <p>
                    При самом осамостаљивању школи је припојено Издвојено одељење у Прибоју,
                    а новембра 2002. године одлуком Министарства просвете основано је и Издвојено
                    одељење у Новој Вароши. Тако сада школа покрива територију три општине: Пријепоље,
                    Прибој и Нова Варош.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  Локација и сарадња
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Матична школа је смештена у простору Дома культуре. Налази се на ушћу
                    Милешевке у реку Лим. Повезана је мрежом улица и тако је доступна ученицима који
                    наставу похађају у њој. Већина ученика не користи превоз. Како је школа смештена у
                    Дому културе има добру сарадњу са истим по питању активности значајних за музички
                    живот града: Свечане академије, Дан Светог Саве, Дечија недеља и др.
                  </p>
                  <p>
                    У непосредној близини школе налази се Основна школа „Владимир Перић Валтер"
                    коју похађа 90% наших ученика. Недалеко од школе налази се Дечији вртић „Миша
                    Цвијовић" са којим школа сарађује. У близини школе налазе се две приватне радио
                    станице као и једна приватна телевизија које информишу јавност о активностима школе.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Departments Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  Издвојена одељења
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Просторије у којима ради Издвојено одељење Прибој су у склопу Основне школе
                    „Бранко Радичевић", а недалеко од Дома културе. Одељење својим радом даје свој
                    допринос на свим културним манифестацијама на нивоу града.
                  </p>
                  <p>
                    Настава у Издвојеном одељењу Нова Варош се најпре одвијала у просторијама
                    Дечијег вртића „Паша и Наташа", а потом је додељен адекватан простор у простору
                    ОШ „Живко Љујић". Стицајем околности остварује изузетну сарадњу са истом Основном
                    школом као и са Домом културе.
                  </p>
                  <p>
                    Састав ученика и радника школе је вишенационалан, а међуљудски односи су
                    на високом нивоу.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Section */}
            <Card className="mb-12 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Trophy className="h-8 w-8 text-blue-600 mr-3" />
                  Успеси и резултати
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Савесним радом наставника и одговорним залагањем ученика, школа постиже
                    изузетне резултате на такмичењима као то су: Фестивал музичких школа Србије,
                    Акордеон-арт, Звездане стазе, Такмичење клавирских дуета, Мали виртуоз, Дани
                    хармонике-Смедерево, Пијанистичко такмичење у Ужицу, Музика у центру, Мех-фест,
                    Међународни фестивал-Уб и др.
                  </p>
                  <p>
                    Свршени ученици нису заборавили школу и на адекватан начин помажу раду школе кроз
                    донаторства и спонзорства, као и својим концертима.
                  </p>
                  <p>
                    Школа са издвојеним одељењима има 235 ученика који изучавају: клавир, хармонику и
                    флауту.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Car dContent className="p-0">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">235</h3>
                  <p className="text-gray-600">Ученика у све три општине</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
                  <p className="text-gray-600">Општине које покривамо</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
                  <p className="text-gray-600">Година традиције</p>
                </CardContent>
              </Card>
            </div>

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
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-xl font-bold">Muzička škola Prijepolje</span>
            </div>
            <p className="text-gray-400 mb-6">
              Одгајамо нове генерације музичара кроз квалитетно образовање и креативно учење.
            </p>
            <Button 
              onClick={navigateHome}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Nazad na početnu stranicu
            </Button>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2024 Muzička škola Prijepolje. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
