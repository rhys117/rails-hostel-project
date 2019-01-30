class VisitorsController < ApplicationController
  def index
    @slideshow_photos = Dir.entries("app/assets/images/slideshow_top").select { |f| !File.directory? f }.sort
    lang = 'english' unless params[:lang] == 'ind'
    @vision = load_content('vision', lang)
    @hostel = load_content('hostel', lang)
    @activities = load_content('activities', lang)
  end

  private

  def load_content(content, lang)
    YAML.load_file("#{::Rails.root}/lib/#{lang}/#{content}.yml")
  end
end
