const baseUrl = "https://api.telegram.org/bot7451642357:AAGiGbgo_pvEga0oawHUYNepKyfzVE5zbLk";

export const sendForm = async (fields: string): Promise<void> => {
  const url = `${baseUrl}/sendMessage?chat_id=-1002237850047&text=${fields}`;

  await fetch(url);
};
