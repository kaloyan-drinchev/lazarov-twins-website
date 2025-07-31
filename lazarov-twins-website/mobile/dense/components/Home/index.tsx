import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ThemeColors } from '../../theme/colors';

interface HomeProps {
  onRestartWizard?: () => void;
}

const Home: React.FC<HomeProps> = ({ onRestartWizard }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to DENSE</Text>
        <Text style={styles.subtitle}>L-Twins Fitness Mobile</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Selling Programs</Text>
        <Text style={styles.loadingText}>Loading programs...</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View All Programs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Browse Categories</Text>
      </TouchableOpacity>

      {/* Test Button - Only for development */}
      {onRestartWizard && (
        <TouchableOpacity style={styles.testButton} onPress={onRestartWizard}>
          <Text style={styles.testButtonText}>🔄 Restart Wizard (Test)</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: colors.surface,
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    section: {
      padding: 20,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 16,
    },
    loadingText: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      marginVertical: 20,
    },
    button: {
      backgroundColor: colors.buttonBackground,
      margin: 20,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: '600',
    },
    buttonSecondary: {
      backgroundColor: colors.buttonSecondary,
      margin: 20,
      marginTop: 10,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    buttonSecondaryText: {
      color: colors.buttonSecondaryText,
      fontSize: 18,
      fontWeight: '600',
    },
    testButton: {
      backgroundColor: colors.warning,
      margin: 20,
      marginTop: 30,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.warning,
    },
    testButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default Home;
