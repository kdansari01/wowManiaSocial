// import Login from "../LoginPage/Login"
import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import "./right.scss"



const RightBar = () => {



  const container1 = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../AnimationData/43442-republic-day.json')
    })
  }, [])

  const container2 = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../AnimationData/94877-gift-box-animation.json')
    })
  }, [])
  return (
    <div className="rightBar">
      <div className="rightBarWraper" >
      <div className="rightSectionADS" ref={container2}></div>

        <div className="rightBarADS"  ref={container1}>
        </div>
      </div>
    </div>
  )
}

export default RightBar
