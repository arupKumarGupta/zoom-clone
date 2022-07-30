import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import { createContext } from 'react';

const NavigationContext = createContext<StackNavigationHelpers | null>(null);
export default NavigationContext;
