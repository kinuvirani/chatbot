import React from 'react';
import './LearningOptions.css';

const LearningOptions = (props) => {
    const options = [
        { text: "Javascript", handler: props.actionProvider.handleJavascriptList, id: 1 },
        { text: "React.js", handler: props.actionProvider.handleReactList, id: 2 },
        { text: "Node.js", handler: props.actionProvider.handleNodeList , id: 3 },
        { text: "Security", handler: props.actionProvider.handleSecurityList, id: 4 }
    ];
    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;