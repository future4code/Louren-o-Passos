import * as moment from "moment";

moment.locale("pt-br");

export type task = {
  name: string;
  description: string;
  startAt: moment.Moment;
  endAt: moment.Moment;
};

export const allEvents: task[] = [
  {
    name: "Reunião",
    description: "Reunião muito importante",
    startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
    endAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Reuniãozinha",
    description: "Reunião não muito importante",
    startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
    endAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  },
];

const printEvents = (events: task[]): void => {
  events.forEach((item: task) => {
    const duration = item.endAt.diff(item.startAt, "minutes");
    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`Nome: ${item.name} \n
	Horário de início: ${item.startAt.format(
    "dddd, DD [de] MMMM [de] YYYY, HH:mm"
  )} \n
	Horário de fim: ${item.endAt.format("DD [de] MMMM [de] YYYY, HH:mm")} \n
	Descrição: ${item.description} \n
	Duração do evento: ${duration} minutos \n
	Dias Até o Evento ${daysUntilEvent}`);
  });
};

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  endAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !endAt) {
    console.log("Check your inputs");
    return;
  }

  const diffStartAtAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAtAndToday = endAt.diff(moment(), "seconds");

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log("Date cannot be prior to the current date");
    return;
  }

  allEvents.push({ name, description, startAt, endAt });
};

printEvents(allEvents);

// Seria necessário manter a UTC de Londres
