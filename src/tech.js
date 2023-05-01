(async () => {
  await fetchData();
  generateTechnology();
})();

const generateTechnology = () => {
  const mainContainerEl = document.querySelector(".main-container");
  const imageContainerEl = document.getElementById("image");
  const nameEl = document.getElementById("name");
  const descriptionEl = document.getElementById("description");
  const mainContainerID = mainContainerEl.id;
  const technology = mainData.technology;

  const index = technology.findIndex(
    (technology) => technology.name === mainContainerID
  );
  const { name, description, images } = technology[index];

  if (window.innerWidth >= 1400) {
    imageContainerEl.setAttribute("src", `${images.portrait}`);
  } else {
    imageContainerEl.setAttribute("src", `${images.landscape}`);
  }

  nameEl.innerText = name;
  descriptionEl.innerText = description;
};
