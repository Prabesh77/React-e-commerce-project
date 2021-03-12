import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container banner">
					<div className="text">
						<h2>
							Get the <span>Best Deal</span>
						</h2>
						<h2>With Us</h2>
						<button>Contact Us</button>
					</div>
				</div>
				<div className="py-3">
					<div className="container">
						<Title name="Our" title="Products" />
						<div className="row">
							<ProductConsumer>
								{(value) => {
									return value.products.map((product) => {
										return <Product key={product.id} product={product} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
			// <Product />
		);
	}
}
