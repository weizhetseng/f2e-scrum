import darkLeaf_l from '../assets/image/bg/bg_leafDark_1_l.png'
import darkLeaf_b from '../assets/image/bg/bg_leafDark_2_b.png'
import darkLeaf_r from '../assets/image/bg/bg_leafDark_3_r.png'
import darkLeaf_t from '../assets/image/bg/bg_leafDark_4_t.png'
import leafTint_lt from '../assets/image/bg/bg_leafTint_1_lt.png'
import leafTint_lb from '../assets/image/bg/bg_leafTint_2_lb.png'
import leafTint_t from '../assets/image/bg/bg_leafTint_3_t.png'
import leafTint_rb from '../assets/image/bg/bg_leafTint_4_rb.png'
import logo from '../assets/image/logo/logo_hole_txt.png'
import purpleDot from '../assets/image/logo/logo_dot_purple.png'
import redDot from '../assets/image/logo/logo_dot_red.png'
import yellowDot from '../assets/image/logo/logo_dot_yellow.png'
import blueDot from '../assets/image/logo/logo_dot_blue.png'

import Layout from '../layout'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

function Index() {
  const leaf1Ref = useRef<HTMLImageElement | null>(null)
  const leaf2Ref = useRef<HTMLImageElement | null>(null)
  const leaf3Ref = useRef<HTMLImageElement | null>(null)
  const leaf4Ref = useRef<HTMLImageElement | null>(null)
  const darkLeaf1Ref = useRef<HTMLImageElement | null>(null)
  const darkLeaf2Ref = useRef<HTMLImageElement | null>(null)
  const darkLeaf3Ref = useRef<HTMLImageElement | null>(null)
  const darkLeaf4Ref = useRef<HTMLImageElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const secondBoxRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const secondRef = useRef<HTMLDivElement | null>(null)

  function handleClick() {
    const tl = gsap.timeline()

    tl.to(mainRef.current, { opacity: 0, display: 'none', duration: 0.8 })
      .to(leaf1Ref.current, { x: '100%', duration: 0.7 }, '+=0.3')
      .to(leaf2Ref.current, { x: '-100%', duration: 0.7 }, '<')
      .to(leaf3Ref.current, { y: '100%', duration: 0.7 }, '<')
      .to(leaf4Ref.current, { y: '-100%', duration: 0.7 }, '<')

      .fromTo(
        secondBoxRef.current,
        { opacity: 0, display: 'none' },
        { opacity: 1, display: 'flex', duration: 0.5 },
        '>'
      )
      .fromTo(
        textRef.current,
        { height: 0, overflow: 'hidden' },
        { height: '160px', duration: 0.5 }
      )
      .fromTo(btnRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '+=0.3')
  }

  const navigate = useNavigate()

  function nextPage() {
    const tl = gsap.timeline()
    tl.to(secondRef.current, { opacity: 0, duration: 0.8 })
      .to(darkLeaf1Ref.current, { y: '100%', duration: 0.7 }, '+=0.3')
      .to(darkLeaf2Ref.current, { y: '-100%', duration: 0.7 }, '<')
      .to(darkLeaf3Ref.current, { x: '-100%', duration: 0.7 }, '<')
      .to(darkLeaf4Ref.current, { x: '100%', duration: 0.7 }, '<')
      .call(() => {
        navigate('/question_one')
      })
  }

  useEffect(() => {
    const tl = gsap.timeline()
    return () => {
      tl.kill()

      gsap.killTweensOf([
        leaf1Ref,
        leaf2Ref,
        leaf3Ref,
        leaf4Ref,
        darkLeaf1Ref,
        darkLeaf2Ref,
        darkLeaf3Ref,
        darkLeaf4Ref,
        mainRef,
        secondBoxRef,
        textRef,
        btnRef,
        secondRef,
      ])
    }
  }, [])

  return (
    <Layout>
      <div className="flex-1 w-full h-full relative overflow-hidden">
        <div className="w-full h-3 bg-primary_green z-20 relative">
          <span className="transition-all duration-500 h-full bg-progress absolute top-0 left-0 w-[1%]"></span>
        </div>
        <div className="absolute w-full h-full">
          <img
            ref={darkLeaf1Ref}
            src={darkLeaf_b}
            alt=""
            className="absolute -bottom-10 left-[10%] w-1/2"
          />
          <img
            ref={darkLeaf2Ref}
            src={darkLeaf_t}
            alt=""
            className="absolute -top-3 w-3/4 right-[10%]"
          />
          <img ref={darkLeaf3Ref} src={darkLeaf_l} alt="" className="absolute left-0 h-full" />
          <img ref={darkLeaf4Ref} src={darkLeaf_r} alt="" className="absolute right-0 h-full" />
        </div>
        <div className="absolute w-full h-full z-10">
          <img
            src={leafTint_rb}
            alt=""
            ref={leaf1Ref}
            className="absolute right-0 w-2/5 bottom-0"
          />
          <img src={leafTint_lt} alt="" ref={leaf2Ref} className="absolute left-0 top-0 w-2/5" />
          <img src={leafTint_lb} alt="" ref={leaf3Ref} className="absolute left-0 bottom-0 w-1/2" />
          <img
            src={leafTint_t}
            alt=""
            ref={leaf4Ref}
            className="absolute top-0 right-[15%] w-1/2"
          />
        </div>
        <div ref={mainRef} className="w-full h-full flex relative items-center justify-center z-20">
          <div className="flex relative flex-col items-center justify-center">
            <img src={purpleDot} alt="" className="absolute top-0 left-0 animate-flash1" />
            <img src={redDot} alt="" className="absolute -left-25 top-[15%] animate-flash2" />
            <img src={yellowDot} alt="" className="absolute -left-15 animate-flash1" />
            <img src={blueDot} alt="" className="absolute top-[18%] left-[10%] animate-flash1" />
            <img src={logo} alt="" width="1000" />
            <img src={redDot} alt="" className="absolute right-0 top-0 animate-flash2" />
            <img src={purpleDot} alt="" className="absolute -right-30 top-[8%] animate-flash1" />
            <img src={yellowDot} alt="" className="absolute -right-20 top-[20%] animate-flash2" />
            <img src={blueDot} alt="" className="absolute top-[34%] right-[12%] animate-flash2" />
            <img src={blueDot} alt="" className="absolute bottom-8 left-[16%] animate-flash2" />
            <img src={blueDot} alt="" className="absolute bottom-8 left-[38%] animate-flash1" />
            <div className="flex flex-col gap-4 items-center absolute bottom-[10%] left-1/2 -translate-x-1/2">
              <p className="text-32 font-bold text-white">深入敏捷の村一探究竟</p>
              <button className="btn" onClick={handleClick}>
                <p className="relative z-10">進入村莊</p>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={secondRef}
          className="relative z-20 w-full h-full flex flex-col justify-center items-center gap-10"
        >
          <div
            ref={secondBoxRef}
            className="max-w-[908px] relative border-2 border-bright_green rounded-20 bg-rgbBlack backdrop-blur-md shadow-box px-25 py-30"
          >
            <div className="px-6 bg-bright_green absolute top-10 -left-2 text-2xl font-medium leading-loose after:w-0 after:h-0 after:content-[''] after:border-4 after:border-bright_green after:absolute after:bottom-0 after:left-0 after:translate-y-full after:border-b-transparent after:border-l-transparent">
              (謎之音)
            </div>
            <div className="h-40">
              <div ref={textRef} className="text-2xl font-medium text-white leading-relaxed">
                <p className="mb-10">
                  呦呼，歡迎進入
                  <span className="text-bright_green">「SCRUM 新手村」</span>
                  ，在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神 ！
                </p>
                <p>請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～</p>
              </div>
            </div>
          </div>
          <button ref={btnRef} type="button" className="btn" onClick={nextPage}>
            <p className="relative z-10">接受挑戰</p>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Index
