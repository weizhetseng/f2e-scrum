import { useLayoutEffect, useRef } from 'react'
import Layout from '../layout'
import gsap from 'gsap'
import hole from '../assets/image/role/hole.png'
import role from '../assets/image/role/role_po.png'
import roleLight from '../assets/image/role/role_po_light.png'

function QuestionOne() {
  const progressRef = useRef<HTMLDivElement | null>(null)
  const img1Ref = useRef<HTMLImageElement | null>(null)
  const img2Ref = useRef<HTMLImageElement | null>(null)
  const img3Ref = useRef<HTMLImageElement | null>(null)

  useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      progressRef.current,
      { width: '1%' },
      { width: '17.5%', duration: 0.6, ease: 'linear' }
    )
      .fromTo(
        img1Ref.current,
        { width: '0px', clipPath: 'inset(0 50% 0 50%)' },
        {
          width: '324px',
          clipPath: 'inset(0 0% 0 0%)',
          duration: 0.4,
        },
        '>'
      )
      .fromTo(
        [img2Ref.current, img3Ref.current],
        { translateY: '-110%' },
        { translateY: 0, duration: 0.4, ease: 'power2.out' }
      )
      .to(
        img3Ref.current,
        {
          scaleY: 1.1,
          duration: 0.3,
          transformOrigin: 'top center',
          ease: 'power2.out',
        },
        '<'
      )
      .to(img3Ref.current, {
        scaleY: 1,
        duration: 0.3,
        transformOrigin: 'top center',
        ease: 'power2.out',
      })
  }, [])

  return (
    <Layout>
      <div className="flex-1 w-full h-full relative overflow-hidden bg-main bg-no-repeat bg-cover animate-fadeIn">
        <div className="w-full h-3 bg-primary_green z-20 relative">
          <span ref={progressRef} className="h-full bg-progress absolute top-0 left-0"></span>
        </div>
        <div className="w-[467px] relative flex items-center justify-center -translate-x-10 mt-5">
          <img ref={img1Ref} src={hole} alt="" className="h-20 object-contain" />
          <img ref={img2Ref} src={roleLight} alt="" className="absolute top-2 w-full" />
          <img ref={img3Ref} src={role} alt="" className="absolute top-2 w-[70%]" />
        </div>
      </div>
    </Layout>
  )
}

export default QuestionOne
