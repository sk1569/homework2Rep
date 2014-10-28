

var HelloWorldLayer = cc.Layer.extend({
	sprite:null,
	shapes:[], //지금까지 저장해둘것
	//0 원, 1,직선, 2,사각형  3,곡선의 원소 
	drawNode:null,
	listener:null,
	setcolor:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first\\
		this._super();
		this.setcolor= colors.green;
		
		var freeDraw = new cc.MenuItemImage(res.freeP_png,res.freeP_png,this.freef, this);
		freeDraw.attr({
			x: 40,
			y: this.height-30,
			anchorX: 0.5,
			anchorY: 0.5
		});		
		var menu1 = new cc.Menu(freeDraw);
		menu1.x = 0;
		menu1.y = 0;
		this.addChild(menu1, 1);
		
		var lineDraw = new cc.MenuItemImage(res.line_png,res.line_png,this.linef, this);
		lineDraw.attr({
			x: 40,
			y: this.height-100,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu2 = new cc.Menu(lineDraw);
		menu2.x = 0;
		menu2.y = 0;
		this.addChild(menu2, 1);
				
		
		var cycleDraw = new cc.MenuItemImage(res.cycle_png,res.cycle_png,this.cyclef, this);
		cycleDraw.attr({
			x: 40,
			y: this.height-170,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu3 = new cc.Menu(cycleDraw);
		menu3.x = 0;
		menu3.y = 0;
		this.addChild(menu3, 1);
		
		var recDraw = new cc.MenuItemImage(res.point4_png,res.point4_png,this.recf, this);
		recDraw.attr({
			x: 40,
			y: this.height-240,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu4 = new cc.Menu(recDraw);
		menu4.x = 0;
		menu4.y = 0;
		this.addChild(menu4, 1);
		

		var redDraw = new cc.MenuItemImage("res/red.png","res/red.png",this.redf, this);
		redDraw.attr({
			x: this.width-80,
			y: this.height-30,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu5 = new cc.Menu(redDraw);
		menu5.x = 0;
		menu5.y = 0;
		this.addChild(menu5, 1);
		
		
		var blueDraw = new cc.MenuItemImage("res/blue.png","res/blue.png",this.bluef, this);
		blueDraw.attr({
			x: this.width-80,
			y: this.height-100,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu6 = new cc.Menu(blueDraw);
		menu6.x = 0;
		menu6.y = 0;
		this.addChild(menu6, 1);
		
		var greenDraw = new cc.MenuItemImage("res/green.png","res/green.png",this.greenf, this);
		greenDraw.attr({
			x: this.width-80,
			y: this.height-170,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu7 = new cc.Menu(greenDraw);
		menu7.x = 0;
		menu7.y = 0;
		this.addChild(menu7, 1);

		var grayDraw = new cc.MenuItemImage("res/gray.png","res/gray.png",this.grayf, this);
		grayDraw.attr({
			x: this.width-80,
			y: this.height-240,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu8 = new cc.Menu(grayDraw);
		menu8.x = 0;
		menu8.y = 0;
		this.addChild(menu8, 1);

		var whiteDraw = new cc.MenuItemImage("res/white.png","res/white.png",this.whitef, this);
		whiteDraw.attr({
			x: this.width-80,
			y: this.height-310,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu9 = new cc.Menu(whiteDraw);
		menu9.x = 0;
		menu9.y = 0;
		this.addChild(menu9, 1);
		
		var cancleDraw = new cc.MenuItemImage("res/cancle.png","res/cancle.png",this.canclef, this);
		cancleDraw.attr({
			x: this.width-80,
			y: 40,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu10 = new cc.Menu(cancleDraw);
		menu10.x = 0;
		menu10.y = 0;
		this.addChild(menu10, 1);
		
		this.drawNode = new cc.DrawNode();
		this.addChild(this.drawNode);
	
		this.listener = new cc.EventListener.create({
		event:cc.EventListener.TOUCH_ONE_BY_ONE,
		swallowTouches:true,
		onTouchBegan:function(touch,event){
			event.getCurrentTarget().shapes.push("3",event.getCurrentTarget().setcolor);
			return true;
		},
		onTouchMoved:function(touch,event){
			var p1= touch.getPreviousLocation();
			var p2= touch.getLocation();
			event.getCurrentTarget().shapes.push(p1,p2);
			event.getCurrentTarget().drawNode.drawSegment(p1,p2,2,event.getCurrentTarget().setcolor);
			return true;
		},
		onTouchEnded:function(touch,event){
			event.getCurrentTarget().shapes.push("end");
			return true;
			}
		});
			
		cc.eventManager.addListener(this.listener,this);

		
		return true;
	},
	freef:function(){
			cc.eventManager.removeListener(this.listener);
			this.listener = new cc.EventListener.create({
				event:cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches:true,
				onTouchBegan:function(touch,event){
					event.getCurrentTarget().shapes.push("3",event.getCurrentTarget().setcolor);
					return true;
				},
				onTouchMoved:function(touch,event){
					var p1= touch.getPreviousLocation();
					var p2= touch.getLocation();
					event.getCurrentTarget().shapes.push(p1,p2);
					event.getCurrentTarget().drawNode.drawSegment(p1,p2,2,event.getCurrentTarget().setcolor);
					return true;
				},
				onTouchEnded:function(touch,event){
					event.getCurrentTarget().shapes.push("end");
					return true;
				}
			});

			cc.eventManager.addListener(this.listener,this);
	},	
	linef:function(){
		cc.eventManager.removeListener(this.listener);
		this.listener = new cc.EventListener.create({
			event:cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches:true,
			onTouchBegan:function(touch,event){
				event.getCurrentTarget().shapes.push("1",event.getCurrentTarget().setcolor);
				return true;
			},
			onTouchMoved:function(touch,event){
				return true;
			},
			onTouchEnded:function(touch,event){
				var p1 = touch.getStartLocation();
				var p2 = touch.getLocation();
				event.getCurrentTarget().shapes.push(p1,p2);
				event.getCurrentTarget().drawNode.drawSegment(p1,p2,2,event.getCurrentTarget().setcolor);
				return true;
			}
		});

		cc.eventManager.addListener(this.listener,this);
	},
	cyclef:function(){
		cc.eventManager.removeListener(this.listener);
		this.listener = new cc.EventListener.create({
			event:cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches:true,
			onTouchBegan:function(touch,event){
				event.getCurrentTarget().shapes.push("0",event.getCurrentTarget().setcolor);
				return true;
			},
			onTouchMoved:function(touch,event){
				return true;
			},
			onTouchEnded:function(touch,event){
				var p1 = touch.getStartLocation();
				var p2 = touch.getLocation();
				event.getCurrentTarget().shapes.push(p1,p2);
				event.getCurrentTarget().drawNode.drawCircle(p1, p1.x-p2.x ,360,360,false,2,event.getCurrentTarget().setcolor);
				return true;
			}
		});

		cc.eventManager.addListener(this.listener,this);
	},
	recf:function()
	{
		cc.eventManager.removeListener(this.listener);
		this.listener = new cc.EventListener.create({
			event:cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches:true,
			onTouchBegan:function(touch,event){
				event.getCurrentTarget().shapes.push("2",event.getCurrentTarget().setcolor);
				return true;
			},
			onTouchMoved:function(touch,event){
				return true;
			},
			onTouchEnded:function(touch,event){
				var p1 = touch.getStartLocation();
				var p2 = touch.getLocation();
				event.getCurrentTarget().shapes.push(p1,p2);
				event.getCurrentTarget().drawNode.drawRect(p1, p2 ,null,2,event.getCurrentTarget().setcolor);
				return true;
			}
		});

		cc.eventManager.addListener(this.listener,this);
	},
	whitef:function(){
		this.setcolor=colors.white;
	},
	redf:function(){
		this.setcolor=colors.red;
	},
	bluef:function(){
		this.setcolor=colors.blue;
	},
	greenf:function(){
		this.setcolor=colors.green;
	},
	grayf:function(){
		this.setcolor=colors.gray;
	},
	canclef:function(){
		if(this.shapes[this.shapes.length-1]!="end"){
			this.shapes.pop();
			this.shapes.pop();
			this.shapes.pop();
			this.shapes.pop();
		}
		else{
			this.shapes.pop();
			for(;this.shapes[this.shapes.length-1]!="3";)
				{
					this.shapes.pop();
				}

			this.shapes.pop();
			
		}
				
		this.drawNode.clear();
		
		
		
		for(var i = 0; i<this.shapes.length;){
			if(this.shapes[i]=="1")
			{
				this.drawNode.drawSegment(this.shapes[i+2],this.shapes[i+3],2,this.shapes[i+1]);
				i+=4;
			}
			else if(this.shapes[i]=="0")
			{
				this.drawNode.drawCircle(this.shapes[i+2], this.shapes[i+3].x-this.shapes[i+2].x ,360,360,false,2,this.shapes[i+1]);
				i+=4;
			}
			else if(this.shapes[i]=="2")
			{
				this.drawNode.drawRect(this.shapes[i+2],this.shapes[i+3] ,null,2,this.shapes[i+1]);
				i+=4;
			}
			else
			{
				i++;
				var col=this.shapes[i];
				i++;
				for(;this.shapes[i]!="end";i+=2)
				{
					this.drawNode.drawSegment(this.shapes[i],this.shapes[i+1],2,col);
				}
				i++;
			}
		
		}
	
	}

	
});

var HelloWorldScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);
	}
});

