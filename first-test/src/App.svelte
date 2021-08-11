<script>
    import NameAge from './components/nameAge.svelte'

    export let appHeader
    let people = [
        {name: 'devendra', age: 38},
        {name: 'jyoti', age: 24},
        {name: 'kumar', age: 34},
        {name: 'latte', age: 12},
        {name: 'noob', age: 21},
        {name: 'deva ki adalat', age: 23},
    ]
</script>

<div class="container">
    <h1 class="text-primary">{appHeader}</h1>
    {#each people as p}
        <NameAge {...p}/>
    {/each}
</div>
