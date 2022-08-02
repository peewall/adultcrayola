<script context="module">
    import { marked } from 'marked'

</script>
<script>
    export let title = ''
    export let content = ''
    export let slug = ''
</script>

<div class="container font-main py-4 text-slate-800">
    <a href={`/posts/${slug}`}>
      <div>
        <p class="font-bold text-center uppercase italic">{title}</p>
        <p>
          {@html marked(content.slice(0, 200))}...
        </p>
      </div>
    </a>
</div>