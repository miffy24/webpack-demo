var APP_ID = 'amKfoP4kMJ9hFYIhvr8fM8RW-gzGzoHsz';
var APP_KEY = 'eIRwzzyRHpUYpINENTdxIOhB';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(
    function (messages) {
    let array = messages.map((item)=> item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li')
      li.innerText =item.content
      let messageList =document.querySelector('#messageList')
      messageList.appendChild(li)
    })
  }
)


let myForm = document.querySelector('#postMessageForm')
postMessageForm.addEventListener('submit',function(e){
  e.preventDefault()
  let content =myForm.querySelector('input[name=content]').value
  var Message =AV.Object.extend('Message')
  var message =new Message()
  message.save({
    'content': content
  }).then(function(object) {
    window.location.reload()
    console.log(object)  
  })
})
  // //创建TestObject表
// var x = AV.Object.extend('chen');
// //在表中创建一行数据
// var o = new x();
// //数据内容是 words: 'Hello World!'
// //如果成功则  alert('LeanCloud Rocks!');
// o.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })