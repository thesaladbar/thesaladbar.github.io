#app.rb

require 'rubygems'
require 'rack'

class App
  def call(env)
    contents = File.open("index.html") { |f| f.read }
    return [200, {"Content-Type" => "text/html"}, [contents]]
  end
end

Rack::Handler::WEBrick.run(App.new, :Port => 8080)
