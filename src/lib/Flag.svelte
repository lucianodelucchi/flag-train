<script lang="ts">
    import { assets } from '$app/paths';

    export let country;
</script>

<div class="flex justify-center">
    <img src="{assets}/flags/svg/{country}.svg" class="lg:w-1/2 w-full" alt="Flag to guess..."/>
</div>