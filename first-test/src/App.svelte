<script>
    export let name, age;
    let toggleControls = false
    const handleControlsToggle = () => {
        toggleControls = !toggleControls
    }
    const changeAge = (num) => {
        age = age + num
    }
</script>
<style>
    h1 {
        color: var(--primary-color);
    }

    h3 {
        margin-bottom: 20px;
    }
</style>
<div class="container">
    <div class="card">
        <h1>Hello {name}!</h1>
        <h3>i am {age} yrs old</h3>
        <h3><button class="btn btn-primary" on:click={handleControlsToggle}>Toggle Controls</button></h3>

        {#if toggleControls === true}
            <button class="btn btn-primary" on:click={()=>changeAge(1)}>+1</button>
            <button class="btn btn-danger" on:click={()=>changeAge(-1)}>-1</button>
            <div>binding age to input</div>
            <input type="number" bind:value={age}/>
        {/if}
    </div>
</div>
