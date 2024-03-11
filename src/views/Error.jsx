const React = require('react');

module.exports = function Page404() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
        <link rel="stylesheet" href="/css/page404.css" />
        <title>FlashCards</title>
      </head>
      <body>
        <section className="page_404">
          <div className="container_404">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>

            <div className="contant_box_404">
              <h3>Упс, что-то пошло не так</h3>

              <a href="/">
                <button type="button" className="">
                  На главную
                </button>
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};