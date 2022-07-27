<script>
    export let url = ''
    export let name = ''
    export let slug = ''

  </script>

<div class="flex flex-col items-center border-4 border-black">
    <img src={url} alt={name} />
    <a href={`/projects/${slug}`} class="absolute">
      <div class="bg-blue-50 px-4 py-2 transition-all hover:rounded-[50%]">
        <p class="font-main font-bold text-2xl lg:text-3xl">{name}</p>
      </div>
    </a>
</div>