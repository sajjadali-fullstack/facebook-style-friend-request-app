
  // Profile Data
  // “I stored UI state using JavaScript objects.”

  const profiles = [
    { name: "Angel Priya", isFriend: false },  // Friend status is stored in the profile data Default is false
    { name: "Riya Sharma", isFriend: false },
    { name: "Neha Verma", isFriend: false }
  ];

  let currentIndex = 0;  // Shows current which index of the profile is active

  const nameEl = document.querySelector(".profile h1");
  const statusEl = document.getElementById("status");
  const addBtn = document.getElementById("add");
  const removeBtn = document.getElementById("remove");
  const sliderBtns = document.querySelectorAll(".slider-buttons button");

  // Swiper Initialization
  const swiper = new Swiper(".swiper", {
    on: {
      slideChange() {
        currentIndex = this.activeIndex;
        updateUI();
        updateButtons(currentIndex);
      }
    }
  });

  // Slider buttons
  sliderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      swiper.slideTo(btn.dataset.slide);
    });
  });

// Only active slider button shows Black background
  // 
  function updateButtons(index) {
    sliderBtns.forEach(btn => btn.classList.remove("active"));
    sliderBtns[index].classList.add("active");
  }

  // Update UI from stored data  Current Profile Data Shows
  function updateUI() {
    const profile = profiles[currentIndex];

    // name Element
    nameEl.textContent = profile.name;


    // if  user is friend
    if (profile.isFriend) {
      statusEl.textContent = "Friends";
      statusEl.style.color = "green";
      document.body.style.backgroundColor = "#f1e3c8";
      // else user is not friend
    } else {
      statusEl.textContent = "Stranger";
      statusEl.style.color = "red";
      document.body.style.backgroundColor = "cornflowerblue";
    }
  }

  // Add Friend SLider number button :- jab user 1/2/3 pe click kare, Slider us index pe chala jaye
  addBtn.addEventListener("click", () => {
    profiles[currentIndex].isFriend = true;
    updateUI();
  });

  // Remove Friend (store state)  Status restart to Stranger :- isFriend: false
  removeBtn.addEventListener("click", () => {
    profiles[currentIndex].isFriend = false;
    updateUI();
  });

  // Initial load
  updateUI();