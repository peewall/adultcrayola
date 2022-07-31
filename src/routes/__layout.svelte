<script>
	import '../app.css'

    const colorArray = ['text-rose-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-violet-500']
    $: colorP = 0
    $: colorW = 1

	let opaque = true
    const timer = () => setTimeout(() => {
        colorP < 6 ? colorP += 1 : colorP = 0
        colorW < 6 ? colorW += 1 : colorW = 0
        timer()
    }, 550)
    timer()
</script>
<svelte:window on:scroll={ _ => window.pageYOffset < 10 ? opaque = true : opaque = false }/>
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@800&family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<main class="container mx-auto px-4 mb-24 grow">
	<img src="code.gif" alt="html tag animation" class= "absolute top-20 left-10 opacity-75 z-0 max-w-[75px]"/>
	<img src="code.gif" alt="html tag animation" class="absolute bottom-20 right-10 z-0 max-w-[75px] opacity-75"/>
	<img src="pencil.gif" alt="drawing animation" class="absolute bottom-[20%] left-[10%] z-0 max-w-[50px] opacity-50"/>
	<img src="pencil.gif" alt="drawing animation" class="absolute bottom-[40%] left-[65%] z-0 max-w-[50px] opacity-50"/>
	<img src="code.gif" alt="html tag animation" class="absolute bottom-[55%] left-[55%] z-0 max-w-[75px] opacity-10"/>
	<img src="code.gif" alt="html tag animation" class="absolute bottom-[55%] right-[75%] z-0 max-w-[75px] opacity-40 rotate-[40deg]"/>
	<img src="pencil.gif" alt="drawing animation" class="absolute top-[5%] right-[2%] z-0 max-w-[50px] opacity-25 rotate-12"/>



	<a href="/" class="{opaque ? 'opacity-100': 'opacity-10'} transition-all duration-500 ease-in-out fixed">
		<p class="font-alt text-rose-500 absolute top-1 left-3 hover:scale-150 transition-all ease-in-out duration-[750ms]"><span class="{colorArray[colorP]}">p</span>.<span class="{colorArray[colorW]}">w</span></p>
	</a>
  <slot/>
</main>
<footer class="grow fixed bottom-0 p-4 border-t-2 border-rose-500 bg-amber-50 border-dashed min-w-full flex items-center gap-4 justify-center text-center z-20">
	<a href='https://open.spotify.com/user/pdub004?si=569bd80180134690' target="_blank">
		<p class="font-main uppercase tracking-wide">what I'm listening to</p>
	</a>
	<a href="/contact">
		<p class="font-main uppercase tracking-wide">get in touch</p> 
	</a>
</footer>