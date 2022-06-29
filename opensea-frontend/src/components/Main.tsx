import css from './css/main.module.css';
import bannerImage from '../images/banner_image.jpg';
import doopIcon from '../images/dooplicator.jpg';
import {MdPlayCircle as PlayIcon} from 'react-icons/md';

const Main = () => {
  return (
    <main className={css.main}>
        <section className={css.bannerContainer}>
          <div className={css.bannerCover}></div>
          <div className={css.bannerContent}>
            <div>
              <h1>Discover, collect, and sell extraordinary NFTs</h1>
              <p>OpenSea is the world's first and largest NFT marketplace</p>
              <div>
                <a>Explore</a>
                <a>Create</a>
              </div>
              <a><PlayIcon /> <span>Learn more about OpenSea</span></a>
            </div>
            <a>
              <img src={bannerImage} alt="Dooplicator"/>
              <div>
                <img src={doopIcon} alt="doopler" />
                <div>
                  <span>Dooplicator</span>
                  <span>by Doodles</span>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className={css.secondSection}>
          <a style={{backgroundImage:'url(./images/home-banner.webp)'}}>
              <span>Solana is in Beta OpenSea</span>
              <span>Explore</span>
          </a>
        </section>
    </main>
  )
}

export default Main