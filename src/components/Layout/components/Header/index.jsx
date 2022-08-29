import styles from './Header.module.scss'
import Game from '../../../.././assets/images/game.svg'
import Browse from '../../../.././assets/images/browse.svg'
import Githubcat from '../../../.././assets/images/githubcat.svg'
import Cart from '../../../.././assets/images/cart.svg'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Header() {
    return ( 
    <header className={cx('wrapper')}>
        <div classname={cx('inner')}>
            <div className={cx('header_left')}>
                <div className={cx('game')}>   
                    <img src={Game} className={cx('icon')} alt="gg"/>
                    <h3 className={cx('one_row')}>Game Store</h3>
                </div>
                <div className={cx('browse')}>   
                    <img src={Browse} className={cx('icon')} alt="gg"/>
                    <h3 className={cx('one_row')}>Browse Store</h3>
                </div>
            </div>
            <div className={cx('header_right')}>
                <div className={cx('githubcat')}>   
                    <img src={Githubcat} className={cx('icon')} alt="gg"/>
                    <h3 className={cx('one_row')}>gianlucajahn</h3>
                </div>
                <div className={cx('cart')}>   
                    <img src={Cart} className={cx('icon')} alt="gg"/>
                    <h3 className={cx('one_row')}>Cart:0</h3>
                </div>
            </div>

        </div>
    </header> );

}

export default Header;