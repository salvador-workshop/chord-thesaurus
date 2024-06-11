import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Card, Heading, Text } from 'sw-design-system';

/**
 * Renders a card component with a fretboard diagram and key info
 * @prop {string} diagramId
 * @prop {Object} diagramInfo
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 */
export default function FbDiagramCard({ diagramId, diagramInfo, children }) {
    const domId = `fb-diagram-card-${diagramId}`;
    const styles = {
        maxWidth: 400,
        padding: '30px',
    }
    return (
        <ThemeUIProvider theme={preset}>
            <Card className={domId} mb={5} sx={styles}>
                <Heading>{diagramInfo.title}</Heading>
                <Text>{diagramInfo.subtitle}</Text>
                <div className='diagram-wrapper'>
                    {children}
                </div>
            </Card>
        </ThemeUIProvider>
    )
}
