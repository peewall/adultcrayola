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
  
  <p class="text-4xl mb-5 pt-24 font-main">{post.title}</p>
    
  <p class="font-main">
    {@html marked(post.content)}
  </p>