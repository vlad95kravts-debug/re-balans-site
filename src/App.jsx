import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BriefcaseBusiness, Landmark, TrendingUp, Search } from "lucide-react";

export default function App() {
  const cases = [
    {
      n: "01",
      group: "Частный капитал",
      title: "Когда капитал уже требует системы",
      text: "Когда сумма уже вышла за пределы базовых накоплений, даже несколько дополнительных процентных пунктов в чистой доходности начинают превращаться в заметные деньги в год. Здесь важна не погоня за идеей, а спокойная конструкция: ликвидность, доход, рост и резерв под новые возможности.",
      tag: "от 2 млн ₽ и выше",
    },
    {
      n: "02",
      group: "Частный капитал",
      title: "Когда вклад уже не стратегия",
      text: "Особенно в период снижения ставок и непредсказуемой инфляции. Деньги нельзя держать только по привычке. В таких ситуациях мы смотрим шире: денежный рынок, облигации, фондовый блок и вся логика размещения капитала в целом.",
      tag: "ликвидность, ставки, гибкость",
    },
    {
      n: "03",
      group: "Частный капитал",
      title: "Облигации и доходность в цикле ставки",
      text: "Иногда качественные облигационные решения дают доходность, которая уже сопоставима с рентабельностью многих реальных бизнесов. Вопрос не в том, чтобы угадать рынок, а в том, чтобы собрать понятную конструкцию с прогнозируемым денежным потоком.",
      tag: "доходность, денежный поток",
    },
    {
      n: "04",
      group: "Частный капитал",
      title: "Налоговая модель как часть конструкции капитала",
      text: "Одинаковая доходность до налога не означает одинаковый результат на руках. Выбор инструмента, режима налогообложения, кода дохода и возможности реинвестирования часто влияет на итог сильнее, чем кажется в начале.",
      tag: "чистая доходность после налогов",
    },
    {
      n: "05",
      group: "Предпринимательские решения",
      title: "Сделки, в которые лучше не входить",
      text: "В период активной продажи бизнесов и красивых инвестиционных историй особенно важен холодный разбор. Реальный cash flow, справедливая стоимость, срок окупаемости, налоговые риски и скрытые проблемы часто выглядят совсем не так, как в презентации продавца.",
      tag: "оценка бизнеса, цена ошибки",
    },
    {
      n: "06",
      group: "Предпринимательские решения",
      title: "От франшизы к собственному бренду",
      text: "Не каждая франшиза усиливает прибыль. Иногда она просто забирает деньги через роялти, ограничения и слабую экономику. В таких кейсах важно спокойно посчитать, где бренд реально помогает, а где выгоднее строить своё.",
      tag: "маржа, свобода, окупаемость",
    },
    {
      n: "07",
      group: "Предпринимательские решения",
      title: "Диагностика бизнеса и утечек",
      text: "Огромное количество денег теряется не в драматичных провалах, а в повседневной конструкции бизнеса: дорогой вывод средств, лишние банковские комиссии, ненужные услуги, ручные процессы, слабый контроль и плохая автоматизация. Это десятки тысяч в месяц и сотни тысяч в год.",
      tag: "расходы, процессы, контроль",
    },
    {
      n: "08",
      group: "Предпринимательские решения",
      title: "Где следующий рубль работает сильнее",
      text: "Одна из самых важных предпринимательских задач — понять, куда направить следующий капитал: в бизнес, в рынок, в ликвидность или в новый проект. Не всё, что даёт красивую доходность на бумаге, сильнее того, что уже есть у вас в руках.",
      tag: "капитал в бизнесе или вне бизнеса",
    },
  ];

  const services = [
    {
      icon: Landmark,
      title: "Архитектура частного капитала",
      text: "Когда капитал собран по кускам, выстраиваю систему: ликвидность, защита, доход, рост и резерв под новые возможности.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Финансовая диагностика бизнеса",
      text: "Анализ прибыли, cash flow, рентабельности направлений, слабых мест, утечек и управленческих искажений.",
    },
    {
      icon: Search,
      title: "Проверка сделки до входа",
      text: "Франшиза, покупка бизнеса, стартап, private deal, новый проект, разбираю экономику, риск, налоговую модель и цену ошибки до входа в решение.",
    },
    {
      icon: TrendingUp,
      title: "Налоговая модель и чистая доходность",
      text: "Доходность, сценарии по ставке, ИИС, ПДС, денежный рынок и общая конструкция размещения капитала без хаоса.",
    },
  ];

  const principles = [
    "Независимость. Я не продаю чужие продукты и не встроен в банковскую витрину.",
    "Язык цифр. Смотрим cash flow, доходность, риск, налоговую модель, налоговые риски, сценарии и цену ошибки.",
    "Комплексный взгляд. Бизнес, личный капитал и новые проекты рассматриваются как единая система.",
    "Ограниченное число клиентов. Меньше потока, больше глубины и качества мышления по каждой задаче.",
  ];

  const process = [
    {
      step: "01",
      title: "Первичный разговор",
      text: "Фиксируем задачу, ограничения, горизонт, контекст и то решение, которое реально стоит на столе.",
    },
    {
      step: "02",
      title: "Глубокий анализ",
      text: "Разбираю активы, денежные потоки, сценарии, налоговую конструкцию, альтернативы размещения и слабые места.",
    },
    {
      step: "03",
      title: "Стратегия",
      text: "Вы получаете не общие рассуждения, а понятную логику: что держать, что менять, куда не идти и почему.",
    },
    {
      step: "04",
      title: "Сопровождение",
      text: "Дальше, либо точечная работа по крупным решениям, либо регулярный стратегический контакт.",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(180,120,58,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_22%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-neutral-400">Владислав Кравцов</div>
            <div className="mt-1 text-sm text-neutral-500">Ребаланс · независимая финансовая стратегия</div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm text-neutral-400 transition hover:text-white">Подход</a>
            <a href="#cases" className="text-sm text-neutral-400 transition hover:text-white">Кейсы</a>
            <a href="#services" className="text-sm text-neutral-400 transition hover:text-white">Формат</a>
            <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-neutral-950">
              Обсудить задачу
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/8 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-amber-200/90">
                <ShieldCheck className="h-4 w-4" />
                Не продавать, а конфиденциально выстраивать систему решений
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.98] text-white md:text-7xl">
                Помогаю принимать
                <span className="block text-neutral-400">сильные решения о капитале</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl md:leading-9">
                Работаю с предпринимателями и инвесторами, которым нужен не список инструментов, а ясная логика распределения капитала: что оставить в бизнесе, что держать в ликвидности, что отправить в рынок, а куда лучше вообще не входить.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-500 md:text-lg">
                Не продаю продукты, не подменяю стратегию набором идей. Смотрю на конструкцию капитала через доходность, риск, cash flow, налоговую модель, налоговые риски, сценарии и цену ошибки.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90">
                  Обсудить ситуацию
                </a>
                <a href="#cases" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                  Посмотреть кейсы
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-neutral-900 p-6">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Формат работы</div>
                  <div className="mt-3 text-3xl font-semibold text-white">3–7 клиентов</div>
                  <div className="mt-2 text-sm leading-6 text-neutral-400">одновременно, чтобы работать внимательно</div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-neutral-900 p-6">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Специализация</div>
                  <div className="mt-3 text-3xl font-semibold text-white">2 направления</div>
                  <div className="mt-2 text-sm leading-6 text-neutral-400">частный капитал и предпринимательские решения</div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-neutral-900 p-6">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Образование</div>
                  <div className="mt-3 text-3xl font-semibold text-white">3 профильных образования</div>
                  <div className="mt-2 text-sm leading-6 text-neutral-400">Бизнес, управление и финансы</div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-neutral-900 p-6">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Независимость</div>
                  <div className="mt-3 text-3xl font-semibold text-white">0 конфликта интересов</div>
                  <div className="mt-2 text-sm leading-6 text-neutral-400">без банковской витрины и навязанных инструментов</div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Направления работы</div>
                <div className="mt-6 grid gap-6">
                  <div className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-200">₽</div>
                    <div>
                      <div className="text-2xl leading-snug text-white md:text-[28px]">Частный капитал</div>
                      <div className="mt-2 text-sm leading-7 text-neutral-300">Когда деньги уже требуют системы, а не случайных решений</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-200">▣</div>
                    <div>
                      <div className="text-[26px] leading-snug text-white whitespace-nowrap">Предпринимательские решения</div>
                      <div className="mt-2 text-sm leading-7 text-neutral-300">Когда важно понять, где бизнес реально зарабатывает и где теряет деньги</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-200">⌕</div>
                    <div>
                      <div className="text-2xl leading-snug text-white md:text-[28px]">Новые сделки</div>
                      <div className="mt-2 text-sm leading-7 text-neutral-300">Когда нужно оценить покупку бизнеса, франшизу или инвестиционную идею до входа</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <motion.div {...fadeUp}>
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Подход</div>
              <h2 className="mt-5 text-3xl font-medium leading-tight text-white md:text-5xl">
                Не банк
                <br />
                Не брокер
                <br />
                Независимый стратегический взгляд на капитал
              </h2>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="grid gap-4">
              {principles.map((item) => (
                <div key={item} className="rounded-[28px] border border-white/10 bg-neutral-900/80 p-6 text-base leading-8 text-neutral-300">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="cases" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <motion.div {...fadeUp} className="flex flex-col gap-5 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Кейсы</div>
                <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">Некоторые ситуации из практики</h2>
                <div className="mt-4 text-base leading-8 text-neutral-500">Я разделяю частный капитал и предпринимательские решения, потому что логика задач, деньги и цена ошибки там разные.</div>
              </div>
              <p className="max-w-2xl text-base leading-8 text-neutral-500">
                Без имён и лишнего шума. Только суть задачи, спокойный разбор и тип решений, с которыми ко мне приходят.
              </p>
            </motion.div>

            <div className="mt-12">
              <motion.div {...fadeUp} className="mb-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-amber-200/80">Частный капитал</div>
                <div className="mt-3 max-w-3xl text-base leading-8 text-neutral-400">Когда нужно не просто разместить деньги, а собрать конструкцию капитала: ликвидность, доходность, налоговая модель, налоговые риски, сценарии и горизонт.</div>
              </motion.div>

              <div className="grid gap-5">
                {cases.filter((item) => item.group === "Частный капитал").map((item, index) => (
                  <motion.div
                    key={item.n}
                    {...fadeUp}
                    transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.04 }}
                    className="group grid gap-6 rounded-[32px] border border-white/10 bg-neutral-900/70 p-7 transition hover:border-amber-200/20 hover:bg-neutral-900 md:grid-cols-[180px_1fr]"
                  >
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-amber-200/90">{item.n}</div>
                      <div className="mt-4 text-sm uppercase tracking-[0.14em] text-neutral-500">{item.tag}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium leading-tight text-white">{item.title}</h3>
                      <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <motion.div {...fadeUp} className="mb-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-amber-200/80">Предпринимательские решения</div>
                <div className="mt-3 max-w-3xl text-base leading-8 text-neutral-400">Когда нужно понять, где бизнес реально зарабатывает, где теряет деньги и какое решение действительно стоит принять.</div>
              </motion.div>

              <div className="grid gap-5">
                {cases.filter((item) => item.group === "Предпринимательские решения").map((item, index) => (
                  <motion.div
                    key={item.n}
                    {...fadeUp}
                    transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.04 }}
                    className="group grid gap-6 rounded-[32px] border border-white/10 bg-neutral-900/70 p-7 transition hover:border-amber-200/20 hover:bg-neutral-900 md:grid-cols-[180px_1fr]"
                  >
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-amber-200/90">{item.n}</div>
                      <div className="mt-4 text-sm uppercase tracking-[0.14em] text-neutral-500">{item.tag}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium leading-tight text-white">{item.title}</h3>
                      <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Формат работы</div>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">Что именно я делаю</h2>
              <div className="mt-4 text-base leading-8 text-neutral-500">Не массовое сопровождение и не поток консультаций, а точечная работа там, где цена решения уже ощутима.</div>
              <p className="mt-5 text-lg leading-8 text-neutral-400">
                Работаю как бутик-практика. Меньше клиентов, больше глубины. Без поточного сервиса, без поверхностных рекомендаций и без универсальных шаблонов.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    {...fadeUp}
                    transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.05 }}
                    className="rounded-[32px] border border-white/10 bg-neutral-900 p-7 shadow-xl shadow-black/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-500/10">
                      <Icon className="h-5 w-5 text-amber-200" />
                    </div>
                    <h3 className="mt-5 text-2xl font-medium text-white">{service.title}</h3>
                    <p className="mt-4 text-base leading-8 text-neutral-400">{service.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Процесс</div>
              <h2 className="mt-4 text-3xl font-medium text-white md:text-5xl">Как выглядит работа</h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  {...fadeUp}
                  transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.05 }}
                  className="rounded-[30px] border border-white/10 bg-neutral-900/70 p-7"
                >
                  <div className="text-4xl font-semibold text-neutral-700">{item.step}</div>
                  <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <motion.div {...fadeUp} className="rounded-[36px] border border-white/10 bg-neutral-900/80 p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Первый шаг</div>
              <h2 className="mt-4 text-3xl font-medium leading-tight text-white md:text-5xl">
                Начнём с вашей ситуации,
                <span className="block text-neutral-400">а не с готового шаблона.</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-400">
                Первый разговор нужен, чтобы быстро понять три вещи: где вы находитесь сейчас, какое решение реально стоит перед вами и где у вас максимальная цена ошибки или упущенной возможности.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Что есть сейчас: бизнес, личный капитал, текущие инструменты, обязательства, ликвидность.",
                  "Какие решения впереди: дивиденды, рынок, недвижимость, новый проект, франшиза, покупка бизнеса, private deal.",
                  "Что на выходе: ясная карта следующих шагов и логика распределения капитала под вашу ситуацию.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-neutral-300 md:text-base">
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-7 text-neutral-500">
                Формат работы и стоимость обсуждаются после понимания задачи. Я не продаю универсальный пакет, сначала нужна реальная картина.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }} className="rounded-[36px] border border-amber-200/15 bg-gradient-to-br from-amber-500/10 via-neutral-950 to-neutral-900 p-8 shadow-2xl shadow-black/30 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.28em] text-amber-200/80">Контакт</div>
              <h3 className="mt-4 text-2xl font-medium text-white md:text-3xl">Кратко опишите задачу</h3>
              <p className="mt-4 text-base leading-8 text-neutral-400">
                Достаточно нескольких строк: что происходит, какое решение нужно принять и почему сейчас это важно.
              </p>

              <form action="https://formspree.io/f/mojyvdvw" method="POST" className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-neutral-500">Имя</label>
                  <input
                    name="name"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-200/35"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-neutral-500">Контакт</label>
                  <input
                    name="contact"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-200/35"
                    placeholder="Telegram, телефон или email"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-neutral-500">Суть задачи</label>
                  <textarea
                    name="message"
                    className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-200/35"
                    placeholder="Что сейчас стоит на повестке? Например: капитал лежит фрагментарно, нужно принять решение по бизнесу, портфелю или новой сделке."
                  />
                </div>

                <input type="hidden" name="_subject" value="Новая заявка с сайта re-balans.ru" />

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90">
                    Отправить запрос
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="https://t.me/rebalanc" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                    Telegram
                  </a>
                  <a href="tel:+79144330005" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                    Позвонить
                  </a>
                </div>
              </form>

              <p className="mt-6 text-xs leading-6 text-neutral-500">
                Одновременно беру ограниченное число клиентов. Это сознательная модель работы, а не маркетинговая фраза.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>Владислав Кравцов</div>
          <div>ОГРНИП 325750000033186</div>
        </div>
      </footer>
    </div>
  );
}
