import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Начальная школа",
      description: "1-4 классы",
      features: ["Индивидуальный подход", "Билингвальное обучение", "STEM программы"],
      icon: "Rocket"
    },
    {
      title: "Средняя школа",
      description: "5-9 классы",
      features: ["Проектная деятельность", "Углубленная математика", "Робототехника"],
      icon: "Code"
    },
    {
      title: "Старшая школа",
      description: "10-11 классы",
      features: ["Профильное обучение", "Подготовка к ВУЗу", "Международные сертификаты"],
      icon: "GraduationCap"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Программы обучения
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Выбирайте траекторию развития для вашего ребёнка
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
                  <Icon name={program.icon as any} size={32} />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-lg">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
