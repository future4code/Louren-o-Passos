"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allEvents = void 0;
const moment = require("moment");
moment.locale("pt-br");
exports.allEvents = [
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
const printEvents = (events) => {
    events.forEach((item) => {
        const duration = item.endAt.diff(item.startAt, "minutes");
        console.log(`Nome: ${item.name} \n
	Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")} \n
	Horário de fim: ${item.endAt.format("DD [de] MMMM [de] YYYY, HH:mm")} \n
	Descrição: ${item.description} \n
	Duração do evento: ${duration}`);
    });
};
printEvents(exports.allEvents);
//# sourceMappingURL=index1.js.map