import React, { FC, FormEvent, useEffect, useState } from "react";

import { sendForm } from "@/api/sendForm";
import { Button, Checkbox, Field, Input, Modal, Radio } from "@/components/ui";
import { FieldType, onChangeType } from "@/types/form";

import styles from "./Form.module.scss";
import { checkValidity, toFields } from "./script";

type FormProps = {
  items: any[];
  slug: string;
};

const Form: FC<FormProps> = ({ items, slug }) => {
  const [fields, setFields] = useState<{ [key: string]: FieldType }>({});
  const [openModal, setOpenModal] = useState(false);
  const [validForm, setValidForm] = useState(true);

  useEffect(() => {
    const obj = toFields(items);
    setFields(obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let valid = true;
    for (let name in fields) {
      if (!checkValidity(fields[name])) {
        setFields((prev) => ({ ...prev, [name]: { ...prev[name], error: true } }));
        valid = false;
        setValidForm(false);
      }
    }
    if (!valid) {
      setOpenModal(true);
      return;
    }
    setValidForm(true);

    let message = "";
    for (let key in fields) {
      if (!fields[key].disabled)
        message += `{{${slug}}} ${key}: ${
          Array.isArray(fields[key].value) ? (fields[key].value as string[]).join(", ") : fields[key].value
        };`;
    }

    sendForm(message);
    setOpenModal(true);
  };

  const handleChange = ({ name, value, checkboxName }: onChangeType): void => {
    setFields((prev) => {
      if (checkboxName && prev[checkboxName] && Array.isArray(prev[checkboxName].value)) {
        const arr = value
          ? [...(prev[checkboxName].value as string[]), name]
          : (prev[checkboxName].value as string[]).filter((el) => el !== name);
        return { ...prev, [checkboxName]: { ...prev[checkboxName], value: arr, error: !arr.length } };
      } else {
        return { ...prev, [name]: { ...prev[name], value: value as string, error: !value } };
      }
    });

    const item = items.find((el) => el.name === name);
    if (item?.dependencies) {
      item.dependencies.forEach((dep: string) =>
        setFields((prev) => ({
          ...prev,
          [dep]: { ...prev[dep], disabled: value !== "yes" },
        }))
      );
    }
  };

  return (
    <section className={styles.form}>
      <h2>АНКЕТА ГОСТЯ</h2>
      <p className={styles.form__text}>
        Пожалуйста, подтвердите ваше присутствие на нашем празднике до <span>1&#160;августа</span> лично или через форму
        ниже
      </p>
      <form onSubmit={onSubmit}>
        {items.map((item) => (
          <Field
            key={item.name}
            text={item.label}
            disabled={fields[item.name]?.disabled}
            showError={fields[item.name]?.error}
            errorText={item.errorText}
          >
            {item.type === "text" ? (
              <Input
                name={item.name}
                placeholder={item.placeholder}
                onChange={handleChange}
                disabled={fields[item.name]?.disabled}
              />
            ) : item.type === "radio" ? (
              <>
                {item.radios.map((radio: { id: string; label: string }) => (
                  <Radio
                    key={radio.id}
                    id={radio.id}
                    label={radio.label}
                    name={item.name}
                    onChange={handleChange}
                    checked={fields[item.name]?.value === radio.id}
                    className={styles.form__item}
                    disabled={fields[item.name]?.disabled}
                  />
                ))}
              </>
            ) : (
              item.type === "checkbox" && (
                <>
                  {item.checkboxes.map((checkbox: { name: string; label: string }) => (
                    <Checkbox
                      key={checkbox.name}
                      name={checkbox.name}
                      label={checkbox.label}
                      onChange={(v) => handleChange({ ...v, checkboxName: item.name })}
                      className={styles.form__item}
                      disabled={fields[item.name]?.disabled}
                    />
                  ))}
                </>
              )
            )}
          </Field>
        ))}
        <Button type="submit" className={styles.form__button}>
          Отправить
        </Button>
      </form>
      <Modal
        text={validForm ? "Форма отправлена" : "Пожалуйста, заполните все поля"}
        isOpen={openModal}
        setIsOpen={setOpenModal}
        type={validForm ? "info" : "error"}
      />
    </section>
  );
};

export default Form;
