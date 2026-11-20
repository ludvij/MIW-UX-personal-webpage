const shownav = () => {
	const nav = document.getElementsByTagName('nav')[0]
	const select = document.getElementById('i-lang')

	const button = document.getElementsByClassName('nav-button')[0]

	if (button.classList.contains('active'))
	{
		nav.classList.remove('nav-open')
		select.classList.remove('lang-open')
		button.classList.remove('active')
	}
	else
	{
		button.classList.add('active')
		nav.classList.add('nav-open')
		select.classList.add('lang-open')
	}


}