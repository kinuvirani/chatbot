import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./Components/LearningOptions/LearningOptions";
import LinkList from "./Components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage(`Hi User, how can I help you?"`, {widget: "learningOptions"})],
  widgets: [
    {
       widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
       widgetName: "javascriptLinks",
       widgetFunc: (props) => <LinkList {...props} />,
       props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "reactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
       options: [
         {
           text: "Introduction to React.JS",
           url:
             "https://reactjs.org/docs/getting-started.html",
           id: 1,
         },
         {
           text: "Redux Guide",
           url:
             "https://redux.js.org/introduction/getting-started",
           id: 2,
         },
       ],
     },
    },
    {
        widgetName: "nodeLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
        options: [
          {
            text: "Introduction to Node.JS",
            url:
              "https://nodejs.org/",
            id: 1,
          },
          {
            text: "Express JS Guide",
            url:
              "https://expressjs.com/",
            id: 2,
          },
          {
            text: "Feathers Js Guide",
            url: "https://docs.feathersjs.com/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "securityLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
      options: [
        {
          text: "JWT",
          url:
            "https://jwt.io/introduction",
          id: 1,
        },
        {
          text: "Passport Js",
          url:
            "http://www.passportjs.org/",
          id: 2,
        },
        {
          text: "Auth0",
          url: "https://auth0.com/",
          id: 3,
        },
      ],
    },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  }
}

export default config