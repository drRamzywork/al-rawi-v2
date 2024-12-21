import Image from 'next/image'
import React from 'react';
import styles from './index.module.scss'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">

          <div className={styles.nav_container}>
            <div className={styles.icon_container}>
              <Image
                src="/assets/svgs/search.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/assets/svgs/logo.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.icon_container}>
              <Image
                src="/assets/svgs/langs.svg"
                alt="Vercel logomark"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar