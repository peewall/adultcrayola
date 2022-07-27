<!-- <script context="module">
    import ProjectCard from '$lib/components/project-card.svelte'
    import { client } from '$lib/graphql-client'
    import { projectsQuery } from '$lib/graphql-queries'
    
    export const load = async () => {
        
        const { projects } = await client.request(projectsQuery)
        return {
        props: {
            projects,
        },
        }
    }
   
</script>
<script>
  export let projects
</script>

<h1>Recent Projects by Me</h1>

<div>
  {#each projects as { name, slug, description, image }}
    <ProjectCard  
        name={name}
        description={description}
        url={image[0].url}
        slug={slug} />
  {/each}
</div> -->
<script context="module">
    import gsap from 'gsap';
    import { onMount } from 'svelte';
</script>
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
    <div class="grow flex flex-col items-center justify-center">
        <p class="font-alt text-6xl text-rose-600 text-center">i'm <span class="{colorArray[colorP]} underline underline-offset-8">p</span><span class="{colorArray[colorE]} underline underline-offset-8">e</span><span class="underline underline-offset-8 {colorArray[colorT]}">t</span><span class="underline underline-offset-8 {colorArray[colorE2]}">e</span></p>
        <div class="mt-8 flex flex-col gap-8">
            <a href='/projects'>
                <p class="font-main text-2xl text-center uppercase tracking-wide">projects</p>
            </a>
            <a href='/posts'>
                <p class="font-main text-2xl  text-center uppercase tracking-wide">writing</p>
            </a>
            <a href='/contact'>
                <p class="font-main text-2xl text-center uppercase tracking-wide">say hi!</p>
            </a>
        </div>  

    </div>
</div>

