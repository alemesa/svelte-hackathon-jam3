<script>
    import Header from '$lib/header.svelte'
    import '../app.css';
</script>

<Header />
<main>
    <slot></slot>
</main>

<style>
    main {
 width: 100%;
    margin: 0 auto;
  max-width: 1350px;
  padding: 0 32px;
    }
    </style>