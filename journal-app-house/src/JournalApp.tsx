import { AppRouter } from "./router/AppRouter"
import { ThemeToggleButton } from "./theme/components/ThemeToggleButton"
export const JournalApp = () => {
  return (
    <div className="relative">
    {/* Botón de cambio de tema en la esquina superior derecha */}
    <div className="absolute top-4 right-4">
      <ThemeToggleButton />
    </div>
    <AppRouter />
  </div>
   
  )
}
