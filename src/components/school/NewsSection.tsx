import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      title: "День космонавтики",
      date: "12 апреля 2024",
      description: "Празднуем День космонавтики с интерактивными занятиями и встречей с космонавтом"
    },
    {
      title: "Олимпиада по математике",
      date: "15 марта 2024",
      description: "Наши ученики заняли призовые места на региональной олимпиаде"
    },
    {
      title: "Открытие лаборатории",
      date: "1 марта 2024",
      description: "Новая STEM-лаборатория оснащена современным оборудованием"
    }
  ];

  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Новости и события
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:transform hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" size={16} />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
