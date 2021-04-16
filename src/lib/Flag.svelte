<script lang="ts">
    export let countryCode: string;
</script>

<div class="flex justify-center">
    <img src="/flags/svg/{countryCode.toLowerCase()}.svg" class="lg:w-1/2 w-full" alt="Flag to guess..."/>
</div>