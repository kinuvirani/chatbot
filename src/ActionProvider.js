// ActionProvider starter code
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
	}

	greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
	}
	
	handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );
  this.updateChatbotState(message);
};

handleReactList = () => {
		const message = this.createChatBotMessage(
		"Fantastic, I've got the following resources for you on React.js:",
		{
			widget: "reactLinks",
		}
		);
	this.updateChatbotState(message);
	};

	handleNodeList = () => {
		const message = this.createChatBotMessage(
		"Fantastic, I've got the following resources for you on Node.js:",
		{
			widget: "nodeLinks",
		}
		);
	this.updateChatbotState(message);
	};

	handleSecurityList = () => {
		const message = this.createChatBotMessage(
		"Fantastic, I've got the following resources for you on Security for apis:",
		{
			widget: "securityLinks",
		}
		);
	this.updateChatbotState(message);
	};

	updateChatbotState(message) {
		this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
	}
}
  
export default ActionProvider;