<script>
    export let name, age;
    const changeAge = (num) => {
        age = age + num
    }
</script>
<style>
    h1 {
        color: var(--primary-color);
    }
</style>
<div class="container">
    <div class="card">
        <h1>Hello {name}!</h1>
        <h3>i am {age} yrs old</h3>
        <button class="btn btn-primary" on:click={()=>changeAge(1)}>+1</button>
        <button class="btn btn-danger" on:click={()=>changeAge(-1)}>-1</button>
    </div>
</div>
