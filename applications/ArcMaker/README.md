# Adobe Illustrator CC Arc Marker

工作时候经常需要绘制弧线或者部分圆环，比如制作信息图，但在使用Illustrator时候操作不是很方便，所以制作了这个小插件用与辅助。

## 项目文件
* **arcMaker.jsx** 具体的实现模块，将其单独出来的原因是希望以后可以集成到CEP中去， :)
* **win.jsx** 简单的窗口，暂时未做输入验证。

## 如何使用
下载脚本文件到任意目录都可以。
打开Adobe Illustrator，File -> Script -> Other Script 找到你刚刚下载的文件，选择win.jsx，会弹出如下窗口：

![win](https://raw.githubusercontent.com/hexcola/arcmaker/master/img/01.png)

根据你的需求输入特定的值（暂时未做输入验证），点击OK

![arc](https://raw.githubusercontent.com/hexcola/arcmaker/master/img/02.png)

## 参考
* [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
* [Creating Arcs by Center, Radius, and Arc angle](https://forums.adobe.com/thread/801516)
* [How to create circle with Bézier curves?](http://stackoverflow.com/questions/1734745/how-to-create-circle-with-b%C3%A9zier-curves)
* [JS, get degrees from ratio via tan](http://stackoverflow.com/questions/15994325/js-get-degrees-from-ratio-via-tan)
* [Way to tell perfect circle from an ellipse?](https://forums.adobe.com/thread/792369?tstart=0)
* [贝塞尔曲线扫盲](http://www.html-js.com/article/1628)
* [Drawing a circle with Bézier Curves](http://www.whizkidtech.redprince.net/bezier/circle/)
* [Geometrical Arc to Bezier Curve](http://stackoverflow.com/questions/734076/geometrical-arc-to-bezier-curve)
