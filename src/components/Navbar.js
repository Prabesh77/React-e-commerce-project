import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from "styled-components";
import logo from '../logo.png';

import { ProductConsumer } from '../context';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm px-sm-5">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="navbar-brand"
						style={{ height: '70px', width: '80px' }}
					/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Products
						</Link>
					</li>
				</ul>

				<ProductConsumer>
					{(value) => {
						const { cart } = value;

						return (
							<Link to="/cart" className="ml-auto">
								<div className="cart">
									My Cart <div className="red-top">{cart.length}</div>{' '}
									<i className="fas fa-shopping-cart"></i>
								</div>
							</Link>
						);
					}}
				</ProductConsumer>
			</nav>
		);
	}
}
