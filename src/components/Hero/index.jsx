import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section id='hero' className={styles.hero}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.title}>
            <h1>استكشف عالم <br /> الجمال  في المملكة</h1>
            <div className={styles.shape}>
              <Image
                src="/assets/svgs/text_shape.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={styles.btn_container}>
            <button>
              <p>تعرف الآن</p>
              <div className={styles.icon_container}>
                <IoIosArrowDown />
              </div>

            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero