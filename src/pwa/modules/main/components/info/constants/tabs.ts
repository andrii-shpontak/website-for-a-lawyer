const ogd = require('../../../../../../assets/documents/Заява на виплату ОГД.docx');
const ogdFamily = require('../../../../../../assets/documents/Заява_на_виплату_ОГД_члена_сім’ї_загиблого.docx');
const transferReport = require('../../../../../../assets/documents/рапорт на переведення.docx');
const medReport = require('../../../../../../assets/documents/Рапорт на проходження ВЛК.docx');
const hospitalReport = require('../../../../../../assets/documents/рапорт_лікування безперервне.docx');
const partHospitalReport = require('../../../../../../assets/documents/рапорт_лікування перерване.docx');
const commandName = require('../../../../../../assets/documents/Рапорт_на_ім’я_командира_віиськовоі_частини_з_проханням_видати_направлення.docx');
const moreMoney = require('../../../../../../assets/documents/Рапорт_на_отримання_додатковоі_грошовоі_винагороди_v.docx');
const vacationReport = require('../../../../../../assets/documents/Рапорт_про_надання_відпустки_за_станом_здоров’я_до_30_днів_d.docx');
const woundInfoReport = require('../../../../../../assets/documents/Рапорт_про_отримання_довідки_про_обставини_поранення_d.docx');
const inactionComplaint = require('../../../../../../assets/documents/Скарга_на_бездіяльність_командира_віиськовоі_частини_d.docx');

