import Reveal from 'https://cdn.skypack.dev/reveal.js';

const hash = location.hash
location.hash = ''
const codeBlocks = document.querySelectorAll('.sparql')
for (const codeBlock of codeBlocks) {
   const code = codeBlock.children[0].value.replaceAll('          ', '')
   codeBlock.innerHTML = ''
   const element = document.createElement('div')
   codeBlock.appendChild(element)
   const yasgui = new Yasgui(element, {
   })
   const currentTab = yasgui._tabs[Object.keys(yasgui._tabs)[0]]
   currentTab.setQuery(code)
   currentTab.query()
   currentTab.yasqe.display.wrapper.style.height = code.split('\n').length * 36 + 'px'
   currentTab.show()
}

location.hash = hash

let deck = new Reveal({ 
   hash: true,
   margin: 0.00,
   controlsTutorial: false,
 })
deck.initialize()