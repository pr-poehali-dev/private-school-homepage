import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TeachersSection = () => {
  const teachers = [
    {
      name: "Анна Космова",
      role: "Математика и физика",
      experience: "15 лет опыта",
      image: "https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/63663624-09ac-41fe-8ae7-087331f032a3.jpg"
    },
    {
      name: "Дмитрий Звездин",
      role: "Информатика",
      experience: "10 лет опыта",
      image: "https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/63663624-09ac-41fe-8ae7-087331f032a3.jpg"
    },
    {
      name: "Елена Галактикова",
      role: "Английский язык",
      experience: "12 лет опыта",
      image: "https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/63663624-09ac-41fe-8ae7-087331f032a3.jpg"
    }
  ];

  return (
    <section id="teachers" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Наши преподаватели
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Команда профессионалов с космическим опытом
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-card border-secondary/20 hover:border-secondary/50 transition-all overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{teacher.name}</CardTitle>
                <CardDescription className="text-base">{teacher.role}</CardDescription>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">{teacher.experience}</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
