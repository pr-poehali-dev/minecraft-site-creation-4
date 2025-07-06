import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-dark to-minecraft-stone">
      {/* Header */}
      <header className="border-b border-minecraft-grass bg-minecraft-dark/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/562fbb06-4b34-4f68-84c6-bd3b2cbef0e2.jpg"
                alt="Minecraft Hub"
                className="w-8 h-8 pixelated minecraft-shadow"
              />
              <h1 className="text-2xl font-bold text-white">MINECRAFT HUB</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#news"
                className="text-minecraft-diamond hover:text-white transition-colors"
              >
                Новости
              </a>
              <a
                href="#mods"
                className="text-minecraft-diamond hover:text-white transition-colors"
              >
                Моды
              </a>
              <a
                href="#maps"
                className="text-minecraft-diamond hover:text-white transition-colors"
              >
                Карты
              </a>
              <a
                href="#learning"
                className="text-minecraft-diamond hover:text-white transition-colors"
              >
                Обучение
              </a>
              <a
                href="#community"
                className="text-minecraft-diamond hover:text-white transition-colors"
              >
                Сообщество
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-6 minecraft-shadow">
            Добро пожаловать в мир{" "}
            <span className="text-minecraft-emerald">Minecraft</span>
          </h2>
          <p className="text-xl text-minecraft-diamond mb-8 max-w-2xl mx-auto">
            Откройте для себя удивительный мир блоков, творчества и приключений.
            Изучайте, строите, исследуйте вместе с нашим сообществом!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-minecraft-emerald hover:bg-minecraft-emerald/80 text-white minecraft-shadow"
            >
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-minecraft-diamond text-minecraft-diamond hover:bg-minecraft-diamond/10"
            >
              <Icon name="Download" className="mr-2" />
              Скачать игру
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News Card */}
            <Card className="minecraft-shadow border-minecraft-grass bg-minecraft-dark/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-minecraft-emerald">
                    Новости
                  </CardTitle>
                  <Icon name="Newspaper" className="text-minecraft-diamond" />
                </div>
                <CardDescription className="text-minecraft-diamond">
                  Последние обновления и события
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-2 border-minecraft-redstone pl-3">
                    <p className="text-white font-semibold">Обновление 1.21</p>
                    <p className="text-sm text-minecraft-diamond">
                      Новые блоки и мобы
                    </p>
                  </div>
                  <div className="border-l-2 border-minecraft-emerald pl-3">
                    <p className="text-white font-semibold">Летний ивент</p>
                    <p className="text-sm text-minecraft-diamond">
                      Специальные награды
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mods Card */}
            <Card className="minecraft-shadow border-minecraft-grass bg-minecraft-dark/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-minecraft-emerald">Моды</CardTitle>
                  <Icon name="Wrench" className="text-minecraft-diamond" />
                </div>
                <CardDescription className="text-minecraft-diamond">
                  Лучшие модификации для игры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">JEI</span>
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-emerald/20 text-minecraft-emerald"
                    >
                      Популярный
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Optifine</span>
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-redstone/20 text-minecraft-redstone"
                    >
                      Графика
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Biomes O' Plenty</span>
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-stone/20 text-minecraft-diamond"
                    >
                      Новое
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maps Card */}
            <Card className="minecraft-shadow border-minecraft-grass bg-minecraft-dark/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-minecraft-emerald">
                    Карты
                  </CardTitle>
                  <Icon name="Map" className="text-minecraft-diamond" />
                </div>
                <CardDescription className="text-minecraft-diamond">
                  Удивительные миры для исследования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="relative">
                    <img
                      src="/img/0a72f8dd-ad8a-4de4-8b38-5f3d765acac2.jpg"
                      alt="Minecraft Map"
                      className="w-full h-20 object-cover rounded pixelated"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-minecraft-dark/80 to-transparent rounded"></div>
                    <p className="absolute bottom-2 left-2 text-white font-semibold">
                      Skyblock Paradise
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Card */}
            <Card className="minecraft-shadow border-minecraft-grass bg-minecraft-dark/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-minecraft-emerald">
                    Обучение
                  </CardTitle>
                  <Icon
                    name="GraduationCap"
                    className="text-minecraft-diamond"
                  />
                </div>
                <CardDescription className="text-minecraft-diamond">
                  Изучайте механики игры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-white">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 mr-2 text-minecraft-emerald"
                    />
                    Основы крафта
                  </div>
                  <div className="flex items-center text-white">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 mr-2 text-minecraft-emerald"
                    />
                    Строительство
                  </div>
                  <div className="flex items-center text-white">
                    <Icon
                      name="CheckCircle"
                      className="w-4 h-4 mr-2 text-minecraft-emerald"
                    />
                    Редстоун механики
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-16 px-4 bg-minecraft-dark/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Галерея сообщества
            </h3>
            <p className="text-minecraft-diamond max-w-2xl mx-auto">
              Посмотрите на удивительные постройки, созданные нашими игроками
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg minecraft-shadow">
              <img
                src="/img/eab78a42-a4cc-43c5-8882-4f87b4669c28.jpg"
                alt="Epic Castle Build"
                className="w-full h-64 object-cover pixelated hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-minecraft-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold">Эпический замок</h4>
                <p className="text-minecraft-diamond">от игрока CraftMaster</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg minecraft-shadow">
              <div className="w-full h-64 bg-gradient-to-br from-minecraft-stone to-minecraft-grass rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="Camera"
                    className="w-16 h-16 text-minecraft-diamond mb-4"
                  />
                  <p className="text-white font-semibold">Современный город</p>
                  <p className="text-minecraft-diamond">
                    от игрока UrbanBuilder
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg minecraft-shadow">
              <div className="w-full h-64 bg-gradient-to-br from-minecraft-redstone to-minecraft-emerald rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Zap" className="w-16 h-16 text-white mb-4" />
                  <p className="text-white font-semibold">Редстоун машина</p>
                  <p className="text-minecraft-diamond">
                    от игрока RedstoneGuru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-minecraft-dark border-t border-minecraft-grass">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-minecraft-emerald font-bold mb-4">
                Minecraft Hub
              </h4>
              <p className="text-minecraft-diamond">
                Ваш источник всего, что связано с Minecraft
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Скачать игру
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Системные требования
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Сообщество</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Разработчики</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Документация
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-minecraft-diamond hover:text-white"
                  >
                    Плагины
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-minecraft-grass mt-8 pt-8 text-center">
            <p className="text-minecraft-diamond">
              © 2024 Minecraft Hub. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
