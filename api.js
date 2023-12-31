const departments = [
  { id: "a-1", name: "Фортепіанний відділ №1", photo: 'https://i.ibb.co/r2kmFgN/1-2022.jpg', about: "Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів." },
  { id: "a-8", name: "Фортепіанний відділ №2", photo:'https://i.ibb.co/tH3nzfG/2.jpg', about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},
  { id: "a-2", name: "Струнно-смичковий відділ", photo:'https://i.ibb.co/jrbbY7z/pexels-pixabay-210854.jpg', about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику." },
  { id: "a-3", name: "Відділ предмету за вибором", photo:'https://i.ibb.co/RNtNjTy/pexels-teddy-yang-2254140.jpg', about:'Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал.'},
  { id: "a-4", name: "Відділ духових та ударних інструментів ", photo:'https://i.ibb.co/XJKYNGg/pexels-josh-sorenson-995301.jpg', about:'Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів.' },
  { id: "a-5", name: "Відділ народних інструментів", photo:'https://i.ibb.co/3FLhwtw/pexels-pixabay-33597.jpg', about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини." },
  { id: "a-6", name: "Відділ концертмейстерства та вокалу", photo:'https://i.ibb.co/T1pCW3k/image.jpg', about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику." },
  { id: "a-7", name: "Теоретичний відділ", photo:'https://i.ibb.co/8YPYJQn/image.jpg', about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі." }
];

export const getDepartments = () => {
  return departments;
};

export const getDepartmentById = (departmentId) => {
  return departments.find(department => department.id === departmentId);
};

const bands = [
  {
    id: "q-1",
    name: "Оркестр народної музики 'Барвисті Візерунки'",
    photo: 'https://i.ibb.co/4Nw2QkK/orhestra3.jpg',
    about: 'Гордістю школи є оркестр народної музики «Барвисті візерунки» (керівник Галина Головацька-Гуль), створений в жовтні 2008 року. Репертуар оркестру складається з обробок пісень і танців народів світу. Колектив веде активну концертну діяльність, має численні нагороди багатьох міжнародних конкурсів та фестивалів як в Україні так і за кордоном – у Чехії, Угорщині, Болгарії, Італії та ін. Керівник оркестру - викладач Галина Головацька-Гуль, саме вона наполегливо відкриває в душах своїх вихованців чарівний світ музики та гармонії. Звичайно, велика роль належить обдарованим і талановитим викладачам струнно-смичкового, духового та відділу народних інструментів школи, з учнів яких і складається колектив.', 
  },
  {
    id: "q-2",
    name: "Фортепіанний дует 'Но-Та'",
    photo: 'https://i.ibb.co/Khng8mg/Nota.jpg',
    about: "Фортепіанний дует 'НоТа' у складі викладачів - Нонни Козлової і Тетяни Чайки (лауреати Міжнародних премій 'Дружба' та ім. С.Гулака-Артемовського), вже більше 40 років дарує свою яскраву, емоційну, неперевершену майстерність слухачам, популяризуючи як творчість автора відомого романсу 'Хризантеми' Миколи Харито, так і у власному перекладенні для фортепіанного ансамблю перлин української класики та народних пісень. Їх виступи завжди супроводжуються аваціями глядацької аудиторії. За час своєї творчої діяльності вони дали біля 700 концертів на найрізноманітніших сценах України та зарубіжжя. "
  },
  {
    id: "q-3",
    name: 'Дитячий хор "Струмочок"',
    photo: 'https://i.ibb.co/mztr6F7/IMG-20230120-160646-225.jpg',
    about: "Керівник: Євгенія Пучко, концертмейстер: Наталія Лук’янчук"
  },
  {
    id: "q-4",
    name: "Ансамбль скрипалів 'Унісон'",
    photo: 'https://i.ibb.co/FDxTGJX/image.jpg',
    about: "lorem ipsum dolor sit amet, consectetur"
  },
  {
    id: "q-5",
    name: "Ансамбль флейтистів 'Вітерець'",
    photo: 'https://i.ibb.co/5WKxV46/IMG-20230508-154004-124.jpg',
    about: "lorem ipsum dolor sit amet, consectetur"
  },
  {
    id: "q-6",
    name: "Вокальний дует",
    photo: './src/assets/img/pexels-dmitry-demidov-3783471.jpg',
    about: "lorem ipsum dolor sit amet, consectetur"
  },
  {
    id: "q-7",
    name: "фольклорний гурт 'Рахта'",
    photo: 'https://i.ibb.co/pRP3tMd/2.jpg',
    about: "lorem ipsum dolor sit amet, consectetur"
  },
  {
    id: "q-8",
    name: "Ансамблі гітаристів",
    photo: 'https://i.ibb.co/PNQPh2b/pic2.jpg',
    about: 'Активну концертну діяльність ведуть ансамблі гітаристів «Палітра», «Лілея», до складу яких входять викладачі Лілія Герасимчук, Тамара Теліна, Юлія Лисенко. Ансамблі майстерно та яскраво виступають на конкурсних сценах України, Білорусі, беруть участь у численних благодійних концертах.	Талановиті викладачі КДМШ №22 успішно поєднують педагогічну й артистичну діяльність та вписують свою сторінку в історію української музичної культури.'
  },
{
    id: "q-9",
    name: "Дитячий музичний театральний колектив 'Пташечки'",
    photo: 'https://i.ibb.co/pZFmyzf/6.jpg',
    about: 'У 2015 році в школі створено дитячий музичний театральний колектив "Пташечки" (керівник Триліська Наталія Костянтинівна, концертмейстер і постановник Кірш Наталія Євгеніївна). В творчому доробку колективу налічується 1 дитяча опера («З друзями біда – не біда»), 2 мюзикли («Пригоди трьох кошенят» і «День народження Принцеси») та кілька театралізованих музичних вистав (українська сюїта «А у нас на Україні» та постановка на пісню, написану Наталією Триліською у співавторстві з Наталією Кірш - «Україна моя»). Колектив «Пташечки» – неодноразовий лауреат Всеукраїнських та Міжнародних конкурсів.'
  },

];

export const getBands = () => {
  return bands;
};

export const getBandById = (bandId) => {
  return bands.find(band => band.id === bandId);
};