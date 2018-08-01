require('normalize.css/normalize.css');
require('styles/App.css');
var imageDatas=require ('../data/imageDatas.json')
import React from 'react';


//获取图片的相关数据，利用自调用函数将图片信息转化为路径信息。
imageDatas=(function getImageURL(imageDataArr){
	for(var i=0,j=imageDataArr;i<j;i++){
		var singleImageData=imageDataArr[i];
		singleImageData.imageURL=require('../images/'+singleImageData.fileName)
		imageDataArr[i]=singleImageData;
	}
	return imageDataArr;
  console.log(imageDataArr)
})(imageDatas)
class AppComponent extends React.Component {
  render() {
    return (
     <select className="stage">
        <select className="img-sec">
      
        </select>
        <nav className="controller-nav">
        </nav>
     </select>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
