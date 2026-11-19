import nav_map from './nav_map.json' with {type: 'json'}


export function generate_nav() {
	const url = window.location.href
	const nav = document.createElement('nav')
	for(let entry in nav_map)
	{
		const data = nav_map[entry]
		const a = document.createElement('a')
		a.accesskey = data.accesskey
		a.href = data.href
		a.textContent = data['text']['es']

		if (url.includes(a.href) || !url.includes('html') && entry == 'Inicio')
		{	
			a.classList.add('nav-active')
		}


		for (let lang in data['text'])
		{
			if (url.includes(`/${lang}/`))
			{
				a.textContent = data[lang]
			}
		}

		if (url.includes('/en/'))
		{
			a.textContent = data['text']['en']
		}
		nav.append(a)
	}
	document.body.insertBefore(nav, document.body.children[2])
}


document.addEventListener("DOMContentLoaded", function () {
    generate_nav()
})
