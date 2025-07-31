import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeColors } from '../../theme/colors';
import WizardStep from './WizardStep';
import StepIndicator from './StepIndicator';
import WelcomeStep from './steps/WelcomeStep';
import TrainingStep from './steps/TrainingStep';
import NutritionStep from './steps/NutritionStep';
import CoachingStep from './steps/CoachingStep';
import ResultsStep from './steps/ResultsStep';

const { width } = Dimensions.get('window');

interface WizardProps {
  onComplete: () => void;
}

const Wizard: React.FC<WizardProps> = ({ onComplete }) => {
  const { colors, theme, toggleTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const styles = createStyles(colors);

  const steps = [
    { name: 'Welcome', component: WelcomeStep },
    { name: 'Training', component: TrainingStep },
    { name: 'Nutrition', component: NutritionStep },
    { name: 'Coaching', component: CoachingStep },
    { name: 'Results', component: ResultsStep },
  ];

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const stepIndex = Math.round(scrollX / width);
    setCurrentStep(stepIndex);
  };

  return (
    <View style={styles.container}>
      {/* Theme Toggle Button */}
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {steps.map((step, index) => {
          const StepComponent = step.component;
          return (
            <View key={index} style={[styles.stepContainer, { width }]}>
              <StepComponent
                isFirst={index === 0}
                isLast={index === steps.length - 1}
                showGetStarted={index === steps.length - 1}
                onGetStarted={onComplete}
              />
            </View>
          );
        })}
      </ScrollView>

      <StepIndicator
        steps={steps}
        currentStep={currentStep}
        onStepPress={setCurrentStep}
      />
    </View>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    themeButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    themeButtonText: {
      fontSize: 20,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      flexDirection: 'row',
    },
    stepContainer: {
      flex: 1,
    },
  });

export default Wizard;
