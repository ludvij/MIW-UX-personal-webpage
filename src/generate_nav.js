import nav_map from './nav_map.json' with {type: 'json'}


export function generate_nav() {
	const url = $(location).attr('href');
	const tag_nav = $('<nav></nav>')
	for(let entry in nav_map)
	{
		const a = $('<a></a>', {
			"text": nav_map[entry].text,
			"accesskey": nav_map[entry].accesskey,
		})
		if (url.includes(entry) || !url.includes('html') && entry == 'index.html')
		{	
			a.addClass('nav_active')
		}
		else
		{
			a.attr('href',entry)
		}
		tag_nav.append(a)
	}
	$('#section_nav').append(tag_nav)
}

$(document).ready(_ => {
	generate_nav()
})

