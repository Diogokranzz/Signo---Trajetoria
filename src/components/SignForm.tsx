
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CalendarIcon, MapPin, ArrowLeft } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface SignFormProps {
  onSubmit: (data: { birthDate: Date; birthPlace: string }) => void;
}

export const SignForm = ({ onSubmit }: SignFormProps) => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [birthPlace, setBirthPlace] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate && birthPlace) {
      onSubmit({ birthDate, birthPlace });
    }
  };

  const currentYear = new Date().getFullYear();
  const fromYear = currentYear - 100;
  const toYear = currentYear;

  return (
    <Card className="w-full max-w-md p-6 space-y-6 bg-white/80 backdrop-blur-sm border-astro-soft animate-fade-in">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-astro-tertiary">
          Descubra Sua Trajetória Astral
        </h2>
        <p className="text-sm text-muted-foreground">
          Insira seus dados para revelar seu mapa astral
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Data de Nascimento
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? (
                  format(birthDate, "PPP", { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                locale={ptBR}
                initialFocus
                fromYear={fromYear}
                toYear={toYear}
                captionLayout="dropdown-buttons"
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Local de Nascimento
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Digite sua cidade natal"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-astro-purple hover:bg-astro-vivid text-white"
          disabled={!birthDate || !birthPlace}
        >
          Descobrir Meu Signo
        </Button>
      </form>
    </Card>
  );
};
