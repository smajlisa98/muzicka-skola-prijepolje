
import React from 'react';
import { ArrowLeft, Music, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Koncert u gradskom pozorištu',
      category: 'Koncerti'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Učionica za klavir',
      category: 'Učionice'
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Violina sekcija tokom vežbe',
      category: 'Nastava'
    },
    {
      url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Zgrada muzičke škole',
      category: 'Škola'
    },
    {
      url: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Godišnji koncert učenika',
      category: 'Koncerti'
    },
    {
      url: '/lovable-uploads/c1deecac-499e-44dd-a005-5aa7e3601b35.png',
      title: 'Učenica za klavirom',
      category: 'Nastava'
    }
  ];

  const categories = ['Svi', 'Koncerti', 'Učionice', 'Nastava', 'Škola'];
  const [selectedCategory, setSelectedCategory] = React.useState('Svi');

  const filteredImages = selectedCategory === 'Svi' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

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
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Galerija</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pogled u naš svet muzike kroz fotografije koncerta, nastave i aktivnosti
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Izdvojene fotografije</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.slice(0, 4).map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-white font-bold text-xl">{image.title}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
              Odgajamo nove generacije muzičara kroz kvalitetno obrazovanje i kreativno učenje.
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

export default Gallery;
