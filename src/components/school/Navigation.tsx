import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Космическая Школа
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О школе</a>
            <a href="#programs" className="hover:text-secondary transition-colors">Программы</a>
            <a href="#teachers" className="hover:text-accent transition-colors">Преподаватели</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Как поступить
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
