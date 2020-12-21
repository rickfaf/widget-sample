const div = document.createElement('div')
div.style.display = 'none'


// Create Iframe =====================>
const iframeHtml = document.createElement('iframe')
iframeHtml.style.display = "block"
iframeHtml.style.height = "60px"
iframeHtml.style.marginBottom = '10px'
iframeHtml.src = 'http://localhost:4400/iframe.html'
// Create Iframe =====================>


// Create Form
const form = document.createElement('form')

const input = document.createElement('input')
input.type = 'text'
input.name = 'message'
input.placeholder = 'Enter message'

const btnSubmit = document.createElement('button')
btnSubmit.type = 'submit'
btnSubmit.innerText = 'Click to send'

form.append(input, btnSubmit)

form.onsubmit = () => {
  // const iframeWin = window.frames.iframe
  const msg = form.message.value
  // console.log('Submit', msg, iframeHtml)
  iframeHtml.contentWindow.postMessage(msg, 'http://localhost:4400')

  // setTimeout(()=>{
  //   console.log('timeout')
  // }, 10000)
  return false
}
// Create Form

// Append form and iframe to div 
div.append(form, iframeHtml)

// Append div to document body
document.body.appendChild(div)


// Button to show widget
const button = document.createElement('button')
button.type = 'button'
button.innerText = 'Show Widget'
document.body.appendChild(button)
button.onclick = () => {
  
  if (div.style.display === 'none') {
    div.style.display = 'block'
    button.innerText = 'Hide Widget'
  } else {
    input.value = ''
    div.style.display = 'none'
    button.innerText = 'Show Widget'
  }
}
