import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("parents");

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
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
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

      <section id="portals" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Порталы для участников
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card/50">
              <TabsTrigger value="parents" className="data-[state=active]:bg-primary">
                <Icon name="Home" className="mr-2" size={18} />
                Родителям
              </TabsTrigger>
              <TabsTrigger value="students" className="data-[state=active]:bg-secondary">
                <Icon name="Backpack" className="mr-2" size={18} />
                Ученикам
              </TabsTrigger>
              <TabsTrigger value="teachers" className="data-[state=active]:bg-accent">
                <Icon name="BookOpen" className="mr-2" size={18} />
                Учителям
              </TabsTrigger>
            </TabsList>
            <TabsContent value="parents" className="mt-6">
              <Card className="bg-card border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Для родителей</CardTitle>
                  <CardDescription>Всё необходимое для контроля за обучением</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Электронный дневник</h4>
                      <p className="text-sm text-muted-foreground">Следите за успеваемостью в режиме реального времени</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MessageCircle" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Связь с учителями</h4>
                      <p className="text-sm text-muted-foreground">Быстрая коммуникация с преподавателями</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CreditCard" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Оплата и счета</h4>
                      <p className="text-sm text-muted-foreground">Управление финансами и оплата услуг</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4">
                    Войти в родительский портал
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="students" className="mt-6">
              <Card className="bg-card border-secondary/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Для учеников</CardTitle>
                  <CardDescription>Твоё личное космическое пространство</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-secondary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Домашние задания</h4>
                      <p className="text-sm text-muted-foreground">Все задания в одном месте с удобной сдачей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-secondary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Достижения и рейтинги</h4>
                      <p className="text-sm text-muted-foreground">Следи за своими успехами и достижениями</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Video" className="text-secondary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Онлайн-уроки</h4>
                      <p className="text-sm text-muted-foreground">Участвуй в видеоконференциях и вебинарах</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 mt-4">
                    Войти в ученический портал
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teachers" className="mt-6">
              <Card className="bg-card border-accent/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Для учителей</CardTitle>
                  <CardDescription>Инструменты для эффективного преподавания</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Журнал успеваемости</h4>
                      <p className="text-sm text-muted-foreground">Электронный журнал с аналитикой</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Upload" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Материалы и задания</h4>
                      <p className="text-sm text-muted-foreground">Загрузка и управление учебными материалами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Управление классом</h4>
                      <p className="text-sm text-muted-foreground">Инструменты для работы с учениками</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 mt-4">
                    Войти в учительский портал
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

      <section id="gallery" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Наша школа в кадре
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/7adeb549-032f-4836-835c-fb7c7c2c61d4.jpg" 
                alt="Занятия" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold">Современные классы</h3>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://cdn.poehali.dev/projects/78d3b0db-6591-43ed-8fc2-a4c2441c271f/files/04767f91-342f-4610-83af-3326d4a065d0.jpg" 
                alt="Лаборатория" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold">STEM-лаборатория</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>
          <Card className="bg-card border-primary/30">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Космонавтов, д. 42</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@cosmic-school.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00<br/>Сб: 9:00 - 15:00</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Запишитесь на экскурсию</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" className="text-primary" size={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Космическая Школа
              </span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-secondary transition-colors">Правила</a>
              <a href="#" className="hover:text-accent transition-colors">Лицензия</a>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-secondary/30 hover:border-secondary hover:bg-secondary/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-accent/30 hover:border-accent hover:bg-accent/10">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground text-sm">
            © 2024 Космическая Школа. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
