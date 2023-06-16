# DiscordBot

This Discord bot is a powerful tool to manage and enhance your Discord server. It is written in Node.js, using the Discord.js library.

Features

* This bot converts youtube links into audio files, which it then plays in a selected discord server

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

What you need to install the software:

* Node.js
* NPM

Installing

1. Clone the repo:
  
   git clone https://github.com/davidmatevski/DiscordBot.git
   

2. Navigate into the project directory:
  
   cd DiscordBot
  

3. Install the dependencies:
  
   npm install
  

4. You'll need to set up your bot token in a `botconfig.json` file. To do this, create a new file named `botconfig.json` in the root directory and add the following content, replacing `YOUR_BOT_TOKEN` with your actual bot token:
  
   {
       "token": "YOUR_BOT_TOKEN"
   }
   

Running the Bot

To start the bot, run the following command in your terminal:

node index.js

After this, the bot should be up and running in your Discord server.
