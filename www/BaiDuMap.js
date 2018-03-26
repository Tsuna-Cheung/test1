$(document).ready(function() { 
var map = new BMap.Map("Mcontainer");
// 创建地图实例  
var point = new BMap.Point(116.404, 39.915);
// 创建点坐标  
map.centerAndZoom(point, 15);
// 初始化地图，设置中心点坐标和地图级别 
var geolocation = new BMap.Geolocation();
// 开启SDK辅助定位
geolocation.enableSDKLocation();
geolocation.getCurrentPosition(function(r){
	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		var mk = new BMap.Marker(r.point);
		map.addOverlay(mk);
		map.panTo(r.point);
		alert('您的位置：'+r.point.lng+','+r.point.lat);
	}
	else {
		alert('failed'+this.getStatus());
	}})       

});