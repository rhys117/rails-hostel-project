class VisitorsController < ApplicationController
  def index
    @slideshow_photos = Dir.entries("app/assets/images/slideshow_top").select {|f| !File.directory? f}.sort
    lang = 'english' unless params[:lang] == 'ind'
    @vision = vision(lang)
    @activities = activities(lang)
    p @activities
  end

  private
    def vision(lang)
      YAML.load_file("#{::Rails.root}/lib/#{lang}/vision.yml")
    end

    def activities(lang)
      YAML.load_file("#{::Rails.root}/lib/#{lang}/activities.yml")
    end
end
