
const change_lang = () => {

	const select = document.getElementById('i-lang')
	const options = Array.from(select.options, o => o.value)

	const url = location.pathname

	const parts = url.split('/').filter(x => !options.includes(x))
	const begin = parts.slice(0, -1)
	const end = parts.at(-1)

	const next = select.value

	let res = begin

	if (next !== 'es')
	{
		res.push(next)	
	}

	res.push(end)

	location.pathname = res.join('/')
}

