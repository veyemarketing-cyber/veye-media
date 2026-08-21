import React from 'react';
import { View } from '../types';

interface StartAConversationPageProps {
  onNavigate?: (view: View, systemId?: string) => void;
}

export const StartAConversationPage: React.FC<StartAConversationPageProps> = ({ onNavigate }) => {
  // component body...
};