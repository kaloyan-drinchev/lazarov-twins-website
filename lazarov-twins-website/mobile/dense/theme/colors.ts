export interface ThemeColors {
  // Background colors
  background: string;
  surface: string;
  surfaceVariant: string;
  
  // Text colors
  text: string;
  textSecondary: string;
  textTertiary: string;
  
  // Primary brand colors
  primary: string;
  primaryDark: string;
  primaryLight: string;
  
  // Accent colors
  accent: string;
  success: string;
  warning: string;
  error: string;
  
  // Interactive elements
  buttonBackground: string;
  buttonText: string;
  buttonSecondary: string;
  buttonSecondaryText: string;
  
  // Borders and dividers
  border: string;
  divider: string;
  
  // Status bar
  statusBarStyle: 'light' | 'dark';
  statusBarBackground: string;
}

export const lightTheme: ThemeColors = {
  // Background colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  surfaceVariant: '#F1F3F4',
  
  // Text colors
  text: '#1A1A1A',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  
  // Primary brand colors (fitness/gym theme)
  primary: '#FF6B35',      // Energetic orange
  primaryDark: '#E55A2B',
  primaryLight: '#FF8A5B',
  
  // Accent colors
  accent: '#007AFF',       // iOS blue
  success: '#10B981',      // Green
  warning: '#F59E0B',      // Amber
  error: '#EF4444',        // Red
  
  // Interactive elements
  buttonBackground: '#007AFF',     // Blue primary buttons for light theme
  buttonText: '#FFFFFF',
  buttonSecondary: '#F1F3F4',
  buttonSecondaryText: '#1A1A1A',
  
  // Borders and dividers
  border: '#E5E7EB',
  divider: '#F3F4F6',
  
  // Status bar
  statusBarStyle: 'dark',
  statusBarBackground: '#FFFFFF',
};

export const darkTheme: ThemeColors = {
  // Background colors
  background: '#000000',
  surface: '#1C1C1E',
  surfaceVariant: '#2C2C2E',
  
  // Text colors
  text: '#FFFFFF',
  textSecondary: '#A1A1AA',
  textTertiary: '#71717A',
  
  // Primary brand colors
  primary: '#FF6B35',
  primaryDark: '#E55A2B',
  primaryLight: '#FF8A5B',
  
  // Accent colors
  accent: '#0A84FF',       // iOS blue (dark variant)
  success: '#32D74B',      // Green (dark variant)
  warning: '#FF9F0A',      // Amber (dark variant)
  error: '#FF453A',        // Red (dark variant)
  
  // Interactive elements
  buttonBackground: '#FF6B35',     // Orange primary buttons for dark theme
  buttonText: '#FFFFFF',
  buttonSecondary: '#2C2C2E',
  buttonSecondaryText: '#FFFFFF',
  
  // Borders and dividers
  border: '#38383A',
  divider: '#1C1C1E',
  
  // Status bar
  statusBarStyle: 'light',
  statusBarBackground: '#000000',
};

export type ThemeType = 'light' | 'dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};