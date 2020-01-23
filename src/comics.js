const Comics = {};

const COMIC_URLS = [
  'https://xkcd.com/',
  'http://threewordphrase.com/index.htm',
  'https://www.hs.fi/viivijawagner/',
  'https://www.hs.fi/fingerpori'
]

Comics.init = ({container}) => {

  // Add an iframe to the document
  var iframe = document.createElement("iframe");
  iframe.setAttribute('src', COMIC_URLS[0]);
  iframe.setAttribute('style', 'width: 2000px; height: 2000px;')
  document.querySelector(container).appendChild(iframe);
  
  var index= 0;

function changecomics(){
  index = index+1;
  if (index >= COMIC_URLS.length){
    index=0;
  }


  iframe.setAttribute('src', COMIC_URLS[index])
}

function prevcomic(){
  index = index-1;
  if (index < 0){
    index=3;
  }
  
 iframe.setAttribute('src', COMIC_URLS[index])
}
document.querySelector("#next").addEventListener("click", function(){
  changecomics()


})
document.querySelector("#prev").addEventListener("click", function(){
  prevcomic()
})


window.interval = setInterval(changecomics, 30000)


  /* Todo:
    1. Resize the iframe to fill the whole page
    2. Change the comic every 30 seconds, Hint: setInterval
    3. Add a button that will prevent the comic from being changed (pause)
    4. Add a button to go to previous and next comic 
    5. Make the enter key to pause
  */
}

export default Comics;