# TableCRM Mobile Order

Мобильное web-приложение для оформления заказов и продаж через API TableCRM.

Тестовое задание на позицию **React / Next.js разработчика** с акцентом на:

- Mobile-first UX
- Production-like архитектуру
- Производительность и масштабируемость
- Чистую frontend-архитектуру

---

## 🚀 Стек

### Core
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Zustand**
- **Axios**

### UI
- **shadcn/ui**
- **TailwindCSS**
- **Lucide Icons**
- **Sonner**

### Architecture
- **FSD Light** (Feature-Sliced Design)
- Reusable widgets & components
- API proxy routes
- Centralized business state

---

## 📱 Возможности

- **Авторизация по токену кассы**
  - Подключение к кассе
  - Preload справочников
  - Loading / Success / Error состояния

- **Поиск клиента**
  - Поиск по телефону
  - Debounce запросов
  - Мобильно-оптимизированный dropdown

- **Выбор параметров продажи**
  - Организация
  - Склад
  - Счёт
  - Тип цен

- **Работа с товарами**
  - Виртуализированный список
  - Быстрое добавление в корзину
  - Изменение количества и цены
  - Удаление товаров

- **Корзина**
  - Динамический расчёт стоимости
  - Редактирование позиций
  - Sticky summary

- **Создание продажи**
  - Формирование и отправка заказа
  - Создание + проведение продажи

---

## 🧠 Архитектура

Проект построен по принципам **FSD Light** (Feature-Sliced Design):
src/
├── app/
├── entities/           # Бизнес-сущности (Product, Contragent и т.д.)
├── features/           # Пользовательские сценарии
├── widgets/            # Крупные UI-блоки
├── shared/             # Переиспользуемые ресурсы
text### Основные слои

- **entities** — Product, Organization, Warehouse, Contragent и др.
- **features** — authByToken, contragentSearch, createOrder, organizationSelect и т.д.
- **widgets** — OrderForm, ProductsWidget, CartWidget, StickySummaryWidget
- **shared** — ui, api, hooks, utils

---

## ⚡ Оптимизации производительности

- Debounced поиск
- Виртуализация списка товаров
- Memoized селекторы
- Параллельная предзагрузка данных
- Оптимизированные подписки Zustand
- API Proxy через Next.js Route Handlers

---

## 📦 Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone <repo-url>

# 2. Установить зависимости
npm install

# 3. Запустить разработку
npm run dev
Открыть: http://localhost:3000
Сборка
Bashnpm run build

🌐 Совместимость с хостингом

Vercel
Netlify
Docker


Разработано с акцентом на мобильный UX, чистую архитектуру и production-ready подход.