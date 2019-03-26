const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')

/*const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Мобильная разработка', 'delete')
])*/



const bot = new Telegraf("783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk");

bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.start((ctx) => ctx.reply('Привет! Я бот IT_camp и Profcamp версия 0.1! Рад познакомиться! Сейчас ты можешь узнать, как выглядит твой инвестор или ментор. Для этого просто пришли мне его имя. Будь уважителен - используй полное имя и заглавную первую букву.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Босс Максим', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1Ya0Vcvug1qWNJsD5G2p4xexFI5hT8_9Y'))
bot.hears('Алиса', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=16c8d5woUroD-pFEUkmuQGhqVmS9EHeYV'))
bot.hears('Максим', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1i-vrc6s4xKNSnGzF2uBjWYvH3NWxqVmc'))
bot.hears('Валерия', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1jfnmj4B_0ZJNGyqHXCqrFGPK5_0DO1XX' ))
bot.hears('Светлана', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1j0bS9WwOJGJTmwfI42A3bLo1KQ0z6PwC' ))
bot.hears('Виктор', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=11YspfE9JEGrA4VOOQAeDNFWw4cwIIjsp'))
bot.hears('Александр', (ctx) => ctx.replyWithPhoto('https://drive.google.com/file/d/1_933lXN8z6uov7Tm0IfeUWkEIGK8IU7G/view?usp=sharing' ))
bot.hears('Анастасия', (ctx) => ctx.replyWithPhoto( 'https://drive.google.com/file/d/18683o_y5KPguLeI74X6M97K3Tqt0o7uX/view?usp=sharing' ))
bot.hears('Павел', (ctx) => ctx.replyWithPhoto( 'https://drive.google.com/uc?export=download&id=1kBQdOrDQuFsRoIlXWUwH6QJFWUZ0SF2o' ))
bot.hears('Лера', (ctx) => ctx.reply( 'Ты уверен, что Лера - это полное имя?'))
bot.hears('Лера', (ctx) => ctx.reply( 'Ты уверен, что Лера - это полное имя?'))
bot.hears('Мобильная разработка', (ctx) => ctx.reply ('Они лучшие'))
bot.hears('джейк', (ctx) => ctx.replyWithAnimation('https://99px.ru/sstorage/86/2017/07/image_86100717001237906221.gif'))

bot.launch()
