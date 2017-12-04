

new Vue({
  el:"#el",
  data:{
    tasks:[],
    msg:'',
    cnt:0,
    ok:false
  },
  methods:{
    ajouter:function(){
      if(this.msg != ''){
      this.tasks.push(this.msg);
      this.msg='';
      this.cnt ++;
      this.ok=true;

    }
    },
    delet:function(index){
      this.tasks.splice(index,1);
      this.cnt --;
      if(this.cnt=== 0){this.ok=false;}

    },
    deletall:function(){
      this.tasks = [];
      this.cnt=0;
      this.ok=false;

    }
  }
});
