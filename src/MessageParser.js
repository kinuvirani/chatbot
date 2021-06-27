class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {
		const lowerCaseMessage = message.toLowerCase();
		if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
		}
		if (lowerCaseMessage.includes("javascript")) {
      		this.actionProvider.handleJavascriptList();
    	}
		if (lowerCaseMessage.includes("react.js")) {
			this.actionProvider.handleReactList();
		}
		if (lowerCaseMessage.includes("node.js")) {
			this.actionProvider.handleNodeList();
	  	}
		if (lowerCaseMessage.includes("security")) {
			this.actionProvider.handleSecurityList();
		}
		console.log(message)
	}
}

export default MessageParser;  