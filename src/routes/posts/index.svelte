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
        <div class="{opaque ? 'opacity-100': 'opacity-10'} fixed text-center transition-opacity ease-in-out duration-666">
        <p class="font-alt mx-auto text-3xl">blah, blah, blah.</p>
        <p class="font-main italic text-center">(or: words i wrote)</p>
      </div>
      <div >
    <div class="flex flex-col gap-8 mt-24">
        {#each posts as { title, slug, content }}
            <PostCard {title} {content} {slug} />
        {/each}
    </div>
    </div>
    
    </div>
    
  </div>
