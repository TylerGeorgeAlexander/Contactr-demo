const deleteCompanyBtn = document.querySelectorAll(".del-company");

Array.from(deleteCompanyBtn).forEach((el) => {
  el.addEventListener("click", deleteCompany);
});

// Location Tool
async function locate() {
  const nodeId = this.dataset.id;
  console.log(nodeId);

  console.log("This: ", this);
}

// @route   DELETE /companies/:id

async function deleteCompany() {
  const nodeId = this.parentNode.dataset.id;
  console.log(nodeId);
  try {
    const response = await fetch("companies/delete", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: nodeId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

/* Accordion Toggle */

document.querySelectorAll(".accordion-item").forEach((item) => {
  item.addEventListener("show.bs.collapse", function () {
    this.querySelector(".fa-chevron-down").style.display = "none";
    this.querySelector(".fa-chevron-up").style.display = "inline-block";
  });
  item.addEventListener("hide.bs.collapse", function () {
    this.querySelector(".fa-chevron-down").style.display = "inline-block";
    this.querySelector(".fa-chevron-up").style.display = "none";
  });
});
