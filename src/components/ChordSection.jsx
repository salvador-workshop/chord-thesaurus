import React from 'react';

/**
 * A section of several fingeboard diagram groups
 * @prop {string} sectionId
 * @prop {string} sectionLabel
 * @prop {Chord} children
 */
export default function ChordSection({ sectionId, sectionLabel, children }) {
    const domId = `chord-section ${sectionId}`;
    let bgColor = '#888888';
    let textColor = '#ffffff';
    switch(sectionId) {
        case 'maj':
            bgColor = "#fee9b2";
            textColor = '#333333';
            break;
        case 'dom':
            bgColor = "#E8BC8E";
            textColor = '#333333';
            break;
        case 'min':
            bgColor = "#bbded6";
            textColor = '#333333';
            break;
        case 'dim':
            bgColor = "#ffb6b9";
            textColor = '#333333';
            break;
        default:
            bgColor = '#888888';
            textColor = '#ffffff';
    }
 
    const sectionStyle = {
        position: 'relative',
        display: 'flex',
    }
    const labelWrapperStyle = {
        flex: '0 0 36px',
    }
    const labelStyle = {
        position: 'absolute',
        top: '0',
        width: '36px',
        bottom: '32px',
        padding: '1.5rem 0',
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: '32px',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        backgroundColor: bgColor,
        color: textColor,
        letterSpacing: '0.67rem',
        textTransform: 'uppercase',
    }
    const contentStyle = {
        flex: '1 0 auto',
    }
    const bottomLabelStyle = {
        position: 'absolute',
        bottom: '1.5rem',
    }

    return (
        <div className={domId} style={sectionStyle}>
            <div className='section-label-wrapper' style={labelWrapperStyle}>
                <div className='section-label' style={labelStyle}>
                    <span className='section-label-text'>{sectionLabel}</span>
                    <span className='section-label-text bottom' style={bottomLabelStyle}>{sectionLabel}</span>
                </div>
            </div>
            <div className='section-content' style={contentStyle}>
                {children}
            </div>
        </div>
    )
}
