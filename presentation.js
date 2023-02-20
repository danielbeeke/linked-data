import Reveal from 'https://cdn.skypack.dev/reveal.js';
import { longPress } from './longpress';

const hash = location.hash
location.hash = ''
const codeBlocks = document.querySelectorAll('.sparql')
for (const codeBlock of codeBlocks) {
   const code = codeBlock.children[0].value.replaceAll('          ', '').trim()
   codeBlock.innerHTML = ''
   const element = document.createElement('div')
   codeBlock.appendChild(element)
   const yasgui = new Yasgui(element, {})
   const currentTab = yasgui._tabs[Object.keys(yasgui._tabs)[0]]
   currentTab.setQuery(code)
   currentTab.query()
   currentTab.yasqe.display.wrapper.style.height = code.split('\n').length * 36 + 'px'
   setTimeout(() => {
    currentTab.show()
   }, 1000)
}

location.hash = hash

let deck = new Reveal({ 
   hash: true,
   margin: 0.00,
   controlsTutorial: false,
 })

window.Reveal = deck

deck.initialize()


longPress(() => {
   fullscreen()
})

function fullscreen() {
   if (!document.fullscreenElement && !document.msFullscreenElement
       && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
       if (document.body.requestFullscreen) {
           document.body.requestFullscreen();
       } else if (document.body.msRequestFullscreen) {
           document.body.msRequestFullscreen();
       }else if (document.body.mozRequestFullScreen) {
           document.body.mozRequestFullScreen();
       }else if (document.body.webkitRequestFullscreen) {
           document.body.webkitRequestFullscreen();
       }
   } else {
       if (document.exitFullscreen) {
           document.exitFullscreen();
       } else if (document.msExitFullscreen) {
           document.msExitFullscreen();
       }else if (document.mozCancelFullScreen) {
           document.mozCancelFullScreen();
       }else if (document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
       }
   } }