const Comics = {};

const COMIC_URLS = [
  // 'https://xkcd.com/',
  // 'http://threewordphrase.com/index.htm',
  // 'https://www.hs.fi/viivijawagner/',
  
]

Comics.init = ({container}) => {

  // Add an iframe to the document
  var iframe = document.createElement("div");
  iframe.setAttribute('src', COMIC_URLS[0]);
  iframe.setAttribute('style', 'width: calc(100vw - 100px); background-image: url('+COMIC_URLS[0]+'); background-size:contain; background-repeat:no-repeat; height: calc(100vh - 150px)')
  document.querySelector(container).appendChild(iframe);
  
  var index= 0;

function changecomics(){
  index = index+1;
  if (index >= COMIC_URLS.length){
    index=0;
  }


  iframe.setAttribute('style', 'width: calc(100vw - 100px); background-image: url('+COMIC_URLS[index]+'); background-size:contain; background-repeat:no-repeat; background-position:center; height: calc(100vh - 150px)')
}
function Pausefunction(){
  clearInterval(window.interval); 
}
function Unpausefunction(){
  window.interval = setInterval(changecomics, 3000);
}
function redirectfunction(){
  location.replace("http://www.hs.fi/fingerpori")
}
function prevcomic(){
  index = index-1;
  if (index < 0){
    index=3;
  }
  
  iframe.setAttribute('style', 'width: calc(100vw - 100px); background-image: url('+COMIC_URLS[index]+'); background-size:contain; background-repeat:no-repeat; background-position:center; height: calc(100vh - 150px)')
}
document.querySelector("#redirect").addEventListener("click", function(){
  redirectfunction()
})

document.querySelector("#next").addEventListener("click", function(){
  changecomics()


})
document.querySelector("#mybutton").addEventListener("click", function(){
  Pausefunction()


})
document.querySelector("#unpause").addEventListener("click", function(){
  Unpausefunction()


})
document.querySelector("#prev").addEventListener("click", function(){
  prevcomic()
})
window.addEventListener("keyup", function(event){
  if (event.keyCode === 80){
    event.preventDefault();
    document.getElementById("mybutton").click();
  }
  if (event.keyCode === 8){
    event.preventDefault();
    document.getElementById("prev").click();
  }
  if (event.keyCode === 16){
    event.preventDefault();
    document.getElementById("next").click();
  }
  if (event.keyCode === 79){
    event.preventDefault();
    document.getElementById("unpause").click();
  }
  if (Event.keyCode === 82){
    event.preventDefault();
    document.getElementById("redirect").click();
  }


});

fetch('/feeds/fingerpori.html').then(response => {
  
  response.text().then((rss) => {
    var domParser = new DOMParser();
    var doc = domParser.parseFromString(rss, "text/html");
    doc.querySelectorAll('guid').forEach(function(guid){
      (COMIC_URLS.push(guid.innerHTML));
  
  });
  
  })
})
fetch('/feeds/xkcd.html').then(response => {
  
  response.text().then((rss) => {
  var domParser = new DOMParser();
  var doc = domParser.parseFromString(rss, "text/html");
  doc.querySelectorAll('img').forEach(function(guid){
  (COMIC_URLS.push(guid.getAttribute("src")));
  
  });
  
  })
})
/* var rss = `<?xml version="1.0" encoding="ISO-8859-1"?><rss version="2.0"><channel><title>Fingerpori RSS</title><link>http://www.hs.fi/fingerpori/</link><description>Fingerpori Helsingin Sanomista</description><language>en-us</language><copyright>Copyright (C) 2017 darkball.net</copyright><item><title>Fingerpori 2020-01-23</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/16085b5a33f246dfb141b2019d9e79d2.jpg" />]]></description><pubDate>Thu, 23 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/16085b5a33f246dfb141b2019d9e79d2.jpg</guid></item><item><title>Fingerpori 2020-01-22</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/8015f82250ca42feb9c4f6162176bb8d.jpg" />]]></description><pubDate>Wed, 22 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/8015f82250ca42feb9c4f6162176bb8d.jpg</guid></item><item><title>Fingerpori 2020-01-21</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/586c577efd1e4142a747bcf9605ee63c.jpg" />]]></description><pubDate>Tue, 21 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/586c577efd1e4142a747bcf9605ee63c.jpg</guid></item><item><title>Fingerpori 2020-01-20</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/61b11c801ccd478098eb0ab92b1b9788.jpg" />]]></description><pubDate>Mon, 20 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/61b11c801ccd478098eb0ab92b1b9788.jpg</guid></item><item><title>Fingerpori 2020-01-18</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/4630fc523c664fa6b92046b47e60356f.jpg" />]]></description><pubDate>Sat, 18 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/4630fc523c664fa6b92046b47e60356f.jpg</guid></item><item><title>Fingerpori 2020-01-17</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/84387264379645329dce17c545fd4a91.jpg" />]]></description><pubDate>Fri, 17 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/84387264379645329dce17c545fd4a91.jpg</guid></item><item><title>Fingerpori 2020-01-16</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/d44ae1a5101b46389408bd64959e9530.jpg" />]]></description><pubDate>Thu, 16 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/d44ae1a5101b46389408bd64959e9530.jpg</guid></item><item><title>Fingerpori 2020-01-15</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/d21602f4c3e84132b7bf812296d64be9.jpg" />]]></description><pubDate>Wed, 15 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/d21602f4c3e84132b7bf812296d64be9.jpg</guid></item><item><title>Fingerpori 2020-01-14</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/2e7097454bcb47449f40adc09a73086a.jpg" />]]></description><pubDate>Tue, 14 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/2e7097454bcb47449f40adc09a73086a.jpg</guid></item><item><title>Fingerpori 2020-01-13</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/06fed9e1cd10443787cd00123ea89122.jpg" />]]></description><pubDate>Mon, 13 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/06fed9e1cd10443787cd00123ea89122.jpg</guid></item><item><title>Fingerpori 2020-01-11</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/8db6dfbd08e54f98929f1db3f01e8717.jpg" />]]></description><pubDate>Sat, 11 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/8db6dfbd08e54f98929f1db3f01e8717.jpg</guid></item><item><title>Fingerpori 2020-01-10</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/d31078eb09ac41caad89ce247a157e74.jpg" />]]></description><pubDate>Fri, 10 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/d31078eb09ac41caad89ce247a157e74.jpg</guid></item><item><title>Fingerpori 2020-01-09</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/89263a2936b048b382047c339e1b10c4.jpg" />]]></description><pubDate>Thu, 09 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/89263a2936b048b382047c339e1b10c4.jpg</guid></item><item><title>Fingerpori 2020-01-08</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/923bd107c2484f7d83f43835d64bad58.jpg" />]]></description><pubDate>Wed, 08 Jan 2020 02:30:01 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/923bd107c2484f7d83f43835d64bad58.jpg</guid></item><item><title>Fingerpori 2020-01-06</title><description><![CDATA[<img src="http://hs.mediadelivery.fi/img/1920/19250dd1780e47a6a930320f8fae8fbf.jpg" />]]></description><pubDate>Mon, 06 Jan 2020 02:30:02 +0200</pubDate><guid>http://hs.mediadelivery.fi/img/1920/19250dd1780e47a6a930320f8fae8fbf.jpg</guid></item></channel></rss>`

var domParser = new DOMParser();
var doc = domParser.parseFromString(rss, "text/html");
doc.querySelectorAll('guid').forEach(function(guid){
  // Täällä voitaisiin lisätä alla olevat linkit sarjakuvalistaan
  //COMIC_URLS
  (COMIC_URLS.push(guid.innerHTML));
  //console.log(guid.innerHTML);
});

var rss = `<?xml version="1.0" encoding="utf-8"?><rss version="2.0"><channel><title>xkcd.com</title><link>https://xkcd.com/</link><description>xkcd.com: A webcomic of romance and math humor.</description><language>en</language><item><title>Solar System Changes</title><link>https://xkcd.com/2258/</link><description>&lt;img src="https://imgs.xkcd.com/comics/solar_system_changes.png" title="&amp;quot;Actually, Jupiter already has a very impressive ring system!&amp;quot; --someone who knows Jupiter is within earshot" alt="&amp;quot;Actually, Jupiter already has a very impressive ring system!&amp;quot; --someone who knows Jupiter is within earshot" /&gt;</description><pubDate>Wed, 22 Jan 2020 05:00:00 -0000</pubDate><guid>https://xkcd.com/2258/</guid></item><item><title>Unsubscribe Message</title><link>https://xkcd.com/2257/</link><description>&lt;img src="https://imgs.xkcd.com/comics/unsubscribe_message.png" title="A mix of the two is even worse: 'Thanks for unsubscribing and helping us pare this list down to reliable supporters.'" alt="A mix of the two is even worse: 'Thanks for unsubscribing and helping us pare this list down to reliable supporters.'" /&gt;</description><pubDate>Mon, 20 Jan 2020 05:00:00 -0000</pubDate><guid>https://xkcd.com/2257/</guid></item><item><title>Bad Map Projection: South America</title><link>https://xkcd.com/2256/</link><description>&lt;img src="https://imgs.xkcd.com/comics/bad_map_projection_south_america.png" title="The projection does a good job preserving both distance and azimuth, at the cost of really exaggerating how many South Americas there are." alt="The projection does a good job preserving both distance and azimuth, at the cost of really exaggerating how many South Americas there are." /&gt;</description><pubDate>Fri, 17 Jan 2020 05:00:00 -0000</pubDate><guid>https://xkcd.com/2256/</guid></item><item><title>Tattoo Ideas</title><link>https://xkcd.com/2255/</link><description>&lt;img src="https://imgs.xkcd.com/comics/tattoo_ideas.png" title="The text ALL YOUR BASE ARE BELONG TO US with a lengthy footnote explaining that I got this tattoo in 2020 and not, as you may assume, 2001, but offering no further clarification." alt="The text ALL YOUR BASE ARE BELONG TO US with a lengthy footnote explaining that I got this tattoo in 2020 and not, as you may assume, 2001, but offering no further clarification." /&gt;</description><pubDate>Wed, 15 Jan 2020 05:00:00 -0000</pubDate><guid>https://xkcd.com/2255/</guid></item></channel></rss>`

var domParser = new DOMParser();
var doc = domParser.parseFromString(rss, "text/html");
doc.querySelectorAll('img').forEach(function(guid){
  (COMIC_URLS.push(guid.getAttribute("src")));
});
 */
window.interval = setInterval(changecomics, 3000)


  /* Todo:
    1. Resize the iframe to fill the whole page
    2. Change the comic every 30 seconds, Hint: setInterval
    3. Add a button that will prevent the comic from being changed (pause)
    4. Add a button to go to previous and next comic 
    5. Make the enter key to pause
  */
}

export default Comics;