export const tabs = [
  {
    title: 'Всі питання, пов’язані з ВЛК',
    subtitle:
      'Всі питання, пов’язані з ВЛК (військово-лікарською комісією) регулюються Положенням про військово-лікарську експертизу в Збройних Силах України, затверджене Наказом МОУ № 402.  Військово-лікарська експертиза визначає придатність за станом здоров’я до військової служби військовослужбовців, установлює причинний зв’язок  захворювань, травм (поранень, контузій, каліцтв) та визначає необхідність і умови застосування медико-соціальної реабілітації та допомоги військовослужбовцям. Хто має право скеровувати на ВЛК? Перш за все, це медична рота військової частини. Для звернення достатньо просто усного повідомлення про погіршення стану здоров’я та бувають випадки, коли працівники медроти не вбачають у цьому зверненні підстав для направлення на ВЛК (або не хотять визначати цей факт). Відповідно до норм Постанови (а саме: частини 6.2.), направлення на ВЛК, крім медроти може надавати:',
    steps: [
      'прямими начальниками від командира окремої частини, йому рівних та вище. Той випадок, коли працює рапорт. Рапорт подається на ім’я командира із зазначенням підстави для проведення ВЛК, а саме погіршення стану здоров’я та необхідність у перевірці на придатність до військової служби.',
      'органами управління та підрозділів Військової служби правопорядку Збройних Сил України. Так, славнозвісна ВСП має право направляти військових на ВЛК. Шляхом усного або письмового звернення від військовослужбовців.',
      'прокуратурою, а саме військовою прокуратурою. Варто зазначити, що у заявах до таких органів потрібно зазначати, що військовослужбовець неодноразово звертався до командування, медроти тощо із скаргами на стан здоров’я та не отримав належної відповіді.',
      'військовими лікувальними закладами за місцем лікування, військовими комендантами гарнізонів та військовими комісарами. Такі органи видають направлення у виняткових випадках, наприклад, коли військовослужбовець проходить лікування тоді заклад за місцем лікування має право на надати рекомендацію про скерування на ВЛК. Або, наприклад, коли військовослужбовець перебуває у відпустці, таке направлення дає РТЦК та СП.',
      'Необхідні документи:',
    ],
    extraSteps: [
      'направлення;',
      'медична книжка',
      'посвідчення особи (військовий квиток);',
      'фотокартка 4*3;',
      'службова характеристика;',
      'медична характеристика;',
      'на осіб, які направляються на огляд з приводу поранень, травм, контузій, служби, - оригінал довідки про обставини одержання травми (поранення, контузії, каліцтва). Огляд військовослужбовців обов’язковопроводиться хірургом, терапевтом, невропатологом, окулістом, оториноларингологом (військовослужбовців-жінок - гінекологом), а за медичними показаннями - і лікарями інших спеціальностей. Обов’язково виконуються загальні аналізи крові та сечі, ЕКГ-дослідження, флюорографічне дослідження органів грудної клітини. Потребу в додатковому обстеженні визначають лікарі за медичними показаннями.',
    ],
    document: ogd,
    docName: 'Заява на виплату ОГД.docx',
  },
  {
    title: 'Оскарження рішення ВЛК.',
    subtitle:
      'Розглядати, \n переглядати, скасовувати, затверджувати, не затверджувати, контролювати згідно з цим Положенням постанови будь-якої ВЛК Збройних Сил України, відповідно до пункту 2.3.4, має право ЦВЛК регіону або Головна ЦВЛК (м. Київ). Подавати на оскарження можна у випадках:',
    steps: [
      'Коли рішення повністю або у певній частині не відповідає стану здоров’я військовослужбовця, наприклад, відповідно до обстежень (аналізів, УЗД, МТР тощо) військовослужбовець має отримати резолюцію – обмежено придатний (непридатний), а в рішенні –придатний (наприклад, замість «б» - «в») Стосовно букв (по більшості статей):\nА – непридатний до військової служби.\nБ – обмежено-придатний або\nВ – обмежено-придатний або придатний\nГ – придатний',
      'Коли не враховані взагалі супутні захворювання та не виставлені резолюції',
      'Коли немає зазначеного переліку родів військ, де військовослужбовець може/не може нести службу',
      'Коли не має прив’язки до захисту Батьківщини/проходження служби тощо. Перелік обставин не є вичерпним\nКілька порад щодо такої заяви:',
    ],
    extraSteps: [
      'Як можна детальніше пояснити зміст самого непогодження із поясненням у якій частині не згодний військовослужбовець чи що саме не зазначено;',
      'Термін на оскарження складає 30 днів;',
      ' Обов’язково докласти копії усіх документів, які є та які є свідченням того що комісія ВЛК не врахувала всіх захворювання, симптоми тощо;',
      'Краще направляти і на електронну пошту, і через звичайну пошту;',
      'Зміст заяви може бути довільним, проте потрібно вказати, що оскарження заяви ВЛК здійснюється на підставі п.3.13 Положення №402, у разі незгоди з визначеним ВЛК діагнозом, особа має право пройти самостійно медичний огляд та разом з іншими документами та скаргою надати їх до ВЛК регіону або до ЦВЛК.',
    ],
    document: ogdFamily,
    docName: 'Заява_на_виплату_ОГД_члена_сім’ї_загиблого.docx',
  },
  {
    title: 'Виплата при звільненні.',
    subtitle:
      'При звільненні з військової служби військовослужбовець має право на отримання наступних виплат:',
    steps: [
      'грошового забезпечення. Військовослужбовцю має бути виплачена вся заборгованість по заробітній платі.',
      'грошової компенсації вартості за неотримане речове майно (на практиці мобілізованим не виплачується). Речове забезпечення військовослужбовців здійснюється за нормами і в терміни, що визначаються Наказом Міністерства Оборони України від 29.04.2016 р. № 232.Грошова компенсація виплачується військовослужбовцям з моменту виникнення права на отримання предметів речового майна відповідно до норм забезпечення у разі:\n▪ звільнення з військової служби;\n▪ загибелі (смерті) військовослужбовця;\n▪ переведення військовослужбовця до інших утворених відповідно до законів України військових формувань, Держспецзв’язку, правоохоронних органів спеціального призначення і державних органів спеціального призначення з правоохоронними функціями для подальшого проходження військової служби з виключенням із списків особового складу військової частини.\n▪ одноразової грошової допомоги мобілізованим;\n▪ Військовослужбовцям, які були призвані на військову службу за призовом під час мобілізації, на особливий період або на військову службу за призовом осіб із числа резервістів в особливий період та звільняються із служби, виплачується одноразова грошова допомога в розмірі 4 % місячного грошового забезпечення за кожний повний календарний місяць служби, але не менш як 25 % місячного грошового забезпечення.\n\nДопомога виплачується з розрахунку місячного грошового забезпечення (без урахування винагород), на яке має право військовослужбовець на день звільнення.',
      'грошової компенсації за невикористану щорічну та додаткові відпустки;\nВійськовослужбовцям, крім військовослужбовців строкової військової служби, які звільняються зі служби за віком, станом здоров’я, у зв’язку з прямим підпорядкуванням близькій особі та у зв’язку із скороченням штатів або проведенням організаційних заходів, тобто коли військовослужбовець звільняється за сімейними обставинами така виплата не передбачена.',
      'одноразову грошову допомогу;\nЯкщо військовослужбовець звільняється за станом здоров’я, йому виплачується одноразова грошова допомога в розмірі 50 % місячного грошового забезпечення за кожний повний календарний рік служби.Особам офіцерського складу, які проходять кадрову військову службу та звільняються зі служби за власним бажанням, іншим військовослужбовцям (крім військовослужбовців строкової військової служби), які звільняються зі служби через сімейні обставини або з інших поважних причин, та мають вислугу 10 календарних років і більше, виплачується одноразова грошова допомога в розмірі 25 % місячного грошового забезпечення за кожний повний календарний рік служби.',
      'грошову допомогу для оздоровлення;\nВійськовослужбовцям, звільненим з військової служби, які мали право на грошову допомогу для оздоровлення та не отримали її протягом року, виплата цієї допомоги здійснюється на підставі наказу командира військової частини про виключення військовослужбовця зі списків особового складу військової частини, в якому оголошується про її виплату.Розмір грошової допомоги для оздоровлення визначається виходячи з посадового окладу, окладу за військовим званням, надбавки за вислугу років і щомісячних додаткових видів грошового забезпечення (крім винагород) за займаною посадою, на які військовослужбовець має право на день підписання наказу про надання цієї допомоги.',
      'матеріальну допомогу для вирішення соціально-побутових питань\nЦей вид допомоги не є обов’язковою виплатою при звільненні. Але військовослужбовці мають знати про своє право отримати раз на рік таку допомогу. Тобто перед звільненням військовослужбовець може звернутись із відповідним рапортом про виплату допомоги. Виплата матеріальної допомоги здійснюється за рапортом військовослужбовця на підставі наказу командира, а командиру – наказу вищого командира за підпорядкованістю із зазначенням у ньому розміру допомоги. Постановою Кабінету Міністрів України від 30.08.2017 р. № 704 передбачене право керівників державних органів надавати один раз на рік військовослужбовцям (крім військовослужбовців строкової військової служби), особам рядового і начальницького складу матеріальну допомогу для вирішення соціально-побутових питань у розмірі, що не перевищує їх місячного грошового забезпечення, та допомогу для оздоровлення в розмірі місячного грошового забезпечення',
    ],
    document: transferReport,
    docName: 'Заява_на_виплату_ОГД_члена_сім’ї_загиблого.docx',
  },
  {
    title: 'Виплати при пораненні.',
    subtitle:
      'МСЕК – медико-соціальна експертна комісія, орган до якого військовослужбовець може звернутися у разі отримання травми (поранення, контузії, каліцтва) з метою встановлення відсотку втрати працездатності, групи інвалідності, що прямо впливає на розмір виплати. Далі детально, як взяти скерування на МСЕК:',
    description:
      '\n— паспорт або ID картка з витягом з Єдиного державного демографічного реєстру щодо реєстрації місця проживання;\n— військовий квиток (копія) або тимчасове посвідчення (для військовозобов’язаних, призовників);\n— направлення на МСЕК (форма ф. № 088/о);\n— медична документація, оригінали (виписки з амбулаторної карти ф. 025/о,виписки з історії хвороби стаціонарного хворого ф. 027/о, результати лабораторних, інструментальних, променевих обстежень, консультативні висновки профільних обласних спеціалістів тощо) та амбулаторна картка хворого;\n— довідка ВЛК, свідоцтво про хворобу (видається медичними установами, де проводилось лікування);\n— довідка про обставини травми (за наявності);\n— посвідчення УБД (за наявності, копія).\nСкерування на МСЕК військовослужбовець може взяти у медроті військової частини і відразу хочу попередити, коли працівники медроти говорять щось типу «після війни пройдеш», «зараз групи інвалідності не дають» тощо –це неправомірно та вони зобов’язані видати таке скерування, відповідно до Положення про медико-соціальну експертизу (https://zakon.rada.gov.ua/laws/show/1317-2009-%D0%BF#Text )\nПісля отримання такого направлення, військовослужбовець проходить огляд лікарів, направляє документи до профільного лікаря (до якого найбільше має скарг) та чекає рішення від МСЕК. Від можуть бути виплати згідно з прийнятим рішенням.\n\nЯкщо інвалідність військовослужбовця (крім строкової служби) настала внаслідок поранення (контузії, травми або каліцтва) або захворювання, яке він дістав під час виконання обов’язків військової служби (чи встановлення інвалідності особі після її звільнення з військової служби внаслідок зазначених причин), допомогу виплачують у розмірі:\n• 400-кратного прожиткового мінімуму, встановленого законом для працездатних осіб на 1 січня календарного року, в якому вперше встановлено інвалідність, — у разі встановлення інвалідності I групи (1 073 600 грн);\n• 300-кратного прожиткового мінімуму — II групи (805 200 грн);\n• 250-кратного прожиткового мінімуму — III групи (671 000 грн).\nВиплата військовослужбовцю (крім строкової служби), інвалідність якого настала в період проходження військової служби або внаслідок захворювання, або встановлення особі, звільненій з військової служби, інвалідності не пізніше ніж через три місяці після звільнення її з військової служби чи після закінчення тримісячного строку, але внаслідок захворювання або нещасного випадку, що мали місце в період проходження зазначеної служби, нараховується у розмірі:\n• 120-кратного прожиткового мінімуму — I групи (322 080 грн);\n• 90-кратного прожиткового мінімуму — II групи (241 560 грн);\n• 70-кратного прожиткового мінімуму — III групи (187 880 грн).\nЯкщо йдеться про військовослужбовця строкової служби, військовозобов’язаного або резервіста, якого призвано на навчальні (або перевірочні) та спеціальні збори чи для проходження служби у військовому резерві, то для цих категорій осіб, інвалідність яких настала внаслідок поранення (контузії, травми або каліцтва), заподіяного їм під час виконання обов’язків військової служби або служби у військовому резерві, або не пізніше ніж через три місяці після звільнення зі служби, закінчення зборів, проходження служби у військовому резерві, але внаслідок захворювання або нещасного випадку, що мали місце в період строкової військової служби, проходження таких зборів, служби у військовому резерві, грошова допомога виплачується у таких розмірах:\n• 322 080 грн — для І групи інвалідності;\n• 241 560 грн — для ІІ групи інвалідності;\n• 187 880 грн — для ІІІ групи інвалідності.\nЯкщо людина частково втратила працездатність без встановлення інвалідності, то розмір одноразової грошової допомоги залежить від ступеня втрати працездатності. Його встановлює медико-соціальна експертна комісія. Виплата визначається у відсотках від:\n− 70-кратного прожиткового мінімуму (187 880 грн):\nвійськовослужбовцю, який зазнав поранення (контузію, травму або каліцтво), захворювання під час виконання ним обов’язків військової служби, а також особі, звільненій з військової служби, яка частково втратила працездатність внаслідок зазначених причин, але не пізніше ніж через три місяці після звільнення її з військової служби;\n− 50-кратного прожиткового мінімуму (134 500 грн):\nвійськовослужбовцю строкової військової служби, а також особі, звільненій із строкової військової служби, яка частково втратила працездатність внаслідок зазначених причин, пов’язаних з проходженням військової служби, але не пізніше ніж через три місяці після звільнення її зі строкової військової служби;\nСторінка 39 із 44\n− 50-кратного прожиткового мінімуму (134 500 грн):\nвійськовозобов’язаному або резервісту, якого призвано на навчальні (або перевірочні) та спеціальні збори чи для проходження служби у військовому резерві, який зазнав поранення (контузію, травму або каліцтво), захворювання під час виконання обов’язків військової служби або служби у військовому резерві, що призвело до часткової втрати працездатності без встановлення інвалідності в період проходження зборів чи служби у військовому резерві або не пізніше ніж через три місяці після закінчення таких зборів чи виконання резервістом обов’язків служби у військовому резерві.\nВажливо! Виплата одноразової грошової допомоги взагалі не здійснюються, якщо травма, захворювання, інвалідність чи часткова втрата працездатності без встановлення інвалідності військовослужбовця, військовозобов’язаного чи резервіста є наслідком:\n— вчинення ним злочину або адміністративного правопорушення;\n— вчинення ним дій у стані алкогольного, наркотичного, токсичного сп’яніння;\n— навмисного спричинення собі тілесного ушкодження чи іншої шкоди своєму здоров’ю або самогубства (крім випадку доведення особи до самогубства, встановленого судом);\n— подання особою свідомо неправдивих відомостей для призначення і виплати одноразової грошової допомоги.\n\nГрошове забезпечення включає:\nщомісячні основні види грошового забезпечення;\nщомісячні додаткові види грошового забезпечення;\nодноразові додаткові види грошового забезпечення.\nПорядок нарахування та виплати грошового забезпечення викладено у Порядку виплати грошового забезпечення військовослужбовцям Збройних Сил України та деяким іншим особам, затвердженого Наказом МОУ №260 від 07.06.2018 р.\nЗагальні положення\n',
    extraSteps: [
      'Грошове забезпечення за останніми займаними посадами виплачується за період звільнення від виконання службових обов’язків у зв’язку з хворобою та перебуванням на лікуванні в лікарняних закладах та у відпустці для лікування у зв’язку з хворобою (відпустці за у зв’язку з хворобою), але не більше 4х місяців із дня вибуття з військової частини (крім випадків, передбачених чинним законодавством України, більш тривалих строків перебування на лікуванні).',
      'Грошове забезпечення після 4х місяців безперервного перебування на лікуванні в лікарняних закладах виплачується на підставі ВЛК, рішення командира військової частини про продовження перебування в лікарняних закладах та відповідно до вимог чинного законодавства.',
      'Відпустка у зв’язку з вагітністю та пологами оплачується згідно з вимогами чинного законодавства України. Військовослужбовцям-жінкам, які відповідно до медичного висновку до вибуття їх у відпустку у зв’язку з вагітністю та пологами призначені на рівнозначні (у тому числі з меншим обсягом роботи) і нижчі посади за станом здоров’я, зберігається виплата грошового забезпечення за попередньою посадою, але не більш як до дня прибуття з відпустки у зв’язку з вагітністю та пологами.',
      'Військовослужбовцям, які самовільно залишили військові частини або місця служби, виплата грошового забезпечення призупиняється з дня самовільного залишення військової частини або місця служби та поновлюється з дня повернення.',
      'Призупинення та поновлення виплати грошового забезпечення оголошується наказом командира військової частини.',
      'Виплата за підписання першого контакту здійснюється у таких розмірах:\nособам рядового складу - вісім розмірів прожиткового мінімуму для працездатних осіб, установленого законом на 01 січня календарного року;\nособам сержантського і старшинського складу - дев’ять розмірів прожиткового мінімуму для працездатних осіб, установленого законом на 01 січня календарного року;\nособам офіцерського складу - десять розмірів прожиткового мінімуму для працездатних осіб, установленого законом на 01 січня календарного року.',
      'Військовослужбовцям, які допущені в установленому порядку до тимчасового виконання обов’язків за вакантною посадою, безперервно виконували обов’язки за цією посадою 30 календарних днів і більше, грошове забезпечення виплачується з урахуванням посадового окладу, встановленого для цієї вакантної посади, строком не більше ніж шість місяців.',
    ],
    document: medReport,
    docName: 'Рапорт на проходження ВЛК.docx',
  },
  {
    title: 'Грошове забезпечення військовослужбовцям',
    description:
      'Грошове забезпечення військовослужбовцям (крім військовослужбовців строкової військової служби), зарахованим у розпорядження відповідних командирів або звільненим від посад, виплачується в розмірі грошового забезпечення, яке військовослужбовці отримували за займаними посадами до зарахування в розпорядження, але не більше ніж два місяці.\nГрошове забезпечення військовослужбовцям після перебування у розпорядженні понад два місяці виплачується в розмірі окладу за військовим званням та надбавки за вислугу років, за винятком випадків продовження строків виплати за рішенням Міністра оборони України. На період дії воєнного стану військовослужбовцям додаткова винагорода згідно з постановою Кабінету Міністрів України від 28 лютого 2022 року № 168 «Питання деяких виплат військовослужбовцям, особам рядового і начальницького складу, поліцейським та їх сім’ям під час дії воєнного стану».\nЩодо додаткової грошової винаороди скажу коротко, бо питання це змінюється а ж занадто часто.\nСтаном на сьогодні виплата додаткової грошової винагороди здійсюється\nСторінка 42 із 44\nтаким чином, бойові виплати у 100 тисяч гривень виплачуватимуть усім, хто виконує завдання на передовій, сім’ям полонених та зниклих безвісти, а 30 тисяч отримуватимуть ті, хто працює на фронті, але не бере участі в боях. Відповідно до наказів про виплату додаткової винагороди, збільшеної до 100000 гривень, у тому числі тих, які:\nу зв’язку з пораненням (контузією, травмою, каліцтвом), пов’язаним із захистом Батьківщини - із участю у бойових діях або забезпеченні здійснення заходів з національної безпеки і оборони, відсічі і стримування збройної агресії, перебуваючи безпосередньо в районах їх ведення (здійснення), зокрема на тимчасово окупованій Російською Федерацією території України, на території між позиціями сил оборони та позиціями військ держави-агресора, у період здійснення зазначених заходів, перебувають на стаціонарному лікуванні в закладах охорони здоров’я (у тому числі закордонних), включаючи час переміщення з одного лікарняного закладу охорони здоров’я до іншого, або перебувають у відпустці для лікування після тяжкого поранення за висновком (постановою) військово-лікарської (лікарсько-експертної, медичної) комісії.\nТобто військовослужбовець, який отримав поранення, має отримувати додаткову винагороду у розмірі 100 тис грн під час відпустки, якщо ступінь його поранення не нижче тяжкого.\nНа період лікування виплата становить - 100 тис грн',
    document: hospitalReport,
    docName: 'рапорт_лікування безперервне.docx',
  },
];
