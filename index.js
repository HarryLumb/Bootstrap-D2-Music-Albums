const deleteTrack = (event) => {
  const track = event.target;

  track.parentElement.parentElement.remove();
};
const modalAdd = () => {
  const modalBtn = document.querySelector(".modal-add-track");
  modalBtn.addEventListener("click", () => {
    const trackName = document.getElementById("trackName");
    const trackLength = document.getElementById("trackLength");
    const trackArtist = document.getElementById("trackArtist");
    const trackNumber = document.getElementById("trackNumber");

    const alert = document.getElementById("alert-banner");
    const table = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    const newTrack = document.createElement("td");
    const newLength = document.createElement("td");
    const newArtist = document.createElement("td");
    const newButtonColumn = document.createElement("td");
    const newNumber = document.createElement("th");
    const newButton = document.createElement("button");

    newButton.classList.add("remove");
    newButton.classList.add("hide-button");
    newTrack.innerHTML = trackName.value;
    newLength.innerHTML = trackLength.value;
    newArtist.innerHTML = trackArtist.value;
    newNumber.innerHTML = trackNumber.value;
    newButton.innerHTML = "Remove";
    newButton.setAttribute("onclick", "deleteTrack(event)");

    newNumber.setAttribute("scope", "row");
    newButtonColumn.appendChild(newButton);
    newRow.appendChild(newNumber);
    newRow.appendChild(newTrack);
    newRow.appendChild(newArtist);
    newRow.appendChild(newLength);
    newRow.appendChild(newButtonColumn);
    table.appendChild(newRow);
    trackName.value = "";
    trackLength.value = "";
    trackArtist.value = "";
    trackNumber.value = "";
    setInterval(() => {
      alert.style.display="none"
    }, 5000);
    alert.classList.add("visible");
  });
};

modalAdd();

const deleteRow = () => {
  const btn = document.querySelectorAll(".remove");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      btn[i].parentElement.parentElement.remove();
    });
    console.log(btn[i]);
  }
};

deleteRow();
