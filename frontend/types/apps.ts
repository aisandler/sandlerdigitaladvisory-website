export type AppId = 'econoco' | 'client2';

export interface AppSection {
  id: string;
  title: string;
  icon?: string;
  pages: AppPage[];
}

export interface AppPage {
  id: string;
  title: string;
  parentSection: string;
  component: string;
}

export interface AppConfig {
  id: AppId;
  name: string;
  clientGroups: string[];
  sections: AppSection[];
  theme?: {
    primary: string;
    secondary: string;
  };
}

export interface AppTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  navBackground: string;
  navText: string;
  navActiveBackground: string;
  navActiveText: string;
} 