import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PortalsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PortalsSection = ({ activeTab, setActiveTab }: PortalsSectionProps) => {
  return (
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
  );
};

export default PortalsSection;
