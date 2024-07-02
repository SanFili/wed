import { GuestsType } from "@/types/guests";

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
      {
        type: "radio",
        name: "agree",
        label: "Сможете ли вы присутствовать",
        dependencies: ["transfer"],
        radios: [
          { id: "yes", label: "Буду" },
          { id: "no", label: "Не смогу прийти" },
        ],
      },
      {
        type: "radio",
        name: "transfer",
        label: "Нужен ли вам трансфер от метро до места проведения мероприятия",
        dependence: "agree",
        disabled: true,
        radios: [
          { id: "yes", label: "Да" },
          { id: "no", label: "Нет, доеду сам" },
        ],
      },
    ],
  },
  couple: {
    title: "ДОРОГИЕ ДРУЗЬЯ!",
    text: "вас",
    formItems: [
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
        dependencies: ["couple", "transfer"],
        radios: [
          { id: "yes", label: "Буду" },
          { id: "no", label: "Не смогу прийти" },
        ],
      },
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
      {
        type: "radio",
        name: "transfer",
        label: "Нужен ли вам трансфер от метро до места проведения мероприятия",
        disabled: true,
        radios: [
          { id: "yes", label: "Да" },
          { id: "no", label: "Нет, доеду сам" },
        ],
      },
    ],
  },
  vitaly: {
    title: "Дорогие Юлия и Виталий!",
    text: "вашу семью",
    formItems: [
      {
        type: "radio",
        name: "agree",
        label: "Сможете ли вы присутствовать",
        radios: [
          { id: "yes", label: "Будем" },
          { id: "no", label: "Не сможем прийти" },
        ],
        dependencies: ["persons", "transfer"],
      },
      {
        type: "checkbox",
        name: "persons",
        label: "Отметьте, кто из вашей семьи будет на нашем празднике",
        disabled: true,
        errorText: "Отметьте хотя бы одного человека",
        checkboxes: [
          { name: "Vitaly", label: "Виталий" },
          { name: "Ulia", label: "Юлия" },
          { name: "Kirill", label: "Кирилл" },
          { name: "Dmitry", label: "Дмитрий" },
          { name: "Mary", label: "Мария" },
        ],
      },
      {
        type: "radio",
        name: "transfer",
        label: "Нужен ли вам трансфер от метро до места проведения мероприятия",
        disabled: true,
        radios: [
          { id: "yes", label: "Да" },
          { id: "no", label: "Нет, доедем самостоятельно" },
        ],
      },
    ],
  },
};
