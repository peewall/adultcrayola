<script>
    export let url = ''
    export let name = ''
    export let slug = ''

  </script>

<div class="flex flex-col items-center border-4 border-black z-10 overflow-hidden bg-[url('paper.jpeg')]">
    <img src={url} alt={name} class="max-h-[300px]"/>
    <a href={`/projects/${slug}`} class="absolute">
      <div class="bg-blue-50 px-4 py-2 transition-all hover:rounded-[50%]">
        <p class="font-main font-bold text-2xl lg:text-3xl">{name}</p>
      </div>
    </a>
</div>