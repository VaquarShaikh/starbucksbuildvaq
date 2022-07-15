import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuHeader.css'

function MenuHeader() {
    const [index, setIndex] = useState(0)

    return (
        <div className='menuHeader'>
            <div className='menuHeader__links'>
                <Link
                    to=""
                    className={`${index === 0 && 'menuHeader__link--active'}`}
                    onClick={() => setIndex(0)}
                >
                    All products
                </Link>
                <Link
                    to='/menu/featured'
                    className={`${index === 1 && 'menuHeader__link--active'}`}
                    onClick={() => setIndex(1)}
                >
                    Featured
                </Link>
                <Link to="">Previous Orders</Link>
                <Link to="">Favorite Products</Link>
            </div>
        </div>
    )
}

export default MenuHeader
