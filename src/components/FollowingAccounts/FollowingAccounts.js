import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

FollowingAccounts.prototype = {
    lable: PropTypes.string.isRequired,
};

export default FollowingAccounts;
