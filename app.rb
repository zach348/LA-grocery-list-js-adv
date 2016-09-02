require 'sinatra'

def homepage
  <<-HTML
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>grocery-list-js</title>
    </head>
    <body>
      <a href="js-specs.html">Jasmine Specs</a></br>
      <a href="index.html">Index Page</a>
    </body>
    </html>
  HTML
end

get '/' do
  homepage
end
