import React from "react";
import styled from 'styled-components';

const Form = styled.div`
	form {
		width: 100%;
		display: flex;
	}
	.col {
		padding-right: 15px;
	}
	label {
		display: block;
	}
	input {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export default function SearchForm(props) {
	const { search, handleChange } = props
	return (
		<section className="search-form">
			<h3>Search by</h3>
			<Form>
				<form onSubmit={e => e.preventDefault()}>
					<div className="col">
						<label htmlFor="name">Name: </label>
						<input
							id="name"
							name="name"
							type="text"
							value={search.name}
							onChange={handleChange}
							placeholder="Search character name"
						/>
					</div>
					<div className="col">
						<label htmlFor="name">Gender: </label>
						<input
							id="gender"
							name="gender"
							type="text"
							value={search.gender}
							onChange={handleChange}
							placeholder="Search character gender"
						/>
					</div>
				</form>
			</Form>
		</section>
	);
}
