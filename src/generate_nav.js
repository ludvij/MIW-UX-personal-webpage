import nav_map from './nav_map.json' with {type: 'json'}


export function generate_nav() {
	const url = window.location.href
	const nav = document.createElement('nav')
	for(let entry in nav_map)
	{
		const a = document.createElement('a')
		a.accesskey = nav_map[entry].accesskey
		a.textContent = nav_map[entry].text
		if (url.includes(entry) || !url.includes('html') && entry == 'index.html')
		{	
			a.classList.add('nav_active')
		}
		else
		{
			a.href = entry
		}
		nav.append(a)
	}
	document.body.insertBefore(nav, document.body.firstChild)
}
document.addEventListener("DOMContentLoaded", function () {
    generate_nav()
})
