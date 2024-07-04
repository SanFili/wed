import { GuestsType } from "@/types/guests";

const agree = (dependencies) => ({
  type: "radio",
  name: "agree",
  label: "Сможете ли вы присутствовать",
  dependencies,
  radios: [
    { id: "yes", label: "Буду" },
    { id: "no", label: "Не смогу прийти" },
  ],
});

const agreeFam = (checkboxes: { name: string; label: string }[]) => [
  {
    type: "radio",
    name: "agree",
    label: "Сможете ли вы присутствовать",
    radios: [
      { id: "yes", label: "Будем" },
      { id: "no", label: "Не сможем прийти" },
    ],
    dependencies: ["persons", "transfer", "backTransfer"],
  },
  {
    type: "checkbox",
    name: "persons",
    label: "Отметьте, кто из вашей семьи будет на нашем празднике",
    disabled: true,
    errorText: "Отметьте хотя бы одного человека",
    checkboxes,
  },
];

const transfer = [
  {
    type: "radio",
    name: "transfer",
    label: "Нужен ли вам трансфер от метро до места проведения мероприятия",
    disabled: true,
    radios: [
      { id: "yes", label: "Да" },
      { id: "no", label: "Нет" },
    ],
  },
  {
    type: "radio",
    name: "backTransfer",
    label: "Нужен ли вам обратный трансфер",
    disabled: true,
    radios: [
      { id: "yes", label: "Да" },
      { id: "no", label: "Нет" },
    ],
  },
];

const personal = {
  text: "Вас",
  formItems: [agree(["transfer", "backTransfer"]), ...transfer],
};

export const guests: GuestsType = {
  friend: {
    title: "ДОРОГИЕ ДРУЗЬЯ!",
    text: "вас",
    formItems: [
      {
        type: "text",
        name: "name",
        label: "Ваше имя",
        placeholder: "ФИО",
      },
      agree(["transfer", "backTransfer"]),
      ...transfer,
    ],
  },
  plus: {
    title: "ДОРОГИЕ ДРУЗЬЯ!",
    text: "вас",
    formItems: [
      {
        type: "text",
        name: "name",
        label: "Ваше имя",
        placeholder: "ФИО",
      },
      agree(["couple", "coupleName", "transfer", "backTransfer"]),
      {
        type: "radio",
        name: "couple",
        label: "Будет ли с вами +1",
        dependencies: ["coupleName"],
        disabled: true,
        radios: [
          { id: "yes", label: "Да" },
          { id: "no", label: "Нет" },
        ],
      },
      {
        type: "text",
        name: "coupleName",
        label: "Имя вашего спутника/спутницы",
        placeholder: "ФИО",
        disabled: true,
      },
      ...transfer,
    ],
  },
  // Наталья мама
  ntm: {
    title: "Дорогая Наталья!",
    ...personal,
  },
  // Алексей
  al: {
    title: "Дорогой Алексей!",
    ...personal,
  },
  // Наталья
  nt: {
    title: "Дорогая Наталья!",
    ...personal,
  },
  // Олег
  ol: {
    title: "Дорогой Олег!",
    ...personal,
  },
  // Ольга мама
  olgm: {
    title: "Дорогая Ольга!",
    ...personal,
  },
  // Сергей
  sr: {
    title: "Дорогой Сергей!",
    ...personal,
  },
  // Широких
  sh: {
    title: "Дорогие Юлия и Виталий!",
    text: "вашу семью",
    formItems: [
      ...agreeFam([
        { name: "Vitaly", label: "Виталий" },
        { name: "Ulia", label: "Юлия" },
        { name: "Kirill", label: "Кирилл" },
        { name: "Dmitry", label: "Дмитрий" },
        { name: "Mary", label: "Мария" },
      ]),
      ...transfer,
    ],
  },
  // Свердловы
  sv: {
    title: "Дорогие Светлана и Максим!",
    text: "вас",
    formItems: [
      ...agreeFam([
        { name: "Svetlana", label: "Светлана" },
        { name: "Maksim", label: "Максим" },
      ]),
      ...transfer,
    ],
  },
  // Лиля и Маша
  lil: {
    title: "Дорогие Лилия и Мария!",
    text: "вашу семью",
    formItems: [
      ...agreeFam([
        { name: "Liliya", label: "Лилия" },
        { name: "Mary", label: "Мария" },
      ]),
      ...transfer,
    ],
  },
  // Юровы
  yr: {
    title: "Дорогие Кирилл и Ольга!",
    text: "вашу семью",
    formItems: [
      ...agreeFam([
        { name: "Kirill", label: "Лилия" },
        { name: "Olga", label: "Мария" },
        { name: "Elizaveta", label: "Елизавета" },
        { name: "Maksim", label: "Максим" },
      ]),
      ...transfer,
    ],
  },
  // Леша и Андрей Парамоновы
  par: {
    title: "Дорогие Леша и Андрей!",
    text: "ваc",
    formItems: [
      ...agreeFam([
        { name: "Lesha", label: "Леша" },
        { name: "Andrey", label: "Андрей" },
      ]),
      ...transfer,
    ],
  },
  // Геннадий
  gen: {
    title: "Дорогой Геннадий!",
    ...personal,
  },
  // Никита
  ni: {
    title: "Дорогие Никита и Рита!",
    text: "ваc",
    formItems: [
      ...agreeFam([
        { name: "Nikita", label: "Никита" },
        { name: "Rita", label: "Рита" },
      ]),
      ...transfer,
    ],
  },
  // Ольга
  olg: {
    title: "Дорогая Ольга!",
    ...personal,
  },
  // Мария
  mar: {
    title: "Дорогая Мария!",
    ...personal,
  },
  // Леша и Андрей Парамоновы
  fil: {
    title: "Дорогие Надежда и Александр!",
    text: "ваc",
    formItems: [
      ...agreeFam([
        { name: "Nadezhda", label: "Надежда" },
        { name: "Alexander", label: "Александр" },
      ]),
      ...transfer,
    ],
  },
  // Якубовские
  yak: {
    title: "Дорогие Сергей и Ольга!",
    text: "вашу семью",
    formItems: [
      ...agreeFam([
        { name: "Olga", label: "Ольга" },
        { name: "Sergey", label: "Сергей" },
        { name: "Arina", label: "Арина" },
      ]),
      ...transfer,
    ],
  },
  // Карина
  kar: {
    title: "Дорогие Карина и Юрий!",
    text: "вас",
    formItems: [
      ...agreeFam([
        { name: "Karina", label: "Карина" },
        { name: "Yuriy", label: "Юрий" },
      ]),
      ...transfer,
    ],
  },
};
