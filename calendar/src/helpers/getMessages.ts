export const getMessagesEs = () => {
  return {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    events: "Eventos",
    noEnventsMessage: "No hay eventos",
    showMore: (total: number) => `+${total} más`,
  };
};
