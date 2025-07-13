import { getDay, startOfWeek, parse, format } from "date-fns";
import { es } from "date-fns/locale/es";
import { dateFnsLocalizer } from "react-big-calendar";

const locales = {
  "es-ES": es,
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
