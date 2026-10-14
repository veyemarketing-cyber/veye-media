
import React from 'react';
import { useContent } from '../context/ContentContext';
import { Icon } from './Icon';

export const AdminControls: React.FC = () => {
  const { isEditing, toggleEditing, resetContent } = useContent();

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2">
      {isEditing && (
         <div className="bg-slate-900 text-white p-4 rounded-lg shadow-xl mb-2 animate-fade-in-up border border-slate-700 w-64">
            <h4 className="font-bold text-sm mb-2 text-yellow-400 flex items-center gap-2">
                <Icon name="Settings" size={14} /> Content Editor Active
            </h4>
            <p className="text-xs text-slate-400 mb-4">
                Click on highlighted text fields to edit content. Changes are saved automatically.
            </p>
            <button 
                onClick={resetContent}
                className="w-full text-xs bg-red-900/50 hover:bg-red-900 text-red-200 py-2 rounded border border-red-800 transition-colors"
            >
                Reset to Defaults
            </button>
         </div>
      )}
      
      <button
        onClick={toggleEditing}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 border ${
          isEditing 
            ? 'bg-yellow-400 text-slate-900 border-yellow-500 rotate-180' 
            : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
        }`}
        title="Toggle Content Editor"
      >
        <Icon name={isEditing ? 'Check' : 'Settings'} size={24} />
      </button>
    </div>
  );
};
