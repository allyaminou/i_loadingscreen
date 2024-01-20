fx_version 'cerulean'
game 'common'
lua54 'yes'

description 'Simple loadingscreen.'
author 'Isannyys'
version '1.0.0'

url 'https://github.com/Isannyys'

loadscreen 'html/index.html'

shared_script 'config.lua'

loadscreen_manual_shutdown 'yes'

client_script 'client/client.lua'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/music/music.mp3',
}