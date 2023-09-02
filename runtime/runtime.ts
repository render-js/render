import {isUnKnown} from "../core/utility/checkUtility";
import {PageController} from "../class/controller/pageController";
import {Render} from "../core/render/delivery";

//检查元素是否为基元素
export function renderHtml(collection:HTMLCollection, link:PageController):void
{
    //遍历element节点，判断是否为自定义标签
    for (let i:number = 0; i < collection.length; i++)
    {
        if (isUnKnown(collection[i].nodeName.toUpperCase()))
        {
            //自定义标签
            Render(Reflect.get(window,"tagLib").get(collection[i].nodeName.toUpperCase()),collection[i].parentNode,collection[i],link)
        }else {
            //非自定义标签，深度解析
            renderHtml(collection[i].children,link);
        }
    }
}

export function reloadPage():void{
    this.run();
}