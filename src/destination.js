(async () => {
  await fetchData();
  generateDestination();
})();

const generateDestination = () => {
  const mainContainerEl = document.querySelector(".main-container");
  const imageContainerEl = document.getElementById("image");
  const descriptionEl = document.getElementById("description");
  const distanceEl = document.getElementById("distance");
  const travelEl = document.getElementById("travel");

  const mainContainerID = mainContainerEl.id;
  const destinations = mainData.destinations;
  const index = destinations.findIndex(
    (destination) => destination.name === mainContainerID
  );
  const { name, description, distance, images, travel } = destinations[index];

  const titleName = document.createElement("h1");
  titleName.textContent = name;
  const titleDescription = document.createElement("p");
  titleDescription.textContent = description;
  imageContainerEl.setAttribute("src", `${images.png}`);
  descriptionEl.appendChild(titleName);
  descriptionEl.appendChild(titleDescription);
  distanceEl.textContent = distance;
  travelEl.textContent = travel;

  //   destinationMainEl.innerHTML = `<div class="destination__main-section_top-container">
  //       <header class="destination__main-section_top-container_header">
  //         <h6>01</h6>
  //         <h6>PICK YOUR DESTINATION</h6>
  //       </header>
  //       <img src="" alt="" />
  //       <nav class="destination__main-section_top-container_navbar">
  //         <ul
  //           class="destination__main-section_top-container_navbar-links-container"
  //         >
  //         <li
  //         onclick="goTo('destination-moon.html')"
  //         class="destination moon"
  //       >
  //         MOON
  //       </li>
  //       <li
  //         onclick="goTo('destination-mars.html')"
  //         class="destination mars"
  //       >
  //         MARS
  //       </li>
  //       <li
  //         onclick="goTo('destination-europa.html')"
  //         class="destination europa"
  //       >
  //         EUROPA
  //       </li>

  //       <li
  //         onclick="goTo('destination-titan.html')"
  //         class="destination titan"
  //       >
  //         TITAN
  //       </li>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div class="destination__main-section_bottom-container">
  //       <h1>${name}</h1>
  //       <p>
  //         ${description}
  //       </p>
  //     </div>
  //     <hr />
  //         <footer class="destination__footer">
  //           <div class="destination__footer_distance">
  //             <h3>AVG. DISTANCE</h3>
  //             <h1>${distance}</h1>
  //           </div>
  //           <div class="destination__footer_travel-time">
  //             <h3>EST. TRAVEL TIME</h3>
  //             <h1>${travel}</h1>
  //           </div>
  //         </footer>`;
};
