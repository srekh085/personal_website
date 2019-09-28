console.log('it works')
$(document).ready(function(){
    $('#submitbtn').click(function(event){
        console.log('clicked button')
        
        var email=$('#exampleFormControlInput2').val()
        var message=$('#exampleFormControlTextarea1').val()
        var statusElm=$('.status')
        statusElm.empty()
        
        if(email.length>6 && email.includes('@') && email.includes('.')){
            
        } else {
            event.preventDefault()
            statusElm.append('<div class="inval">Email is not valid</div>')
        }
        if(message.length > 10){
            
        } else {
            event.preventDefault()
            statusElm.append('<div class="inval">Message is not valid</div>')
        }
    })
})
