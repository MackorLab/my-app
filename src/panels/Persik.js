import React from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";


//import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { Panel, PanelHeader, Button, PanelHeaderBack, Header, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 198236346, "key": "dBuBKe1kFcdemzB"});

import persik from '../img/Moscow.jpg';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Вернуться
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>








			<div className="text">
				<h1>Местное время:</h1>
				<h2>-- {new Date().toLocaleTimeString()} --</h2>
			</div>


			




	</Panel>
);



Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
