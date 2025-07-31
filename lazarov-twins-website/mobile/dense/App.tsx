import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Wizard from './components/Wizard';
import Welcome from './components/Welcome';
import Home from './components/Home';

const AppContent = () => {
  const { colors } = useTheme();
  const [currentScreen, setCurrentScreen] = useState<
    'wizard' | 'welcome' | 'home'
  >('wizard');

  const handleWizardComplete = () => {
    setCurrentScreen('welcome');
  };

  const handleWelcomeContinue = () => {
    setCurrentScreen('home');
  };

  const handleRestartWizard = () => {
    setCurrentScreen('wizard');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'wizard':
        return <Wizard onComplete={handleWizardComplete} />;
      case 'welcome':
        return <Welcome onContinue={handleWelcomeContinue} />;
      case 'home':
        return <Home onRestartWizard={handleRestartWizard} />;
      default:
        return <Wizard onComplete={handleWizardComplete} />;
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {renderCurrentScreen()}
      <StatusBar
        style={colors.statusBarStyle}
        backgroundColor={colors.statusBarBackground}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider initialTheme="dark">
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
