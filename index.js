function addingEventListener() {
    // Grab the element with id 'button'
    const input = document.getElementById('button');
  
    // Define the event listener function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener to the element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to activate the event listener
  addingEventListener();
  