<script lang="ts">
    let count = $state(0);
</script>

<button onclick={() => count++}>count is {count}</button>

<style>
    button {
        background: red;
    }
</style>