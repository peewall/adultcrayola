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
    export let project
  </script>
  
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-lg"
      src={project.image[0].url}
      alt={project.title}
    />
  </div>
  
  <h1 class="text-4xl font-bold mb-5 font-main">{project.name}</h1>
  
  <article class="prose prose-xl font-main">
    {@html marked(project.description)}
  </article>