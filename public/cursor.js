
window.onload  =  () =>{
    const cursor = document.querySelector('.cursor');
    const compass = document.getElementById('compass');
    const hand = document.getElementById('hand');
    const employee = document.getElementById('employee');
    const chat = document.getElementById('chat');
    const profile = document.getElementById('profile');
    const projects = document.getElementById('projects');
    const services = document.getElementById('services');
    const hi = document.getElementById('hi');

    const cursorElements = [
        compass,
        hand,
        employee,
        chat,
        profile,
        projects,
        services,
        hi,
     
        
    ]

    function setActiveCursorElement ( element, cursor ){

        cursorElements.forEach( (cursorElement) => {
            if ( cursorElement === element ){
                cursorElement.style.display = 'block'
                cursor.style.width = '120px'
                cursor.style.height = '120px'
            }else{
                cursorElement.style.display = 'none'
            }
       })

    }

    document.addEventListener('mousemove', e => {
        
        cursor.setAttribute("style", "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;")
        if( e.target.classList.contains('project-img') ){
            setActiveCursorElement( compass , cursor )
        }else if (e.target.classList.contains('resume-button') ){
            setActiveCursorElement( employee , cursor )
        }else if (e.target.classList.contains('logo') ){
            setActiveCursorElement( hi , cursor )
        }else if (e.target.classList.contains('ouss-nav-projects') ){
            setActiveCursorElement( projects , cursor )
        }else if (e.target.classList.contains('ouss-nav-about') ){
            setActiveCursorElement( profile , cursor )
        }else if (e.target.classList.contains('ouss-nav-contact') ){
            setActiveCursorElement( chat , cursor )
        }else if (e.target.classList.contains('ouss-nav-services') ){
            setActiveCursorElement( services , cursor )
        }else {
            cursorElements.forEach ( (cursorElement)  => cursorElement.style.display = 'none' )
        }
        
    })
    
    document.addEventListener('click', e => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });
}
