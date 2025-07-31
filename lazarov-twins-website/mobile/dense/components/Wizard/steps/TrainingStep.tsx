import React from 'react';
import WizardStep from '../WizardStep';

interface TrainingStepProps {
  isFirst: boolean;
  isLast: boolean;
  showGetStarted?: boolean;
}

const TrainingStep: React.FC<TrainingStepProps> = (props) => {
  const mockImage = {
    uri: 'https://via.placeholder.com/280x200/007AFF/FFFFFF?text=Training',
  };

  return (
    <WizardStep
      title="Custom Training Programs"
      description="Get access to scientifically-designed workout programs tailored to your goals. Whether you're building muscle, losing fat, or increasing strength, our progressive overload methodology ensures consistent results every session."
      imageSource={mockImage}
      {...props}
    />
  );
};

export default TrainingStep;
