# Dieline Bot

## Goal
From when I start use Adobe Illustrator to design logos, packaging design, etc. I noticed there're really some patterns in the work processes(or just me?!), so, I'm trying to make a bot to help to do the repeative work, :)

Even most of information about Adobe [CEP(Common Extensibility Platform)](https://github.com/Adobe-CEP) only focus on the Photoshop, but thanks to the Adobe, their creative suits DOM interfaces self-explained well, so, let's rock it.

## Requirements
* HTML, CSS, JavaScript
* Adobe Illustrator CC (CEP6.0)

## How to use it?

### Enable loading of unsigned extensions
It's still under development, not ready for package and install for now, at this moment, try `Player Debug Mode` for now, check this out!
[Running and Debuging your Extension](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/creativesuite/pdfs/CC14_Extension_SDK.pdf#page=10)

### Put the extension source in the right folder
#### Mac
`/Library/Application Support/Adobe/CEP/extensions/`

#### Windows
`C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\`

### Try it
Open your Adobe Illustrator, check the menu under `Windows` > `Extensions` > `Dieline Bot`, click, and enjoy it.

If nothing shows up, the extensions wasn't loaded.

## References
### Tutorials
* [CEP 5 Super Mega Guide: Extending Adobe Apps With HTML5 + Node.js](http://aphall.com/2014/08/cep-mega-guide-en/)
* [零基础的 PhotoShop CEP 6 开发教程](http://www.jianshu.com/p/48b48c9f0b0a)
* [Davide Barranca's Blog](http://www.davidebarranca.com/)

### News and Resources
* [Introducing CEP5](http://blogs.adobe.com/cssdk/2014/04/introducing-cep-5.html)
* [Introducing CEP5.2 - now available](http://blogs.adobe.com/cssdk/2014/10/introducing-cep-5-2-now-available.html)
* [Introducing CEP6](http://blogs.adobe.com/cssdk/2015/06/introducing-cep-6.html)
* [CEP-Resources](https://github.com/Adobe-CEP/CEP-Resources)