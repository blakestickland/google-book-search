
export const modalEvents = (books) => {
  // Get modal element
  // const modal = document.getElementById("simpleModal");
  // Get open modal button
  // const modalBtn = document.getElementById("modalBtn");
  // const modalBtn = document.querySelectorAll(".modalBtn");
  // Get close Btn
  // const closeBtn = document.getElementsByClassName("closeBtn")[0];
  // const closeBtn = document.querySelectorAll(".closeBtn");

  // books.forEach(book => {
  //     // console.log("modal ids: ", `modal-${book.id}`);
  //     const modal = document.getElementById(`modal-${book.id}`);
  //     const modalBtn = document.getElementById(`modalBtn-${book.id}`);
  //     const closeBtn = document.getElementById(`closeBtn-${book.id}`);

  //     // Listen for open click
  //     modalBtn.forEach(() => addEventListener("click", openModal));
  //     // Listen for close click
  //     closeBtn.forEach(()=> addEventListener("click", closeModal));
  //     // Listen for Overlay click
  //     window.addEventListener("click", clickOutside);

  //     // Function to open modal
  //     function openModal() {
  //         modal.style.display = "block";
  //     }

  //     // Function to close modal
  //     function closeModal() {
  //         modal.style.display = "none";
  //     }

  //     // Function to close modal if outside click
  //     function clickOutside() {
  //         if(event.target === modal) {
  //             modal.style.display = "none";
  //         }
  //     }
  // });
  // return;

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
    //   const modal = document.querySelector(button.dataset.modalTarget);
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

    // Listen for Overlay click
    window.addEventListener("click", clickOutside);
    
    // Function to close modal if outside click
    function clickOutside() {
        const modal = document.querySelectorAll(".modal");
        if(event.target === modal) {
            modal.forEach( e => e.style.display = "none");
        }
    }

  function openModal(modal) {
    if (modal == null) return console.log(1234);
    modal.style.display = "block";
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.style.display = "none";
  }
}

