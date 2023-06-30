import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'react-tabs/style/react-tabs.css';
import styles from '/styles/CodeSnippet.module.css'; // Import custom CSS styles

const CodeSnippet = () => {
  const [activeTab, setActiveTab] = useState('python');

  const handleTabSelect = (tabIndex) => {
    setActiveTab(tabIndex === 0 ? 'python' : 'javascript');
  };

  const getCodeSnippet = (language) => {
    if (language === 'python') {
      return `
      
      metal.index({
        'text': 'Onboarding and orientation program',
        'metadata': {
            'organization_id':123,
            'department': 'sales'
        }
    })
    `;
    } else if (language === 'javascript') {
      return `
      
      (async () => {
        const embeddingDocument = await metal.index({
          text: 'Onboarding and orientation program',
          metadata: {
            organization_id: 123,
            department: 'sales',
          },
        });
      
        console.log(embeddingDocument);
      })();
      
      `;
    }
    
  };

  return (
    <div>
      <Tabs
        selectedIndex={activeTab === 'python' ? 0 : 1}
        onSelect={handleTabSelect}
        className={styles.tabs} 
      >
        <TabList className={styles.tabList}> 
          <Tab className={styles.tab}>Python</Tab>
          <Tab className={styles.tab}>JavaScript</Tab>
          {/* Add more tabs for other languages as needed */}
        </TabList>

        <TabPanel>
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {getCodeSnippet('python')}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {getCodeSnippet('javascript')}
          </SyntaxHighlighter>
        </TabPanel>
        {/* Add more TabPanels for other languages as needed */}
      </Tabs>

      {/* More blog content */}
      <p>More blog content...</p>
      
      <Tabs
        className={styles.tabs}
      >
        <TabList className={styles.tabList}> 
          <Tab className={styles.tab}>Python</Tab>
          <Tab className={styles.tab}>JavaScript</Tab>
        </TabList>
        <TabPanel>
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
        results = metal.search({
            'text': 'What are the key metrics to track?',
            'filters': [{
                'field':'department',
                'value': 'engineering',
                }]
        }, limit=3)

        results
            `}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`
        (async () => {
            const results = await metal.search({
            text: 'What are the key metrics to track?',
            filters: [{ field: 'department', value: 'engineering' }],
            limit: 3,
            });

            console.log(results);
        
        })();
            `}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CodeSnippet;
