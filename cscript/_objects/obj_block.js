cs.obj.load('obj_block', {
	create: function(){
		this.width = 16;
    	this.height = 16;
	},
	step: function(){
		cs.draw.sprite('spr_block', 0, this.x, this.y);
	}
})