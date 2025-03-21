var videoContainer = document.querySelector("#vid-cont");
var video = document.querySelector("#vid-cont video")
var vidcrsr =document.querySelector("#vid-crsr")


var flag = 0




function loderanimation(){
    gsap.from("#line-num",{
        opacity:0,
        duration:0.6 ,
        delay:1.5,
    }
    )
    gsap.from("#wait #h3",{
        opacity:0,
        delay:2,
    
    })
    
    var tl =  gsap.timeline()
    tl.from(".line h1",{
        y:155,
        stagger:0.25,
        duration:0.6 ,
        delay:0.5,      
    })
    
    tl.from(".line h2",{
        opacity:0,
        duration:0.6 ,
        delay:0.5,      
    })
    tl.to("#line-num",{
        // opacity:0,
        onStart: function(){
            var h5timer= document.querySelector("#line-num h5")
            var grow = 0
            setInterval(function(){
            if (grow<100){
                grow++
                h5timer.innerHTML= grow
            }
            else{
            h5timer.innerHTML= grow
            }
    },30)
    
    
        }
    })
    tl.to(".line h2",{
        animationName: "anime",
        
    
    })
    tl.to("#loder",{
        opacity: 0,
        duration: 0.5, // after work make it o.5
        delay: 2.9,  // afeter work make it 2.9
        onComplete: function() {
                document.getElementById("loder").style.display = 'none'; // Hide the loader completely
    }
    })
    tl.from("#page1",{
        opacity:0,
        y:1200,
        duration:1,
    
    })

    tl.from("#hero-1 h1,#hero-2 h1,#hero-3 h2,#hero-4 h1",{
        y:150,
        stagger:0.2,
        lazy: false
    })
    tl.from("#hero-1 ,#page2",{
        opacity:0,
     
    },"-=1.3") //"-=1.2" this helps to start this animation ahade of its time in the main timeline 


    tl.from("#nav",{
       opacity:0,
    })
    
    
    
    
    
}
function cursorAnimation(){

    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
           x:dets.x,
           y:dets.y,
           // delay:0.001,
        })
   })
   
   
   Shery.makeMagnet("#nav-part2 h4", {});
   
}
function SheryAnimation(){
    Shery.imageEffect(".img-div",{
        style:5,
        config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":0.68,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749691738595},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.14,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
        
    })
}
function palypause (){
    videoContainer.addEventListener("click",function(){
        if(flag===0){
            video.play()
            video.style.opacity=1
            vidcrsr.innerHTML='<i class="ri-pause-line"></i>'
            gsap.to("#vid-crsr",{
            scale:0.4,
            })
            flag=1
        
        }else{
            video.pause()
            video.style.opacity=1
            vidcrsr.innerHTML='<i class="ri-play-fill"></i>'
            gsap.to("#vid-crsr",{
            scale:1,
        })
        flag=0
        }
    
       
    })
    
    
    videoContainer.addEventListener("mouseenter", function() {
      videoContainer.addEventListener("mousemove", function(dets) {
        gsap.to("#crsr", {
          opacity:0,
        });
    
        gsap.to("#vid-crsr", {
          left: dets.x - 570,
          y: dets.y - 300
        });
    
      });
    });
    
    videoContainer.addEventListener("mouseleave", function() {
      gsap.to("#crsr", {
        opacity:1,
      });
    
      gsap.to("#vid-crsr", {
        left: "70%",
        top: "-15%"
      });
    });
    
}

loderanimation()
cursorAnimation()
SheryAnimation()
palypause ()


document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x: dets.x,
        y: dets.y,

    })
})

document.querySelector("#hero-3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1,
    })
})
document.querySelector("#hero-3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0,
    })
})