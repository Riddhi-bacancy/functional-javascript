  function getShortMessages(messages) {
      
	return messages.filter((msg)=>{
		return msg.message.length<50;
	
	}).map(function(msg){
		return msg.message});
}
    
    module.exports = getShortMessages


