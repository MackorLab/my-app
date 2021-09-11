import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Ваши</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Фамилия и Имя </Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}

			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}


		 {fetchedUser &&
		 <Group header={<Header mode="secondary">Город</Header>}>
			<Cell
			>

			{`${fetchedUser.city.title}`}
			</Cell>
	  	</Group>}

			{fetchedUser &&
			<Group header={<Header mode="secondary">VK_ID</Header>}>
				<Cell
				>
				{`${fetchedUser.id}`}
				</Cell>
				</Group>}




		
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
				Узнать время
				</Button>
			</Div>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
