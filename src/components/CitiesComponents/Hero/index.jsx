import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero' className={styles.hero}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.title}>
            <h1>استكشف عالم <br />   المدينة المنورة </h1>
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
            <Link href={'#cards'}>
              <p>تعرف الآن</p>
              <div className={styles.icon_container}>
                <IoIosArrowDown />
              </div>

            </Link>
          </div>
        </div>
      </div>


      {/* <div className={styles.location}>
        <IoLocationOutline />

        <p>المدينة المورة</p>
      </div> */}
    </section>
  )
}

export default Hero