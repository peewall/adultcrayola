<script context="module">
    import { client } from '$lib/graphql-client'
    import { postQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
  
    export const load = async ({ params }) => {
      const { slug } = params
      const variables = { slug }
      const { post } = await client.request(postQuery, variables)
  
      return {
        props: {
          post,
        },
      }
    }
  </script>
  
  <script>
    export let post
  </script>
  
  <h1 class="text-4xl font-semibold mb-5">{post.title}</h1>
    
  <article class="prose prose-xl">
    {marked(post.content)}
  </article>