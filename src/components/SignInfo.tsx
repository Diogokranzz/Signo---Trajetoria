
import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Star, Heart, Sun, Moon, ArrowLeft, Brain, Compass } from "lucide-react";
import { getZodiacSign, getSignInfo } from "@/lib/zodiac";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface SignInfoProps {
  birthDate: Date;
  onBack: () => void;
}

export const SignInfo = ({ birthDate, onBack }: SignInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sign = getZodiacSign(birthDate);
  const signInfo = getSignInfo(sign);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full max-w-4xl space-y-6"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="flex items-center text-astro-tertiary hover:text-astro-purple transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar
      </Button>

      <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-astro-soft"
          >
            <Star className="w-8 h-8 text-astro-purple" />
          </motion.div>
          <h2 className="text-3xl font-bold text-astro-tertiary">{sign}</h2>
          <p className="text-lg text-gray-600">{signInfo.period}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-astro-soft">
                <Heart className="w-5 h-5 text-astro-purple" />
              </div>
              <h3 className="text-xl font-semibold text-astro-tertiary">
                Personalidade
              </h3>
              <p className="text-gray-600">{signInfo.personality}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-astro-soft">
                <Sun className="w-5 h-5 text-astro-purple" />
              </div>
              <h3 className="text-xl font-semibold text-astro-tertiary">
                Elemento
              </h3>
              <p className="text-gray-600">{signInfo.element}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-astro-soft">
                <Moon className="w-5 h-5 text-astro-purple" />
              </div>
              <h3 className="text-xl font-semibold text-astro-tertiary">
                Características
              </h3>
              <p className="text-gray-600">{signInfo.traits}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-astro-soft">
                <Brain className="w-5 h-5 text-astro-purple" />
              </div>
              <h3 className="text-xl font-semibold text-astro-tertiary">
                Mentalidade
              </h3>
              <p className="text-gray-600">{signInfo.mindset}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-astro-soft h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-astro-soft">
                <Compass className="w-5 h-5 text-astro-purple" />
              </div>
              <h3 className="text-xl font-semibold text-astro-tertiary">
                Direção na Vida
              </h3>
              <p className="text-gray-600">{signInfo.lifeDirection}</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
