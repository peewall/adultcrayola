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
  <div class="container flex min-w-full overflow-scroll">
    <div class="grow mx-auto pt-12 flex flex-col items-center">
      <div class="{opaque ? 'opacity-100': 'opacity-10'} fixed text-center transition-opacity ease-in-out duration-666">
        <p class="font-alt mx-auto text-3xl">ooh pretty colors!</p>
        <p class="font-main italic">(or: stuff i designed)</p>
      </div>
      <div class="mt-24 flex flex-col gap-8">
        {#each projects as { name, slug, description, image, sourceCode }}
        <ProjectCard {name} {description} url={image[0].url} {slug} {sourceCode} />
        {/each}
      </div>
    
    </div>
    
  </div>
