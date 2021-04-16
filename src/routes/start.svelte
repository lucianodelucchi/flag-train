<script lang="ts">
    import Flag from "$lib/Flag.svelte";
    
    import countries from '$lib/Countries';

    const countryCode = countries.filter(c => c.name.official.includes('Arg'))[0].cca3;
    
</script>
<Flag {countryCode}></Flag>