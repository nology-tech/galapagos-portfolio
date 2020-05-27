const needMoreEighties = () => {
	let itsTheEighties = document.getElementsByClassName('eighties');
	if (itsTheEighties.classList.contains('offSwitch')) {
		itsTheEighties.classList.remove('offSwitch');
	} else {
		itsTheEighties.classList.add('offSwitch');
	}
	}