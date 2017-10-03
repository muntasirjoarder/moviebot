const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();

const bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    session => 
    builder.Prompts.text(session, `Hi I am superbot. What is your name ?`),
    (session, results) => 
    session.send ('Hello %s how are you ?',results.response),
]);