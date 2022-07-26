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
        <p class="font-bold text-center">{title}</p>
        <p>
          {@html marked(content)}
        </p>
      </div>
    </a>
</div>