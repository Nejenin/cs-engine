cs.objects['obj_build'] = {
   depth: 100,
   create: function(){

   },
   step: function(){
      if(!cs.global.build.on) return

      //Draw Target
      var mx = cs.mouse.x + cs.camera.x;
      var my = cs.mouse.y + cs.camera.y;
      mx -= mx % 16; my -= my % 16

      var obj = cs.objects[cs.global.build.obj]
      cs.draw.setColor('rgba(100, 190, 120, 0.5)')
      cs.draw.rect(mx, my, obj.width, obj.height, true)

      //Draw lines
      var verticalLineCount = cs.room.width/16
      for(var i = 0 ; i < verticalLineCount; i++){
         cs.draw.line(i*16, 0, i*16, cs.room.height)
      }

      var horizontalLineCount = cs.room.height/16
      for(var i = 0 ; i < verticalLineCount; i++){
         cs.draw.line(0, i*16, cs.room.width, i*16)
      }

      this.touch.check(0, 0, cs.room.width, cs.room.height)
      if(this.touch.up && mx){
         cs.obj.create(cs.global.build.obj, mx, my)
      }
   }
}