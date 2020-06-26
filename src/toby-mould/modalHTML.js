import * as data from './data.js';

const modalContent = document.querySelector('#simpleModal .modal-content');
const modalStructure = document.querySelector('#simpleModal');

// let modalhtml =

export const something = projectNumber => {
  console.log(`It Reached inside the SOMETHING FUNCTION`);
  // console.log(data);
  const project = data.data[projectNumber];
  // console.log(projects.difficult);
  const modalhtml = `
  <span class="close-btn">&times;</span>
  <!-- Modal Content on Project -->
    <article id="project1" class="text-justify">
  
    <!-- Column-1 -->
      <div id="column-1">
  
        <!-- Summary Section -->
        <div id="summary">
          <h3>${project.name}</h3>
          <div id="project1Image">
            <h4>Live Preview</h4>
          </div>
          <div class="buttons">
            <i class="fas fa-desktop"
              ><a
                class="btn"
                href="${project.live}"
                target="_blank"
                >Live Preview</a
              ></i
            >
            <i class="fas fa-code-branch"
              ><a
                class="btn"
                href="${project.github}"
                target="_blank"
                >Source Private</a
              ></i
            >
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
              ${project.technology}
            </ul>
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
          ${project.features}
          </ul>
        </div>
      </div>
    </article>`;
  //
  modalContent.innerHTML = modalhtml;
  console.log(modalContent);
  // modalStructure.style.display = 'block';

  // projects.forEach(project => {
  //   //
  //   // console.log('hello');
  // });
};
