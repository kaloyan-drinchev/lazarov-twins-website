import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import Home from './components/Home';

const AppContent = () => {
  const { colors } = useTheme();
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Home />
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
