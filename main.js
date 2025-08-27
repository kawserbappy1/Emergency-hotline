// resud function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// action on card
const singleCard = document.querySelectorAll(".single");
for (let card of singleCard) {
  // coutn heart
  const heart = card.children[0].children[1];
  heart.addEventListener("click", function () {
    const heartDigit = Number(getElement("heart").innerText);
    getElement("heart").innerText = heartDigit + 1;
  });

  // call button action here
  const callBtn = card.children[5].children[1];
  const callName = card.children[1].innerText;
  const dialNumber = card.children[3].innerText;
  callBtn.addEventListener("click", function () {
    let coinCount = Number(getElement("star").innerText);
    getElement("star").innerText = coinCount - 20;
    if (coinCount < 20) {
      alert(`You do not have sufficent coin. you have to have minimum 20 coin to call`);
      getElement("star").innerText = 0;
      return;
    }
    alert(`Calling ${callName} ${dialNumber}...`);
    const newDiv = document.createElement("div");
    const historyDiv = getElement("history");
    newDiv.innerHTML = `<div class="flex justify-between bg-[#FAFAFA] my-2 p-2 rounded-lg">
                      <div>
                        <h3 class="font-bold mb-1">${callName}</h3>
                        <p>${dialNumber}</p>
                      </div>
                      <div>
                        <p><span>${new Date().toLocaleTimeString()}</span></p>
                      </div>
                    </div>`;
    historyDiv.append(newDiv);
  });

  // Copy text and past anywhere

  const copyNumber = card.children[3].innerText;
  const copyBtn = card.children[5].children[0];
  copyBtn.addEventListener("click", function () {
    const copyCount = Number(getElement("copy").innerText);
    navigator.clipboard
      .writeText(copyNumber)
      .then(() => {
        alert(`Copid ${copyNumber}`);
        getElement("copy").innerText = copyCount + 1;
      })
      .catch((err) => {
        alert(`Failed to Copy ${copyNumber}`, err);
      });
  });
}

// clear history Button
getElement("clear-btn").addEventListener("click", function () {
  getElement("history").innerHTML = "";
});
