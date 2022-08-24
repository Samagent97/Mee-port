import React, { useState, useEffect } from 'react'
// import stand from '../../assets/work1.png'
import Award from '../../assets/work7.png'
import './About.css'
function About() {
  //const [pics , setPics] = useState(stand)
  const [imgCounter, setImgCounter] = useState(0)
const myPics= ["work1.png","work2.png","work3.png","work4.png","work5.png","work6.png","work7.png","work8.png","work9.png"]
// const moveImages = () =>{
  useEffect(()=>{
    setInterval(()=>{
      setImgCounter((imgCounter)=>{
        if (imgCounter=== (myPics.length -1) ){
          
          return 0;
        }
        return imgCounter + 1;
      })
    },3000)

  },[])

  

// }
// moveImages();
  return (
    <div className='a'>About
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={require(`../../assets/${myPics[imgCounter]}`)} alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right">right
    <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          A big gee with the end goal of greatness.
        </p>
        <p className="a-desc">
         I'm a Frontend developer, Sytem admin , Linux administrator , Trainer , Mentor and Tech moron who loves going extra miles to make things work... i work under pressure and also give my best with Teams 
         i have worked on multile professional projects and also individual projects..this portfolio was done with 100% react app ...
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Indestrial Training Fund (ITF)/NECA training 2022</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About