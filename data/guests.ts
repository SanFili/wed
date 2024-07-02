import { GuestsType } from "@/types/guests";

const agreeFriend = [
  {
    type: "text",
    name: "name",
    label: "Ваше имя",
    placeholder: "ФИО",
  },
  {
    type: "radio",
    name: "agree",
    label: "Сможете ли вы присутствовать",
    dependencies: ["transfer", "backTransfer"],
    radios: [
      { id: "yes", label: "Буду" },
      { id: "no", label: "Не смогу прийти" },
    ],
  },
];

const agreeFam = (checkboxes) => [
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
  formItems: [
    {
      type: "radio",
      name: "agree",
      label: "Сможете ли вы присутствовать",
      dependencies: ["transfer", "backTransfer"],
      radios: [
        { id: "yes", label: "Буду" },
        { id: "no", label: "Не смогу прийти" },
      ],
    },
    ,
    ...transfer,
  ],
};

export const guests: GuestsType = {
  friend: {
    title: "ДОРОГИЕ ДРУЗЬЯ!",
    text: "вас",
    formItems: [...agreeFriend, ...transfer],
  },
  plus: {
    title: "ДОРОГИЕ ДРУЗЬЯ!",
    text: "вас",
    formItems: [
      ...agreeFriend,
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
  // Наталья
  nt: {
    title: "Дорогая Наталья!",
    ...personal,
  },
  // Алексей
  al: {
    title: "Дорогой Алексей!",
    ...personal,
  },
  // Олег
  ol: {
    title: "Дорогой Олег!",
    ...personal,
  },
  // Ольга
  olg: {
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
};
