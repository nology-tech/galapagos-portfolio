import * as dataFile from './data.js';

//STEP 3 - USING THE PROJECT BUTTON NUMBER, RETRIEVE THE PROJECTS DATA, INPUT IT INTO THE MODAL CONTENT TEMPLATE 'modalhtml' AND INSERT IT INTO PAGE.
export const insertProjectModalFunction = projectNumber => {
  console.log(`It Reached inside the SOMETHING FUNCTION`);
  const project = dataFile.data[projectNumber];
  const modalLocalScope = document.querySelector('#simpleModal');
  const modalhtml = `
  <div class='modal-content-wrapper'>
    <div class="modal-content">
    <!-- Modal Content on Project -->
      <article class="text-justify">
    
      <!-- Column-1 -->
        <div id="column-1">
    
          <!-- Summary Section -->
          <div id="summary">
            <h3>${project.name}</h3>
            <div class='image-section'>
              <a href="${project.live}">
              <img src="${project.image}" alt="${project.name}" class="image">
              </a>
            </div>
            <div class="buttons">
              <a class="btn" href="${project.live}" target="_blank">
                <i class="fas fa-desktop"></i>
                <p>Live Preview</p>
              </a>
              <a class="btn" href="${project.github}" target="_blank">
                <i class="fas fa-code-branch"></i>
                <p>Source Private</p>
              </a>
            </div>
            <p>
            ${project.overview}
            </p>
          </div>
    
          <!-- Technology Section -->
          <div id="tech">
            <h4>Technologies Used</h4>
            <div class="table">
              <ul class="fa-ul">
                ${project.technology.join('')}
              </ul>
              </div>
              <div class='lang-percent'> 
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
              </div>
          </div>
        </div>
    
        <!-- Column 2 -->
        <div id="column-2">
    
          <!-- Role Content -->
          <div id="role">
            <h4>My Role</h4>
            <p>
            ${project.role}
            </p>
          </div>
    
          <!-- Difficulties Content -->
          <div id="diff">
            <h4>Project Difficulties</h4>
            <p>
            ${project.difficult}
            </p>
          </div>
    
          <!-- Solution Content -->
          <div id="sol">
            <h4>My Solution</h4>
            <p>
            ${project.solution}
            </p>
          </div>
    
          <!-- Notable Features Content -->
          <div id="feat">
            <h4>Notable Features</h4>
            <ul>
            ${project.features.join('')}
            </ul>
          </div>
        </div>
      </article>
      </div>
    </div>`;
  modalLocalScope.innerHTML = modalhtml; // keep
  modalLocalScope.style.display = 'block'; //
  // const addHoverEventListeners = () => {
  //   const modalImageSectionLocal = document.querySelector('#summary .image');
  //   const test = event => console.log(`modalImageSections: ${event.type}`);
  //   return modalImageSection.addEventListener('mouseenter', test);
  // };
};
