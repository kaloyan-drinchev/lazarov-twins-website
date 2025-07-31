import React from 'react';
import WizardStep from '../WizardStep';

interface ResultsStepProps {
  isFirst: boolean;
  isLast: boolean;
  showGetStarted?: boolean;
  onGetStarted?: () => void;
}

const ResultsStep: React.FC<ResultsStepProps> = (props) => {
  const mockImage = {
    uri: 'https://via.placeholder.com/280x200/32D74B/FFFFFF?text=Results',
  };

  return (
    <WizardStep
      title="Proven Results & Community"
      description="Join thousands of successful transformations and become part of our supportive community. Track your progress, share achievements, and get inspired by real success stories from people just like you."
      imageSource={mockImage}
      showGetStarted={true}
      {...props}
    />
  );
};

export default ResultsStep;
