//var model = Model({resourceName:'Message'})
window.Model = function(options){
  let resourceName = options.resourceName //资源名字
  return {
    init: function(){
      var APP_ID = 'amKfoP4kMJ9hFYIhvr8fM8RW-gzGzoHsz';
      var APP_KEY = 'eIRwzzyRHpUYpINENTdxIOhB';
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch: function(){ 
      var query = new AV.Query(resourceName);
      return query.find() // Promise 对象
    },
    // 创建数据
    save: function(object){
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object)
    }
  }
}

