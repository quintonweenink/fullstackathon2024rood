import {LitElement, css, html} from 'lit';
import './file-upload-button.js';
import {toggleNightmare} from './jakob-nielsen-nightmare.js';

export class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  onSubmit(event) {
    const formData = new FormData(event.target);
    const files = formData.get('files');
    const url = URL.createObjectURL(files);

    console.log(url);

    // fetch('/api/medium/article',{
    //   method: 'POST',
    //   body: new FormData(event.target)
    // });

    event.preventDefault();
  }

  // Render the UI as a function of component state
  render() {
    return html`
      
      <div class="centerContainer">
        <div class="logoContainer"><img src="./src/assets/facebook.svg" id="logoImage" @click="${toggleNightmare}"></div>
  
        <h1>Timeline</h1>
  
        <form @submit="${this.onSubmit}" action="#/">
            <label for="messageText">Message</label>
            <textarea id="messageText" name="message-text"></textarea>
  
            <ui-file-upload-button name="files" text="Upload"></ui-file-upload-button>
  
            <button type="submit">submit</button>
        </form>

      </div>
    `;
  }
}

customElements.define('ui-app', App)
