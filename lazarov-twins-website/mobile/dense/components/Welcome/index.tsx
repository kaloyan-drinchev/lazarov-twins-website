import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeColors } from '../../theme/colors';

interface WelcomeProps {
  onContinue: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onContinue }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  // Mock image - replace with actual L-Twins welcome image later
  const welcomeImage = {
    uri: 'https://via.placeholder.com/320x240/FF6B35/FFFFFF?text=Welcome+to+L-Twins',
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Welcome Image */}
        <View style={styles.imageContainer}>
          <Image source={welcomeImage} style={styles.image} />
        </View>

        {/* Greeting Content */}
        <Text style={styles.title}>Welcome to Your Fitness Journey!</Text>
        <Text style={styles.subtitle}>
          You're now part of the L-Twins community
        </Text>
        <Text style={styles.description}>
          Get ready to transform your body and mind with our proven training
          methods, personalized nutrition plans, and expert coaching. Your
          journey to the best version of yourself starts now!
        </Text>

        {/* Benefits List */}
        <View style={styles.benefitsList}>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitIcon}>💪</Text>
            <Text style={styles.benefitText}>
              Custom training programs tailored to your goals
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitIcon}>🥗</Text>
            <Text style={styles.benefitText}>
              Personalized nutrition guidance
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <Text style={styles.benefitIcon}>🏆</Text>
            <Text style={styles.benefitText}>1-on-1 coaching and support</Text>
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueButtonText}>Let's Get Started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 32,
      borderRadius: 20,
      overflow: 'hidden',
    },
    image: {
      width: 320,
      height: 240,
      borderRadius: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.buttonBackground,
      textAlign: 'center',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
      paddingHorizontal: 10,
    },
    benefitsList: {
      alignSelf: 'stretch',
      maxWidth: 300,
    },
    benefitItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    benefitIcon: {
      fontSize: 24,
      marginRight: 16,
      width: 32,
      textAlign: 'center',
    },
    benefitText: {
      flex: 1,
      fontSize: 14,
      color: colors.text,
      lineHeight: 20,
    },
    buttonContainer: {
      paddingVertical: 20,
    },
    continueButton: {
      width: '100%',
      paddingVertical: 18,
      borderRadius: 12,
      backgroundColor: colors.buttonBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Welcome;
