import styles from './Home.module.scss'
import videoHome from '../../assets/images/pyke.mp4'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('inner')}>
                <video autoPlay loop muted className={cx('home_video')}>
                    <source type="video/mp4" src={videoHome} />
                </video>
            </div>
        </div>
    )
}

export default Home;