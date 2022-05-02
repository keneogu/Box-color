import React from 'react'
import './styles/Header.css'

const Header = ({clickHandle}) => {
	return (
		<div className="header d-flex justify-content-between p-2 bg-secondary text-white">
			<div className="head-title text-uppercase">
				<strong>Box Color</strong>
			</div>
			<div className="head-list list-unstyled d-flex justify-content-between">
				<li className='head-li blue1 pr-5 text-white w-100' onClick={()=>{clickHandle('blue')}}>Blue</li>
				<li className='head-li red1 pr-5 text-white w-100' onClick={()=>{clickHandle('red')}}>Red</li>
				<li className='head-li brown1 pr-3 text-white w-100' onClick={()=>{clickHandle('brown')}}>Brown</li>
			</div>
		</div>
	)
}

export default Header
