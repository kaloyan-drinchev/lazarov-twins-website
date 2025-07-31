import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeColors } from '../../theme/colors';

interface WizardStepProps {
  title: string;
  description: string;
  imageSource?: any;
  isFirst?: boolean;
  isLast?: boolean;
  showGetStarted?: boolean;
  onGetStarted?: () => void;
}

const WizardStep: React.FC<WizardStepProps> = ({
  title,
  description,
  imageSource,
  isFirst = false,
  isLast = false,
  showGetStarted = false,
  onGetStarted,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {imageSource && (
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
          </View>
        )}

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      {showGetStarted && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={onGetStarted}
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 40,
      borderRadius: 20,
      overflow: 'hidden',
    },
    image: {
      width: 280,
      height: 200,
      borderRadius: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    getStartedButton: {
      width: '100%',
      paddingVertical: 20,
      borderRadius: 12,
      backgroundColor: colors.buttonBackground,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 56,
    },
    getStartedButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default WizardStep;
