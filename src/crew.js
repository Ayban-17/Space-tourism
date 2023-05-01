(async () => {
  await fetchData();
  generateCrew();
})();

const generateCrew = () => {
  const mainContainerEl = document.querySelector(".main-container");
  const imageContainerEl = document.querySelector(".image");
  const roleEl = document.querySelector(".role");
  const nameEl = document.querySelector(".name");
  const bioEl = document.querySelector(".bio");

  const mainContainerID = mainContainerEl.id;

  const crew = mainData.crew;
  const index = crew.findIndex((crew) => crew.name === mainContainerID);
  const { name, images, role, bio } = crew[index];
  imageContainerEl.setAttribute("src", `${images.png}`);
  roleEl.textContent = role;
  nameEl.textContent = name;
  bioEl.textContent = bio;
};
