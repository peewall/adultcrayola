<script context="module">
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
</div>
