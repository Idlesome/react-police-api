import React from "react";
import { Item, Button } from "semantic-ui-react";

const CrimeCard = (props) => {

	const { crime } = props;

	const handleClick = (e) => {
		props.toggleShowPage(crime)
		console.log(crime);
	}

	return (
		<Item>
			<Item.Content>
				<Item.Header >
					<strong>
						{crime.location.street.name}
					</strong>
				</Item.Header>
				<Item.Meta>
					<span>
						<br />
						<b>Category: {crime.category}
						</b>
						{crime.outcome_status &&
							<>
								<br />
								<br />
								Outcome {crime.outcome_status.date}: {crime.outcome_status.category}
							</>
						}
					</span>
				</Item.Meta>

			</Item.Content>
		</Item>
		);
}

export default CrimeCard;