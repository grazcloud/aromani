import ReactDOMServer from 'react-dom/server';
// @ts-ignore - react-router-dom/server exists at runtime
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return html;
}
