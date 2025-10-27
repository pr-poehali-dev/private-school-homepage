import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Школа будущего
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Запускаем детей к звёздам знаний. Современное образование с космическим подходом.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Icon name="Rocket" className="mr-2" size={20} />
              Записаться на экскурсию
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary hover:bg-primary/10">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-float">
          <img 
            src="https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/04767f91-342f-4610-83af-3326d4a065d0.jpg" 
            alt="Космическая школа" 
            className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
