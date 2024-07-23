import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7342700680513060884.jpeg?lk3s=a5d48078&nonce=79529&refresh_token=cf078b42df77f41c6f0ca15418506597&x-expires=1721876400&x-signature=ebI05gpIx4Xbcfb5IxwpSaGlDjM%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>vscode</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Visual Studio Code</p>
            </div>
        </div>
    );
}

AccountItem.prototype = {
    lable: PropTypes.string.isRequired,
};

export default AccountItem;
