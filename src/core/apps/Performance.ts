let startTime: number;
const intervalTime = 3000;

function checkLatency() {
  startTime = performance.now(); // save the start time
  // Make some network request, e.g. fetch data from an API
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      const latency = performance.now() - startTime; // calculate the latency
      // console.log(`Latency: ${ Math.round(latency)} ms`);
      // Display the latency on the page, e.g. update a DOM element
      const latencyDisplay = document.querySelector("#latency");
      if (latencyDisplay)
        latencyDisplay.innerHTML = `${ Math.round(latency)} ms`;

    })
    .catch(error => console.log(error));
}
checkLatency(); 
setInterval(checkLatency, intervalTime);