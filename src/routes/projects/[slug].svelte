<script context="module">
    import { client } from '$lib/graphql-client'
    import { projectQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
   

    export const load = async ({ params }) => {
      const { slug } = params
      const variables = { slug }
      const { project } = await client.request(projectQuery, variables)
  
      return {
        props: {
          project,
        },
      }
    }
  </script>
  
  <script>
    import forward from '$lib/assets/forwardFinger.png';
    import back from '$lib/assets/backwardFinger.png'

    export let project
    $: imagePage = 0
  </script>
  
  <div class="mb-5 pt-12 flex flex-col overflow-x-hidden min-h-[93vh] items-center">
    <img
      class:mb-8={project.image.length == 1}
      class="rounded-sm z-10 object-cover xl:max-w-[40vw]"
      src={project.image[imagePage].url}
      alt={project.title}
    />
    {#if project.image.length > 1}
    <div class="flex items-center justify-evenly my-4 min-w-full">
      <button class="-rotate-[85deg] max-w-[125px] transition-all ease-in-out hover:-rotate-[50deg]" on:click={() => imagePage > 0 && imagePage--}>
        <img src={back} alt="back button"/>  
      </button>
      <button 
      class:opacity-10={imagePage == project.image.length - 1}
      class="rotate-[85deg] max-w-[125px] transition-all ease-in-out hover:rotate-[50deg]" on:click={() => imagePage < project.image.length - 1 && imagePage++}>
        <img src={forward} alt="forward button" />  
      </button>
    </div>
    {/if} 

    <div class="px-4 py-2 border-black border-2 rounded-md bg-[url('$lib/assets/paper.png')] bg-cover bg-indigo-500 bg-blend-screen bg-opacity-75 z-10 max-w-[500px]">
      <h1 class="text-xl font-bold font-main">{project.name}</h1>

      <p class="font-main">
        {@html marked(project.description)}
      </p>     
      {#if project.sourceCode} 
        <div class="font-main lowercase">
          <a href={project.sourceCode} target="_blank">Code Here</a> 
      </div>   
     {/if} 
     {#if project.demo} 
        <div class="font-main uppercase font-bold flex items-center">
          <a href={project.demo} target="_blank">Demo Here</a> 
          <img src={back} alt="pointing finger" class="-rotate-[90deg] max-w-[50px]"/>
      </div>   
     {/if} 
    </div>
</div>
