import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { Navbar } from "../components/Navbar";
import { localizer, getMessagesEs } from "../../helpers";

const events = [
  {
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Jordan",
    },
  },
];

const eventStyleGetter = (
  event: any,
  start: any,
  end: any,
  isSelected: any
) => {
  const style = {
    backgroundColor: "#347CF7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
    // border: "1px solid black",
  };

  return {
    style,
  };
};

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        culture="es-ES"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
