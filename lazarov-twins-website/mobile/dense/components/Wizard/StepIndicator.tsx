import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeColors } from '../../theme/colors';

interface Step {
  name: string;
  component: any;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepPress: (stepIndex: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  onStepPress,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {/* Progress roadmap */}
      <View style={styles.progressContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepGroup}>
            <View style={styles.stepColumn}>
              {/* Step title above the dot */}
              <Text
                style={[
                  styles.stepTitle,
                  index === currentStep && styles.activeStepTitle,
                  index < currentStep && styles.completedStepTitle,
                ]}
              >
                {step.name}
              </Text>

              {/* Step dot with number */}
              <TouchableOpacity
                style={[
                  styles.stepDot,
                  index === currentStep && styles.activeStepDot,
                  index < currentStep && styles.completedStepDot,
                ]}
                onPress={() => onStepPress(index)}
              >
                <Text
                  style={[
                    styles.stepNumber,
                    index === currentStep && styles.activeStepNumber,
                    index < currentStep && styles.completedStepNumber,
                  ]}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            </View>

            {index < steps.length - 1 && (
              <View
                style={[
                  styles.stepLine,
                  index < currentStep && styles.completedStepLine,
                ]}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 24,
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    stepGroup: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    stepColumn: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    stepTitle: {
      fontSize: 10,
      fontWeight: '500',
      color: colors.textTertiary,
      textAlign: 'center',
      marginBottom: 6,
      maxWidth: 60,
    },
    activeStepTitle: {
      color: colors.buttonBackground,
      fontWeight: '600',
    },
    completedStepTitle: {
      color: colors.textSecondary,
    },
    stepDot: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.surfaceVariant,
      borderWidth: 2,
      borderColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeStepDot: {
      backgroundColor: colors.buttonBackground,
      borderColor: colors.buttonBackground,
    },
    completedStepDot: {
      backgroundColor: colors.textSecondary,
      borderColor: colors.textSecondary,
    },
    stepNumber: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.textSecondary,
    },
    activeStepNumber: {
      color: colors.buttonText,
    },
    completedStepNumber: {
      color: '#FFFFFF',
    },
    stepLine: {
      width: 24,
      height: 2,
      backgroundColor: colors.border,
      marginHorizontal: 4,
      marginBottom: 16,
    },
    completedStepLine: {
      backgroundColor: colors.textSecondary,
    },
  });

export default StepIndicator;
