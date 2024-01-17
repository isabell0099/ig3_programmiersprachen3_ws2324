<script>
    export let searchFilter = "";
    export let onInput = () => {};
  </script>
  
  <div class="search-bar">
    <input
      type="text"
      bind:value={searchFilter}
      on:input={onInput}
      placeholder="Suche nach Dinosauriern"
    />
  </div>
  
  <style>
    .search-bar {
      position: relative;
      width: 40vw;
      margin-top:20px;
      margin-right: 60px;
       

    
       
    }
  
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
    }
  </style>
  