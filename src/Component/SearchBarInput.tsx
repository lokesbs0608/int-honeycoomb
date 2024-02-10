import React from 'react';
import styles from './styles.module.scss';
import Icon from '../assets/img/search-normal.png'

const SearchBarInput = () => {
    return (
        <div className={styles.Search_bar_input_container}>
            <div className="container">
                <input type="text" id="search" placeholder='Search Here' />
                <span className="ms">
                    <img src={Icon} width={'15px'} height={'15px'} />
                </span>
            </div>
        </div>
    )
}

export default SearchBarInput
