import React from 'react';
import WizardStep from '../WizardStep';

interface WelcomeStepProps {
  isFirst: boolean;
  isLast: boolean;
  showGetStarted?: boolean;
}

const WelcomeStep: React.FC<WelcomeStepProps> = (props) => {
  // Mock image - you can replace with actual asset later
  const mockImage = {
    uri: 'https://via.placeholder.com/280x200/FF6B35/FFFFFF?text=L-Twins',
  };

  return (
    <WizardStep
      title="Welcome to L-Twins"
      description="Transform your fitness journey with professional coaching from Lazarov Twins. Our proven methodology has helped thousands achieve their dream physique through personalized training and nutrition guidance."
      imageSource={mockImage}
      {...props}
    />
  );
};

export default WelcomeStep;
