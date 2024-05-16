import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page;

    try {
      page = await routes[url]; // Assuming routes is a Promise or async function
    } catch (error) {
      console.error('Error fetching route:', error);
      // Handle error gracefully (e.g., display an error message)
    }

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      // Handle missing route (e.g., display a "Not Found" message)
    }
  }
}

export default App;
