<script context="module">
    import { client } from '$lib/graphql-client'
    import { postsQuery } from '$lib/graphql-queries'
    import PostCard from '$lib/components/post-card.svelte'
    export const load = async () => {
      const { posts } = await client.request(postsQuery)
      return {  
        props: {
          posts
        },
      }
    }
  </script>
  <script>
    export let posts
    let opaque = true
  </script>
  <svelte:window on:scroll={ _ => window.pageYOffset < 10 ? opaque = true : opaque = false }/>

  <div class="container flex min-w-full">
    <div class="grow flex flex-col items-center mt-8">
        <p class="font-main mx-auto text-3xl px-4 py-2 font-bold bg-indigo-500 text-amber-50">blah, blah, blah.</p>
    <div class="flex flex-col mt-4 bg-[url('$lib/assets/paper.png')] px-8 py-4 rounded-md border-black border-4 overflow-y-scroll max-h-[70vh] divide-black divide-dashed divide-y-4">
        {#each posts as { title, slug, content }}
            <PostCard {title} {content} {slug} />
        {/each}
    </div>
    
    </div>
    
  </div>
