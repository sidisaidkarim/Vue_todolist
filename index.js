

new Vue({
  el:"#el",
  data:{
    tasks:[],
    msg:'',
    cmt:0,
    bt_visible:false
  },
  methods:{
    ajouter:function(){
      if(this.msg != ''){
      this.tasks.push(this.msg);
      this.msg='';
      this.cmt ++;
      this.bt_visible=true;

    }
    },
    delet:function(index){
      this.tasks.splice(index,1);
      this.cmt --;
      if(this.cmt=== 0){this.bt_visible=false;}

    },
    deletall:function(){
      this.tasks = [];
      this.cmt=0;
      this.bt_visible=false;

    }
  }
});
