
<script>

    const colorArray = ['text-rose-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-violet-500']
    $: colorP = 0
    $: colorE = 1
    $: colorT = 2
    $: colorE2 = 3


    const timer = () => setTimeout(() => {
        colorP < 6 ? colorP += 1 : colorP = 0
        colorE < 6 ? colorE += 1 : colorE = 0
        colorT < 6 ? colorT += 1 : colorT = 0
        colorE2 < 6 ? colorE2 += 1 : colorE2 = 0
        timer()
    }, 550)
    timer()
</script>
<div class="flex flex-col min-w-screen min-h-[80vh] items-center justify-center container min-w-full">
    <div class="grow flex flex-col items-center mt-24 lg:mt-48">
        <p class="font-alt text-7xl text-rose-600 text-center">i'm <span class="{colorArray[colorP]} underline underline-offset-8">p</span><span class="{colorArray[colorE]} underline underline-offset-8">e</span><span class="underline underline-offset-8 {colorArray[colorT]}">t</span><span class="underline underline-offset-8 {colorArray[colorE2]}">e</span></p>
        <div class="absolute lg:top-10 lg:right-10 bottom-20 right-2 lg:px-12 lg:py-6 px-4 py-2 border-black border-2 rounded-md bg-[url('$lib/assets/paper.jpeg')] bg-cover bg-indigo-500 bg-blend-screen bg-opacity-75 lg:max-w-[300px] max-h-fit">
           <p class="font-main text-[.70rem] lg:text-base">i'm a designer & engineer. <br/> i build on stuff on the web. <br/>
            like my stuff? <br/><a href="mailto:peter@latebloomer.studio" target="_blank" class="font-bold">hire me.</a> </p>
        </div>  
        <div class="mt-8 flex flex-col gap-8 px-12 py-6 border-black border-4 rounded-md hover:rounded-[50%] ease-in-out transition-all bg-[url('$lib/assets/bk-mta.jpg')] bg-cover bg-rose-500 bg-blend-screen bg-opacity-75">
            <a href='/projects' class="bg-indigo-500 rounded-sm px-2 py-1">
                <p class="font-main text-3xl text-center uppercase tracking-wide text-amber-50 font-bold">projects</p>
            </a>
            <a href='/posts' class="bg-rose-500 rounded-sm px-2 py-1">
                <p class="font-main text-3xl  text-center uppercase tracking-wide text-amber-50 font-bold">writing</p>
            </a>
        </div>  
    </div>

</div>

