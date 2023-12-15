<script>
    let isShining = true;

    function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  let col = generateRandomColor();
  
    function toggleLamp() {
      isShining = !isShining;
    }
  
    setInterval(() => {
    col = generateRandomColor();
    toggleLamp();
  }, Math.random() * 1000 + 500);
  </script>
  
  <div class= "shining" style= "background-color: {col}">
    <span></span>
    <span></span>
    <span></span>
  </div>
  
  <style>
    div {
      width: 20px;
      height: 20px;
      background-color: yellow;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulse 1s infinite alternate;
    }
  
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.5);
      }
    }
  
  
  </style>