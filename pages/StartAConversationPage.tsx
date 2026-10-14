import React from 'react';
import { Contact } from './Contact';
import { View } from '../types';
export const StartAConversationPage: React.FC<{ onNavigate: (view: View, systemId?: string) => void }> = ({ onNavigate }) => <Contact onNavigate={onNavigate} />;
