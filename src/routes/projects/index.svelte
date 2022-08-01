<script context="module">
    import { client } from '$lib/graphql-client'
    import { projectsQuery } from '$lib/graphql-queries'
    import ProjectCard from '$lib/components/project-card.svelte'
    export const load = async () => {
      const { projects } = await client.request(projectsQuery)

      return {
        props: {
          projects
        },
      }
    }
  </script>
  <script>
    export let projects
    let opaque = true
  </script>
  <svelte:window on:scroll={ _ => window.pageYOffset < 10 ? opaque = true : opaque = false }/>
  <div class="container flex flex-col items-center min-w-full pt-12 overflow-x-hidden">
      <div class="{opaque ? 'opacity-100': 'opacity-0'} fixed transition-opacity ease-in-out duration-666">
        <p class="font-main mx-auto text-3xl uppercase font-bold px-4 py-2 text-amber-50 bg-rose-500 text-center">designs + code.</p>
      </div>
      <br><br>
        {#each projects as { name, slug, description, image, sourceCode, tags, demo }}
        <ProjectCard {name} {description} url={image[0].url} {slug} {sourceCode} {tags} {demo} />
        {/each}
  
  </div>
