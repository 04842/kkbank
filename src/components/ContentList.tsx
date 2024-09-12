// src/components/ContentList.tsx
import React, { useEffect, useState } from 'react';
import { getContentList } from '../services/content';

const ContentList: React.FC = () => {
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const data = await getContentList();
        setContents(data);
      } catch (error) {
        console.error('Failed to fetch contents:', error);
      }
    };
    fetchContents();
  }, []);

  return (
    <div>
      <h2>Latest Content</h2>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

