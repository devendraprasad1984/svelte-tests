<script>
    import AddPerson from './components/people/addPerson.svelte'
    import NameAge from './components/people/nameAge.svelte'

    export let appHeader
    let people = [
        {name: 'devendra', age: 38},
        {name: 'jyoti', age: 24},
        {name: 'kumar', age: 34},
        {name: 'latte', age: 12},
        {name: 'noob', age: 21},
        {name: 'deva ki adalat', age: 23},
    ]
    const addPerson=(e)=>{
        e.preventDefault()
        let newPerson=e.detail
        console.log('event emitted from add person', e.detail)
        people=[...people, newPerson]
    }
</script>

<div class="container">
    <h1 class="text-primary">{appHeader}</h1>
    <AddPerson on:addperson={addPerson}/>
    {#each people as p}
        <NameAge {...p}/>
    {/each}
</div>
