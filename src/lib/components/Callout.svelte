<!-- src/lib/components/Callout.svelte -->
<script>
  export let type = 'tip';
  export let title = type.toUpperCase();
</script>

<div class="callout {type}">
  <div class="callout-title">{title}</div>
  <div class="callout-content">
    <slot />
  </div>
</div>

<style>
  .callout {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    border-left: 4px solid;
  }
  
  .callout.tip {
    background: rgba(0, 255, 0, 0.1);
    border-color: green;
  }
  
  .callout-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
</style>
