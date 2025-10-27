import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          О нашей школе
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <Icon name="Users" size={24} />
              </div>
              <CardTitle>500+ учеников</CardTitle>
              <CardDescription>Растём и развиваемся вместе</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all animate-fade-in [animation-delay:100ms]">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                <Icon name="Award" size={24} />
              </div>
              <CardTitle>50+ преподавателей</CardTitle>
              <CardDescription>Лучшие специалисты своего дела</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all animate-fade-in [animation-delay:200ms]">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4">
                <Icon name="Trophy" size={24} />
              </div>
              <CardTitle>15 лет работы</CardTitle>
              <CardDescription>Опыт и традиции качества</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
