<script>
    import {createEventDispatcher} from 'svelte'
    import {dispatchActions} from "../../common/constants";

    const dispatch = createEventDispatcher()
    let initPerson = {
        name: '',
        age: 0
    }
    let person = {...initPerson}
    const handleAddPerson = () => {
        dispatch(dispatchActions.addPerson, person)
        person = {...initPerson}
    }
</script>

<div>
    <h3>Add new person</h3>
    <div class="col" style="width: 50%">
        <input type="text" bind:value={person.name} placeholder="Person Name"/>
        <input type="number" bind:value={person.age} placeholder="Age"/>
        <button on:click={handleAddPerson} class="btn btn-primary">Add</button>
    </div>
</div>
