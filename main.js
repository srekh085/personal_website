console.log('it works')
$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('clicked button')
        
        var email=$('.email').val()
        var subject=$('.subject').val()
        var message=$('.message').val()
        var statusElm=$('.status')
        statusElm.empty()
        
        if(email.length>6 && email.includes('@') && email.includes('.')){
            
        } else {
            event.preventDefault()
            statusElm.append('<div class="inval">Email is not valid</div>')
        }
         if(subject.length>=2){
            
        } else {
            event.preventDefault()
            statusElm.append('<div class="inval">Subject is not valid</div>')
         }
        if(message.length > 10){
            
        } else {
            event.preventDefault()
            statusElm.append('<div class="inval">Message is not valid</div>')
        }
    }) 
})