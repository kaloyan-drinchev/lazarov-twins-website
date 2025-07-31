import React from 'react';
import WizardStep from '../WizardStep';

interface CoachingStepProps {
  isFirst: boolean;
  isLast: boolean;
  showGetStarted?: boolean;
}

const CoachingStep: React.FC<CoachingStepProps> = (props) => {
  const mockImage = {
    uri: 'https://via.placeholder.com/280x200/F59E0B/FFFFFF?text=Coaching',
  };

  return (
    <WizardStep
      title="1-on-1 Personal Coaching"
      description="Get direct access to the Lazarov Twins for personalized guidance, form corrections, and motivation. Our coaching approach includes regular check-ins, progress tracking, and adjustments to keep you on the fastest path to your goals."
      imageSource={mockImage}
      {...props}
    />
  );
};

export default CoachingStep;
