import React, { useEffect, useState } from 'react';

interface FloatingElementsProps {
  isDarkMode: boolean;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ isDarkMode }) => {
  const [elements, setElements] = useState<Array<{ id: number; code: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const codeSnippets = [
      'const app = express();',
      'app.listen(3000);',
      'SELECT * FROM users;',
      'npm install express',
      'git commit -m "fix"',
      'async/await',
      'MongoDB.connect()',
      'JWT.sign(payload)',
      'res.json(data)',
      'try { } catch(e) { }',
      'import React from "react"',
      'export default App',
      'useState(false)',
      'useEffect(() => {})',
      'fetch("/api/data")',
      'console.log("Hello")',
      'function calculate() {}',
      'return response.data',
      'if (user.isValid) {}',
      'map((item) => item.id)'
    ];

    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      left: Math.random() * 100,
      delay: Math.random() * 20
    }));

    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-code ${isDarkMode ? 'floating-code-dark' : ''}`}
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.code}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;