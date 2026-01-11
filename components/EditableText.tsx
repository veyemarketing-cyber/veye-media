
import React from 'react';
import { useContent } from '../context/ContentContext';
import { SiteContent } from '../types';

interface EditableTextProps {
  section: keyof SiteContent;
  field: string;
  subKey?: string; // For dynamic items like systems[id][field]
  nestedKey?: string; // For even deeper items like blog.posts[id][nestedKey]
  multiline?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'address';
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  section, 
  field, 
  subKey,
  nestedKey,
  multiline = false, 
  className = '', 
  as: Component = 'span' 
}) => {
  const { content, updateContent, isEditing } = useContent();

  // Safe access to nested properties
  let value = '';
  try {
    if (section === 'systems' && subKey) {
      // @ts-ignore
      value = content.systems[subKey]?.[field] || '';
    } else if (section === 'blog' && field === 'posts' && subKey && nestedKey) {
      // @ts-ignore
      value = content.blog.posts[subKey]?.[nestedKey] || '';
    } else {
      // @ts-ignore
      value = content[section]?.[field] || '';
    }
  } catch (e) {
    console.warn(`EditableText failed to find value for ${section}.${field}`);
  }

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          value={value}
          onChange={(e) => updateContent(section, field, e.target.value, subKey, nestedKey)}
          className={`w-full bg-yellow-50 border-2 border-yellow-400 rounded p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[60px] ${className}`}
          onClick={(e) => e.stopPropagation()}
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => updateContent(section, field, e.target.value, subKey, nestedKey)}
        className={`min-w-[50px] bg-yellow-50 border-b-2 border-yellow-400 px-1 text-slate-900 focus:outline-none focus:border-yellow-600 ${className}`}
        onClick={(e) => e.stopPropagation()}
      />
    );
  }

  return (
    <Component className={className}>
      {value}
    </Component>
  );
};
