<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let tags = []
    
    $: hover = false
  </script>

<a href={`/projects/${slug}`} class="my-8 px-12">
<div
on:mouseenter={() => hover = true}
on:mouseleave={() => hover = false}
class="flex flex-col items-center z-10 rounded-sm shadow-md hover:shadow-lg ease-in-out transition-all max-w-min">
  <div
  class:invisible={!hover} 
  class="absolute py-2 transition-all ease-in-out text-center">
  <p class="font-main uppercase font-bold text-amber-50 px-2 py-1 bg-indigo-900 mb-2">Filed under:</p>
  {#each tags as tag}
      <p class="font-main uppercase font-bold text-amber-50">{tag}</p>
  {/each}
  </div>
  <img src={url} alt={name} class:opacity-10={hover} class="max-w-[400px] object-cover transition-all ease-in-out mx-auto"/>
</div>
</a>