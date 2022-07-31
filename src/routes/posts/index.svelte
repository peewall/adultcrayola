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

  <div class="container flex min-w-full overflow-scroll">
    <div class="grow flex flex-col items-center mt-12">
        <div class="{opaque ? 'opacity-100': 'opacity-0'} fixed text-center transition-opacity ease-in-out duration-666">
        <p class="font-main mx-auto text-3xl px-6 py-4 font-bold bg-indigo-500 text-amber-50">blah, blah, blah.</p>
      </div>
      <div >
    <div class="flex flex-col mt-24 bg-[url('paper.jpeg')] px-8 py-4 rounded-md border-black border-4 overflow-scroll max-h-[60vh] divide-black divide-dashed divide-y-2">
        {#each posts as { title, slug, content }}
            <PostCard {title} {content} {slug} />
        {/each}
    </div>
    </div>
    
    </div>
    
  </div>
