<script context="module">
    import { marked } from 'marked'

</script>
<script>
    export let title = ''
    export let content = ''
    export let slug = ''
</script>

<div class="container font-main">
    <a href={`/posts/${slug}`}>
      <div>
        <p class="font-bold text-center uppercase">{title}</p>
        <p>
          {@html marked(content.slice(0, 200))}...
        </p>
      </div>
    </a>
</div>