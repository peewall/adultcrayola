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
  
  <div>
  <p class="text-4xl mb-5 pt-24 font-main">{post.title}</p>
   
  <div class="bg-[url('$lib/assets/paper.png')] px-4 py-2 rounded-sm border-2 border-slate-800 z-50">
  <p class="font-main max-w-fit ">
    {@html marked(post.content)}
  </p>
  </div>
  </div>