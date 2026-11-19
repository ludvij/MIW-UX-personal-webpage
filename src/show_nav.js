const shownav = () => {
	const nav = document.getElementsByTagName('nav')[0]

	if (nav.classList.contains('nav-open'))
	{
		nav.classList.remove('nav-open')
	}
	else
	{
		nav.classList.add('nav-open')
	}

}