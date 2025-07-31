import React from 'react';
import WizardStep from '../WizardStep';

interface NutritionStepProps {
  isFirst: boolean;
  isLast: boolean;
  showGetStarted?: boolean;
}

const NutritionStep: React.FC<NutritionStepProps> = (props) => {
  const mockImage = {
    uri: 'https://via.placeholder.com/280x200/10B981/FFFFFF?text=Nutrition',
  };

  return (
    <WizardStep
      title="Personalized Nutrition"
      description="Fuel your transformation with custom meal plans and macro guidance. Our nutrition strategies are designed to complement your training, optimize recovery, and accelerate your results while fitting your lifestyle and preferences."
      imageSource={mockImage}
      {...props}
    />
  );
};

export default NutritionStep;
