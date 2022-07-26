<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    const colorArray = ['text-blue-500', 'text-green-500', 'text-red-500', 'text-orange-500', 'text-green-500', 'text-indigo-500']

  </script>

<div class="flex flex-col items-center border-4 border-blue-50">
    <img src={url} alt={name} />
    <a href={`/projects/${slug}`} class="absolute">
      <div class="bg-blue-50 px-4 py-2 transition-all hover:rounded-[50%]">
        <p class="font-main {colorArray[Math.floor(Math.random() * colorArray.length)]} font-bold text-2xl lg:text-3xl">{name}</p>
      </div>
    </a>
</div>