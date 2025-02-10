
import { useState } from "react";
import { SignForm } from "@/components/SignForm";
import { SignInfo } from "@/components/SignInfo";

const Index = () => {
  const [formData, setFormData] = useState<{
    birthDate: Date;
    birthPlace: string;
  } | null>(null);

  const handleBack = () => {
    setFormData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-astro-soft via-white to-astro-light p-4">
      <div className="container mx-auto py-8 flex flex-col items-center justify-center space-y-8">
        {!formData ? (
          <SignForm onSubmit={setFormData} />
        ) : (
          <SignInfo birthDate={formData.birthDate} onBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default Index;
